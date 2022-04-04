const {Joi} = require('@docusaurus/utils-validation');

const DEFAULT_CONFIG = {
  playgroundPosition: 'bottom',
};
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;

const Schema = Joi.object({
  liveCodeBlock: Joi.object({
    playgroundPosition: Joi.string()
      .equal('top', 'bottom')
      .default(DEFAULT_CONFIG.playgroundPosition),
  })
    .label('themeConfig.liveCodeBlock')
    .default(DEFAULT_CONFIG),
});
exports.Schema = Schema;

exports.validateThemeConfig = function ({validate, themeConfig}) {
  return validate(Schema, themeConfig);
};
