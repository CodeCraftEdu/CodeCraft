"""Build the published Mission balises references. Standard library only."""
from pathlib import Path
import hashlib
import json
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "assets" / "scratch" / "mission"
ASSETS = {}


def node(op, inputs=None, fields=None, shadow=False):
    return dict(op=op, inputs=inputs or {}, fields=fields or {}, shadow=shadow)


def variable(name): return ("variable", name)
def menu(op, key, value): return node(op, fields={key: [value, None]}, shadow=True)
def compare(op, a, b): return node("operator_" + op, {"OPERAND1": a, "OPERAND2": b})
def gt(a, b): return compare("gt", a, b)
def lt(a, b): return compare("lt", a, b)
def both(a, b): return compare("and", a, b)
def either(a, b): return compare("or", a, b)
def active(): return compare("equals", variable("etat"), "en jeu")
def neg(a): return node("operator_not", {"OPERAND": a})
def touching(): return node("sensing_touchingobject", {"TOUCHINGOBJECTMENU": menu("sensing_touchingobjectmenu", "TOUCHINGOBJECTMENU", "Pilote")})
def wait(value): return node("control_wait", {"DURATION": value})
def until(condition): return node("control_wait_until", {"CONDITION": condition})
def forever(body): return node("control_forever", {"SUBSTACK": body})
def repeat_until(condition, body): return node("control_repeat_until", {"CONDITION": condition, "SUBSTACK": body})
def iff(condition, body, other=None):
    inputs = {"CONDITION": condition, "SUBSTACK": body}
    if other is not None: inputs["SUBSTACK2"] = other
    return node("control_if_else" if other is not None else "control_if", inputs)
def setv(name, value): return node("data_setvariableto", {"VALUE": value}, {"VARIABLE": [name, name]})
def addv(name, value): return node("data_changevariableby", {"VALUE": value}, {"VARIABLE": [name, name]})
def xy(x, y): return node("motion_gotoxy", {"X": x, "Y": y})
def flag(): return node("event_whenflagclicked")
def say(message): return node("looks_say", {"MESSAGE": message})
def stop(): return node("control_stop", fields={"STOP_OPTION": ["all", None]})
def backdrop(name): return node("looks_switchbackdropto", {"BACKDROP": menu("looks_backdrops", "BACKDROP", name)})
def receive(name): return node("event_whenbroadcastreceived", fields={"BROADCAST_OPTION": [name, name]})
def broadcast(name): return node("event_broadcast", {"BROADCAST_INPUT": ("broadcast", name)})


def costume(name, width, height, body):
    raw = f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">{body}</svg>'.encode()
    digest = hashlib.md5(raw).hexdigest()
    ASSETS[digest + ".svg"] = raw
    return dict(assetId=digest, name=name, bitmapResolution=1, md5ext=digest + ".svg", dataFormat="svg", rotationCenterX=width/2, rotationCenterY=height/2)


def actor(name, costumes, x=0, y=0, visible=True, stage=False, layer=1):
    result = dict(isStage=stage, name=name, variables={}, lists={}, broadcasts={}, blocks={}, comments={}, currentCostume=0, costumes=costumes, sounds=[], volume=100, layerOrder=0 if stage else layer)
    if stage: result.update(tempo=60, videoTransparency=50, videoState="off", textToSpeechLanguage=None)
    else: result.update(visible=visible, x=x, y=y, size=100, direction=90, draggable=False, rotationStyle="don't rotate")
    return result


