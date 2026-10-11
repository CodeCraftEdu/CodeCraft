export function createRouteUrls(data) {
  const moduleUrl = (id, pathwayId) =>
    '#module/' +
    encodeURIComponent(id) +
    (pathwayId ? '?parcours=' + encodeURIComponent(pathwayId) : '');
  const pathwayStartUrl = (id) => moduleUrl(data.pathways[id].moduleIds[0], id);
  const singlePathway = (domain) =>
    domain.pathwayIds.length === 1 && !(domain.diagnosticModuleIds || []).length;
  const domainEntryUrl = (id) =>
    singlePathway(data.domains[id])
      ? pathwayStartUrl(data.domains[id].pathwayIds[0])
      : '#domaine/' + id;
  const domainUrl = (id) => (Object.keys(data.domains).length === 1 ? '#' : '#domaine/' + id);

  return { moduleUrl, pathwayStartUrl, singlePathway, domainEntryUrl, domainUrl };
}
