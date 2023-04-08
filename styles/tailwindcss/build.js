const fs = require('fs');
const kebabCase = require('lodash/kebabCase');
const variables = require('./variables.js');

const getTokensObject = (data) => {
  return Object.keys(data).reduce((acc, cur) => {
    if (data[cur].hasOwnProperty('value')) {
      return { ...acc, [kebabCase(cur)]: data[cur].value };
    }
    return { ...acc,
      [kebabCase(cur)]: Object.fromEntries(Object.values(data[cur]).map((item) => [
        kebabCase(item.path[item.path.length - 1]), item.value
      ]))
    };
  }, {})
};

fs.writeFileSync('./styles/tailwindcss/index.js', `module.exports = {
  screens: ${JSON.stringify(getTokensObject(variables.screen))},
  colors: ${JSON.stringify(getTokensObject(variables.color))},
  fontSize: ${JSON.stringify(['h', 't', 'tm'].reduce((acc, cur) => {
    return { ...acc, ...Object.fromEntries(
      Object.keys(variables.font[cur]).map((item) => [
        `${cur}${item}`, [variables.font[cur][item].size.value, {
          lineHeight: variables.font[cur][item].height.value,
          fontWeight: variables.font[cur][item].weight.value,
        }]
      ])
    )};
  }, {}))},
  borderRadius: ${JSON.stringify(getTokensObject(variables.rounded))},
  extend: {
    boxShadow: ${JSON.stringify(getTokensObject(variables.shadow))},
  }
}`);
