# pbstyles – prosazhin base styles

Basic styles for quick prototyping. Includes breakpoints, typography, color palette, animations, rounds, strokes, and shadows.

## Install

```yarn add pbstyles```

## CSS

Package contains only a basic set of variables in the form of CSS Variables.

```@import 'pbstyles/styles/css';```

- Color palette
- Semantic color tokens
- Typography
- Shadows
- Border rounding
- Screen sizes

## LESS

Package contains LESS variables and mixins.

```@import 'pbstyles/styles/less';```

- Basic set of variables
- Mixins for animation
- Mixins for typography
- Mixins for breakpoints

## SCSS

Package contains SCSS variables and mixins.

```@import 'pbstyles/styles/scss';```

- Basic set of variables
- Mixins for animation
- Mixins for typography
- Mixins for breakpoints

## TailwindCSS Theme

Package contains TailwindCSS Theme.

```javascript
const theme = require('pbstyles/styles/tailwindcss');

module.exports = {
  ...
  theme: {
    ...theme,
  },
  ...
};
```

- Basic set of variables
