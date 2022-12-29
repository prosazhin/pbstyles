# pbstyles – prosazhin base styles

Basic styles for quick prototyping. Includes breakpoints, typography, color palette, animations, rounds, strokes, and shadows.

## Install

<code>yarn add pbstyles</code>

## CSS

Package contains only a basic set of variables in the form of CSS Variables.

<code>@import 'pbstyles/styles/css';</code>

- Color palette
- Semantic color tokens
- Typography
- Shadows
- Border rounding
- Screen sizes

## LESS

Package contains LESS variables and mixins.

<code>@import 'pbstyles/styles/less';</code>

- Basic set of variables
- Mixins for animation
- Mixins for typography
- Mixins for breakpoints

## SCSS

Package contains SCSS variables and mixins.

<code>@import 'pbstyles/styles/scss';</code>

- Basic set of variables
- Mixins for animation
- Mixins for typography
- Mixins for breakpoints

## TailwindCSS Theme

Package contains TailwindCSS Theme.

<code>
const theme = require('pbstyles/styles/tailwindcss');

module.exports = {
  ...
  theme: {
    ...theme,
  },
  ...
};
</code>

- Basic set of variables