class Blocks:
    def __init__(self, target):
        self.target, self.index, self.stacks = target, 0, []

    def emit(self, spec, parent=None, top=False, position=(40, 40)):
        self.index += 1
        ident = f'{self.target["name"]}-{self.index}'
        block = dict(opcode=spec["op"], next=None, parent=parent, inputs={}, fields=spec["fields"], shadow=spec["shadow"], topLevel=top)
        self.target["blocks"][ident] = block
        if top: block.update(x=position[0], y=position[1])
        if spec["op"] == "control_stop": block["mutation"] = dict(tagName="mutation", children=[], hasnext="false")
        for key, value in spec["inputs"].items():
            if key.startswith("SUBSTACK"):
                head = self.chain(value, ident)
                if head: block["inputs"][key] = [2, head]
            elif isinstance(value, dict):
                child = self.emit(value, ident)
                if value["shadow"]: slot = [1, child]
                elif key in ("CONDITION", "OPERAND", "OPERAND1", "OPERAND2") and value["op"] in {"operator_equals", "operator_gt", "operator_lt", "operator_and", "operator_or", "operator_not", "sensing_touchingobject", "sensing_keypressed"}: slot = [2, child]
                else: slot = [3, child, [4, "0"]]
                block["inputs"][key] = slot
            elif isinstance(value, tuple):
                primitive = [12, value[1], value[1]] if value[0] == "variable" else [11, value[1], value[1]]
                block["inputs"][key] = [3, primitive, [10, ""]] if value[0] == "variable" else [1, primitive]
            else: block["inputs"][key] = [1, [4 if isinstance(value, (int, float)) else 10, str(value)]]
        return ident

    def chain(self, specs, parent):
        first, previous = None, None
        for spec in specs:
            ident = self.emit(spec, previous or parent)
            if previous: self.target["blocks"][previous]["next"] = ident
            else: first = ident
            previous = ident
        return first

    def stack(self, title, hat, body):
        ident = self.emit(hat, top=True, position=(40, 40 + len(self.stacks) * 630))
        self.target["blocks"][ident]["next"] = self.chain(body, ident)
        comment = ident + "-comment"
        self.target["blocks"][ident]["comment"] = comment
        self.target["comments"][comment] = dict(blockId=ident, x=0, y=0, width=290, height=80, minimized=True, text=title)
        self.stacks.append(dict(title=title, hat=hat, body=body))


