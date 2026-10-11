const scopes = ['web', 'python', 'scratch', 'robotique', 'gdevelop', 'student', 'tooling', 'prof'];
function studentScope(data, scope = process.env.CODECRAFT_TEST_SCOPE) {
  if (scope && !scopes.includes(scope)) throw new Error('Unknown student test scope: ' + scope);
  const includes = (id) =>
    !scope ||
    ['student', 'tooling', 'prof'].includes(scope) ||
    (['scratch', 'gdevelop'].includes(scope)
      ? id.startsWith(scope + '-')
      : data.modules[id].domainId === scope);
  return {
    includes,
    modules: Object.keys(data.modules).filter(includes),
    pathways: Object.entries(data.pathways).filter(([, pathway]) =>
      pathway.moduleIds.some(includes),
    ),
  };
}
module.exports = { studentScope };
