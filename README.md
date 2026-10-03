# pbstyles

[Documentation](https://prosazhin.dev/docs/pbstyles)

[Figma community](https://www.figma.com/community/file/1213609862805339771/pbstyles) | [Behance](https://www.behance.net/gallery/162935391/pbstyles)

## prosazhin basic styles

Basic styles for quick prototyping. Includes typography, semantic colors, color palette, basic sizes, containers and columns, breakpoints, border sizes, rounding, opacity, and shadows.

## Design tokens

The styles are generated from [design tokens](https://github.com/prosazhin/pbstyles/tree/main/tokens) in the [W3C Design Tokens (DTCG 2025.10)](https://www.designtokens.org/tr/2025.10/format/) format with [Style Dictionary](https://github.com/style-dictionary/style-dictionary): CSS, LESS and SCSS variables and mixins — with the [Mixin Dictionary](https://github.com/prosazhin/mixin-dictionary) package, the Tailwind Theme — with the [Tailwind Dictionary](https://github.com/prosazhin/tailwind-dictionary) package.

- Text styles are composite `typography` tokens with `fontSize`, `lineHeight` and `fontWeight`: the font family and letter spacing are inherited.
- Breakpoints (`screen.<name>.{min,max}`) and animations (`keyframes.<name>.<frame>.<property>`) become mixins by their structure.
- `container.full` (`100%`), animations and text decorations are plain string tokens: DTCG has no matching type for them.
- Since 1.4.0 the tokens use DTCG instead of the legacy Style Dictionary format. The generated styles are the same as in 1.3.1.

## Installation

```bash
yarn add @prosazhin/pbstyles
# or
npm install @prosazhin/pbstyles
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
@import '@prosazhin/pbstyles/styles/css';
```

### LESS

Package contains [basic set of LESS variables and mixins](https://github.com/prosazhin/pbstyles/blob/main/styles/less/index.less).

```less
@import '@prosazhin/pbstyles/styles/less';
```

### SCSS

Package contains [basic set of SCSS variables and mixins](https://github.com/prosazhin/pbstyles/blob/main/styles/scss/index.scss).

```scss
@import '@prosazhin/pbstyles/styles/scss';
```

### Tailwind Theme version 4

Package contains [Tailwind Theme](https://github.com/prosazhin/pbstyles/blob/main/styles/tailwind/theme.css).

```css
@import 'tailwindcss';
@import '@prosazhin/pbstyles/styles/tailwind/theme.css';
```

The theme also works with a [Tailwind prefix](https://tailwindcss.com/docs/styling-with-utility-classes#using-the-prefix-option), e.g. `@import 'tailwindcss' prefix(tw);` — the dark theme and token overrides keep working.

## Dark theme

Semantic colors (`basic`, `primary`, `secondary`, `success`, `danger`, `warning`, `outline`, `text`) have light and dark values. The color palette (`gray`, `blue`, etc.) is the same in both themes.

The dark theme is enabled in two ways:

- **System** — automatically via `@media (prefers-color-scheme: dark)`.
- **Manual** — with the `data-theme="dark"` attribute on `<html>` or on any container. Nested containers work too: everything inside `<div data-theme="dark">` uses dark colors.

`data-theme="light"` works the same way in the opposite direction: it forces the light theme even when the system prefers dark, on `<html>` or on any nested container.

```html
<html data-theme="dark">
  ...
  <div data-theme="dark">This block is always dark</div>
  <div data-theme="light">This block is always light</div>
</html>
```

### Overriding tokens

Semantic colors are plain CSS variables, so any of them can be overridden with a regular cascade rule — on `:root`, inside `[data-theme='dark']` or on a specific element. In the Tailwind Theme they have their own `--theme-color-*` names, which do not depend on the Tailwind prefix.

| Format         | Variable name                                             |
| :------------- | :-------------------------------------------------------- |
| CSS            | `--color-basic-0`, `--color-primary-300`, ...             |
| LESS           | `@color-basic-0` → `var(--color-basic-0)`                 |
| SCSS           | `$color-basic-0` → `var(--color-basic-0)`                 |
| Tailwind Theme | `--theme-color-basic-0`, `--theme-color-primary-300`, ... |

In the Tailwind Theme semantic colors are declared as `--theme-color-*` variables outside `@theme` and mapped via `@theme inline` (`--color-basic-0: var(--theme-color-basic-0)`). Utilities like `bg-basic-0` compile to `var(--theme-color-basic-0)` directly, so the override works at any DOM level and with any Tailwind prefix:

```css
@import 'tailwindcss';
@import '@prosazhin/pbstyles/styles/tailwind/theme.css';

:root {
  --theme-color-primary-300: #7c3aed;
}

[data-theme='dark'] {
  --theme-color-primary-300: #a78bfa;
}
```
