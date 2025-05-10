# pbstyles

[Figma community](https://www.figma.com/community/file/1213609862805339771/pbstyles) | [Behance](https://www.behance.net/gallery/162935391/pbstyles)

## prosazhin basic styles

Basic styles for quick prototyping. Includes typography, semantic colors, color palette, basic sizes, containers and columns, breakpoints, border sizes, rounding, opacity, and shadows.

For generating styles, design tokens are used based on the [Style Dictionary](https://github.com/amzn/style-dictionary) package documentation, but extended with mixins thanks to the [Mixin Dictionary](https://github.com/prosazhin/mixin-dictionary) package. For generating a Tailwind Theme, the [Tailwind Dictionary](https://github.com/prosazhin/tailwind-dictionary) package is used.

## Installation

```bash
yarn add pbstyles
# or
npm install pbstyles
```

## Includes

### Basic variables

| Category              | CSS | LESS | SCSS | Tailwind Theme |
| :-------------------- | :-- | :--- | :--- | :------------- |
| Typography            | +   | +    | +    | +              |
| Semantic colors       | +   | +    | +    | +              |
| Colors palette        | +   | +    | +    | +              |
| Basic sizes           | +   | +    | +    | +              |
| Containers sizes      | +   | +    | +    | +              |
| Columns               | +   | +    | +    | -              |
| Border sizes          | +   | +    | +    | +              |
| Border rounding sizes | +   | +    | +    | +              |
| Opacity               | +   | +    | +    | +              |
| Shadows               | +   | +    | +    | +              |

### Mixins

| Mixin       | CSS | LESS | SCSS | Tailwind Theme |
| :---------- | :-- | :--- | :--- | :------------- |
| Animation   | -   | +    | +    | +              |
| Typography  | -   | +    | +    | +              |
| Breakpoints | -   | +    | +    | +              |

## Usage examples

### CSS Variables

Package contains only a [basic set of variables](https://github.com/prosazhin/pbstyles/blob/main/styles/css/index.css).
At the moment, CSS does not yet have the ability to use mixins.

```css
@import 'pbstyles/styles/css';
```

### LESS

Package contains [basic set of LESS variables and mixins](https://github.com/prosazhin/pbstyles/blob/main/styles/less/index.less).

```less
@import 'pbstyles/styles/less';
```

### SCSS

Package contains [basic set of SCSS variables and mixins](https://github.com/prosazhin/pbstyles/blob/main/styles/scss/index.scss).

```scss
@import 'pbstyles/styles/scss';
```

### Tailwind Theme version 4

Package contains [Tailwind Theme](https://github.com/prosazhin/pbstyles/blob/main/styles/tailwind/theme.css).

```css
@import 'tailwindcss';
@import 'pbstyles/styles/tailwind/theme.css';
```
