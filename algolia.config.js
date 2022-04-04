const defaultIndexName = 'docs.dev.decipad.com';

const configs = {
  'docs.dev.decipad.com': {
    appId: 'TV8XZ0RFSZ',
    // Public API key: it is safe to commit it
    apiKey: 'db6e12842f8c0c9dded465872fe17d54',
    indexName: 'docs.dev.decipad.com',
  },
  'docs.alpha.decipad.com': {
    appId: 'T5O5EB5YRE',
    // Public API key: it is safe to commit it
    apiKey: '9d26f5ed12e439a985a277527c30749a',
    indexName: 'docs.alpha.decipad.com',
  },
};

module.exports = function algoliaConfig() {
  const algoliaIndexName =
    (typeof window !== 'undefined' &&
      `docs.${window?.location?.hostname || 'dev.decipad.com'}`) ||
    defaultIndexName;
  return configs[algoliaIndexName] || configs[defaultIndexName];
};