def build(step):
    if step not in range(7): raise ValueError("Only stages 0 to 6 are published")
    stage_costumes = []
    for name, color, line in [("secteur1", "#e9f2f5", "#bad1db"), ("secteur2", "#eee7f5", "#c7b8da")]:
        grid = ''.join(f'<path d="M{x} 30V330"/>' for x in range(40, 480, 40)) + ''.join(f'<path d="M20 {y}H460"/>' for y in range(60, 330, 40))
        stage_costumes.append(costume(name, 480, 360, f'<rect width="480" height="360" fill="{color}"/><g stroke="{line}" stroke-width="1">{grid}</g><text x="16" y="22" font-family="Arial" font-size="16" fill="#263c50">Mission balises</text><text x="240" y="349" text-anchor="middle" font-family="Arial" font-size="12" fill="#263c50">Flèches : piloter | Balises : +1 | Objectif : 6</text>'))
    stage = actor("Stage", stage_costumes, stage=True)
    pilot = actor("Pilote", [costume("vehicule", 32, 32, '<path d="M16 2L29 27L16 22L3 27Z" fill="#2872a5" stroke="#174568" stroke-width="2"/>')], 0, -100, layer=3)
    beacon = actor("Balise", [costume("balise", 32, 32, '<rect x="2" y="2" width="28" height="28" rx="7" fill="#f6bf3b" stroke="#855d0b" stroke-width="2"/><path d="M16 7V25M7 16H25" stroke="#855d0b" stroke-width="3"/>')], -160, 0, layer=2)
    obstacle = actor("Obstacle", [costume("obstacle", 40, 40, '<path d="M12 2H28L38 12V28L28 38H12L2 28V12Z" fill="#c85349" stroke="#6a2b2b" stroke-width="2"/><path d="M12 12L28 28M28 12L12 28" stroke="white" stroke-width="3"/>')], 0, 0, visible=step==3)
    targets = [stage, pilot, beacon, obstacle]
    values = {}
    if step >= 2: values["score"] = 0
    if step >= 3: values["vies"] = 3
    if step >= 4: values["vitesseObstacle"] = 4
    if step >= 5:
        values["niveau"] = 1
        stage["broadcasts"] = {"secteur2": "secteur2"}
    if step >= 6:
        values["etat"] = "preparation"
        stage["broadcasts"]["resultat"] = "resultat"
    stage["variables"] = {name: [name, value] for name, value in values.items()}
    groups = {target["name"]: Blocks(target) for target in targets}
    if step >= 1:
        moves = []
        for key, axis, amount in [("right arrow", "x", 4), ("left arrow", "x", -4), ("up arrow", "y", 4), ("down arrow", "y", -4)]:
            pressed = node("sensing_keypressed", {"KEY_OPTION": menu("sensing_keyoptions", "KEY_OPTION", key)})
            moves.append(iff(pressed, [node("motion_change"+axis+"by", {"D"+axis.upper(): amount})]))
        for axis, bound in [("x", 200), ("y", 140)]:
            for comparator, limit in [(gt, bound), (lt, -bound)]:
                moves.append(iff(comparator(node("motion_"+axis+"position"), limit), [node("motion_set"+axis, {axis.upper(): limit})]))
        pilot_moves = [iff(active(), moves)] if step >= 6 else moves
        groups["Pilote"].stack("Départ, commandes et quatre limites.", flag(), [xy(0, -100), say(""), forever(pilot_moves + [wait(0.03)])])
        if step >= 6:
            announce = lambda text: node("looks_sayforsecs", {"MESSAGE": text, "SECS": 2})
            groups["Pilote"].stack("Annoncer le résultat après verrouillage, puis arrêter.", receive("resultat"), [iff(compare("equals", variable("etat"), "gagne"), [announce("Mission réussie !")], [announce("Plus de vies : mission terminée.")]), stop()])
    if step >= 2:
        change_side = iff(lt(node("motion_xposition"), 0), [xy(160, 0)], [xy(-160, 0)])
        collect_condition = both(active(), touching()) if step >= 6 else touching()
        groups["Balise"].stack("Séparation initiale, puis un point et l'autre position.", flag(), [xy(-160, 0), until(neg(touching())), forever([iff(collect_condition, [addv("score", 1), change_side]), wait(0.03)])])
        win_actions = [setv("etat", "gagne"), broadcast("resultat")] if step >= 6 else [stop()]
        lose_actions = [setv("etat", "perdu"), broadcast("resultat")] if step >= 6 else [stop()]
        victory = iff(gt(variable("score"), 5), win_actions)
        decision = iff(lt(variable("vies"), 1), lose_actions, [victory]) if step >= 3 else victory
        transition = [iff(both(compare("equals", variable("niveau"), 1), gt(variable("score"), 2)), [setv("niveau", 2), broadcast("secteur2")])] if step >= 5 else []
        initial = [setv(name, value) for name, value in values.items()]
        loop = [decision] + transition
        if step >= 6:
            initial = [setv("etat", "preparation")] + [setv(name, value) for name, value in values.items() if name != "etat"]
            loop = [iff(active(), [decision]), iff(active(), transition)]
        ready = [wait(0.03), setv("etat", "en jeu")] if step >= 6 else []
        groups["Stage"].stack("Initialiser et surveiller la fin, défaite prioritaire.", flag(), initial + [backdrop("secteur1")] + ready + [forever(loop + [wait(0.03)])])
        if step >= 5:
            groups["Stage"].stack("Le message secteur2 change le décor.", receive("secteur2"), [backdrop("secteur2")])
    if step == 3:
        hit = iff(both(gt(variable("vies"), 0), touching()), [addv("vies", -1), until(neg(touching()))])
        groups["Obstacle"].stack("Un dégât par contact ; attendre la séparation sans bloquer Pilote.", flag(), [xy(0, 0), node("looks_show"), until(neg(touching())), forever([hit, wait(0.03)])])
    if step >= 4:
        create = node("control_create_clone_of", {"CLONE_OPTION": menu("control_create_clone_of_menu", "CLONE_OPTION", "_myself_")})
        production = iff(active(), [create]) if step >= 6 else create
        groups["Obstacle"].stack("Modèle caché ; une nouvelle copie toutes les 1.2 secondes.", flag(), [node("looks_hide"), forever([wait(1.2), production])])
        hit = iff(both(gt(variable("vies"), 0), touching()), [addv("vies", -1), node("control_delete_this_clone")])
        random_y = node("operator_random", {"FROM": -100, "TO": 100})
        exit_condition = gt(node("motion_xposition"), 210)
        clone_actions = [node("motion_changexby", {"DX": variable("vitesseObstacle")}), hit]
        if step >= 6:
            exit_condition = either(exit_condition, neg(active()))
            clone_actions = [iff(active(), clone_actions)]
        groups["Obstacle"].stack("Chaque copie traverse, puis se supprime à la sortie ou après un dégât.", node("control_start_as_clone"), [xy(-210, random_y), node("looks_show"), repeat_until(exit_condition, clone_actions + [wait(0.03)]), node("control_delete_this_clone")])
        if step >= 5:
            groups["Obstacle"].stack("Le modèle et les clones fixent la même vitesse commune à 7.", receive("secteur2"), [setv("vitesseObstacle", 7)])
    monitors = [dict(id=name, mode="default", opcode="data_variable", params={"VARIABLE": name}, spriteName=None, value=value, width=0, height=0, x=5, y=35 + i*26, visible=name in {"score", "vies", "niveau", "etat"}, sliderMin=0, sliderMax=100, isDiscrete=True) for i, (name, value) in enumerate(values.items())]
    return dict(targets=targets, monitors=monitors, extensions=[], meta=dict(semver="3.0.0", vm="15.2.0", agent="CodeCraft")), groups


