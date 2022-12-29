const fs = require('fs');
const variables = require('./variables.js');

const getTokensObject = (data) => {
  return Object.keys(data).reduce((acc, cur) => {
    if (data[cur].hasOwnProperty('value')) {
      return { ...acc, [cur]: data[cur].value };
    }
    return { ...acc,
      [cur]: Object.fromEntries(Object.values(data[cur]).map((item) => [
        item.path[item.path.length - 1], item.value
      ]))
    };
  }, {})
};

const result = {
  screens: getTokensObject(variables.screen),
  colors: getTokensObject(variables.color),
  fontSize: ['h', 't', 'tm'].reduce((acc, cur) => {
    return { ...acc, ...Object.fromEntries(
      Object.keys(variables.font[cur]).map((item) => [
        `${cur}${item}`, [variables.font[cur][item].size.value, {
          lineHeight: variables.font[cur][item].height.value,
          fontWeight: variables.font[cur][item].weight.value,
        }]
      ])
    )};
  }, {}),
  borderRadius: getTokensObject(variables.radius),
  boxShadow: getTokensObject(variables.shadow),
};

fs.writeFileSync('./styles/tailwindcss/index.js', `module.exports = {
  screens: ${JSON.stringify(result.screens)},
  colors: ${JSON.stringify(result.colors)},
  fontSize: ${JSON.stringify(result.fontSize)},
  borderRadius: ${JSON.stringify(result.borderRadius)},
  extend: {
    boxShadow: ${JSON.stringify(result.boxShadow)},
  }
}`);
