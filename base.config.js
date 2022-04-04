const defaultBaseName = 'https://dev.decipad.com';

module.exports = function baseName() {
  return (
    (typeof window !== 'undefined' &&
      `docs.${window?.location?.hostname || 'dev.decipad.com'}`) ||
    defaultBaseName
  );
};