def validate(file):
    with zipfile.ZipFile(file) as archive:
        assert archive.testzip() is None
        project = json.loads(archive.read("project.json"))
        stage = project["targets"][0]
        for target in project["targets"]:
            blocks = target["blocks"]
            for asset in target["costumes"]:
                raw = archive.read(asset["md5ext"])
                assert hashlib.md5(raw).hexdigest() == asset["assetId"]
                svg = ET.fromstring(raw)
                assert float(svg.attrib["width"]) > 0 and float(svg.attrib["height"]) > 0
            for ident, block in blocks.items():
                for key in ("next", "parent"):
                    assert block[key] is None or block[key] in blocks
                assert not block["topLevel"] or block["parent"] is None
                if block["next"]: assert blocks[block["next"]]["parent"] == ident
                for slot in block["inputs"].values():
                    for value in slot[1:]:
                        if isinstance(value, str): assert blocks[value]["parent"] == ident
                        elif isinstance(value, list) and value[0] == 12: assert value[2] in stage["variables"]
                        elif isinstance(value, list) and value[0] == 11: assert value[2] in stage["broadcasts"]
                for key, value in block["fields"].items():
                    if key == "VARIABLE": assert value[1] in stage["variables"]
                    if key == "BROADCAST_OPTION": assert value[1] in stage["broadcasts"]


def build_restart_fault():
    project, _ = build(6)
    stage = project["targets"][0]
    stage["variables"]["niveau"][1] = 2
    next(m for m in project["monitors"] if m["id"] == "niveau")["value"] = 2
    blocks = stage["blocks"]
    ident, block = next((i, b) for i, b in blocks.items() if b["opcode"] == "data_setvariableto" and b["fields"]["VARIABLE"][0] == "niveau" and b["inputs"]["VALUE"][1][1] == "1")
    blocks[block["parent"]]["next"] = block["next"]
    blocks[block["next"]]["parent"] = block["parent"]
    del blocks[ident]
    return project


def write_project(project, name):
    used = {asset["md5ext"] for target in project["targets"] for asset in target["costumes"]}
    filename = OUT / ("mission-"+name+".sb3")
    with zipfile.ZipFile(filename,"w") as archive:
        for entry,data in [("project.json",json.dumps(project,ensure_ascii=False).encode())]+[(asset,ASSETS[asset]) for asset in sorted(used)]:
            info=zipfile.ZipInfo(entry,(2026,10,15,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED
            archive.writestr(info,data)
    validate(filename)
    print("Built and validated",filename.relative_to(ROOT))


def main():
    OUT.mkdir(parents=True,exist_ok=True)
    for step, name in [(0,"base"),(1,"commandes"),(2,"balises"),(3,"vies"),(4,"clones"),(5,"messages"),(6,"etats")]:
        project, _ = build(step)
        write_project(project, name)
    write_project(build_restart_fault(), "panne-relance")


if __name__ == "__main__": main()
