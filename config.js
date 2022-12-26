module.exports = {
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: ['name/cti/snake'],
      buildPath: 'styles/css/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css',
        },
      ],
    },
    less: {
      transformGroup: 'less',
      transforms: ['name/cti/snake'],
      buildPath: 'styles/less/',
      files: [
        {
          format: 'less/variables',
          destination: 'variables.less',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      transforms: ['name/cti/snake'],
      buildPath: 'styles/scss/',
      files: [
        {
          format: 'scss/variables',
          destination: 'variables.scss',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      transforms: ['name/cti/snake'],
      buildPath: 'styles/tailwindcss/',
      files: [
        {
          format: 'javascript/module',
          destination: 'variables.js',
        },
      ],
    },
  },
};
