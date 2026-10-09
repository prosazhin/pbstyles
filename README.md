# pbstyles

[![npm version](https://img.shields.io/npm/v/@prosazhin/pbstyles.svg)](https://www.npmjs.com/package/@prosazhin/pbstyles)
[![npm downloads](https://img.shields.io/npm/dm/@prosazhin/pbstyles.svg)](https://www.npmjs.com/package/@prosazhin/pbstyles)
[![node](https://img.shields.io/node/v/@prosazhin/pbstyles.svg)](https://nodejs.org)
[![license](https://img.shields.io/npm/l/@prosazhin/pbstyles.svg)](./LICENSE)

**English** · [Русский](https://github.com/prosazhin/pbstyles/blob/main/README.ru.md)

Basic styles for quick prototyping: typography, semantic colors with light and dark themes, color palette, sizes,
containers and columns, breakpoints, borders, rounding, opacity and shadows — as CSS, LESS, SCSS and a Tailwind v4 theme.

🌐 [Website](https://prosazhin.dev/design-system?lang=en) ·
📖 [Documentation](https://prosazhin.dev/docs/pbstyles?lang=en) ·
🎨 [Figma community](https://www.figma.com/community/file/1213609862805339771/pbstyles) ·
🖼 [Behance](https://www.behance.net/gallery/162935391/pbstyles) ·
📝 [Releases](https://github.com/prosazhin/pbstyles/releases)

## Contents

- [Features](#features)
- [Installation](#installation)
- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Dark theme](#dark-theme)
- [Overriding tokens](#overriding-tokens)
- [Design tokens](#design-tokens)
- [Related projects](#related-projects)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Features

- **Four formats.** CSS variables, LESS and SCSS variables with mixins, and a Tailwind CSS v4 theme — from one source.
- **Light and dark themes.** Follows `prefers-color-scheme` or is switched manually with `data-theme` on any DOM level.
- **Design tokens as the source.** [W3C Design Tokens (DTCG 2025.10)](https://www.designtokens.org/tr/2025.10/format/)
  in [`tokens/`](./tokens), generated with [Style Dictionary](https://github.com/style-dictionary/style-dictionary).
- **Figma file.** The same styles are available as a [Figma community file](https://www.figma.com/community/file/1213609862805339771/pbstyles).
- **Overridable.** Semantic colors are plain CSS variables — override them with a regular cascade rule.

## Installation

```bash
npm install @prosazhin/pbstyles
# or
yarn add @prosazhin/pbstyles
```

## Quick start

### CSS

The package contains only a [basic set of variables](https://github.com/prosazhin/pbstyles/blob/main/styles/css/index.css):
CSS has no mixins yet.

```css
@import '@prosazhin/pbstyles/styles/css';
```

### LESS

[Variables and mixins](https://github.com/prosazhin/pbstyles/blob/main/styles/less/index.less) for LESS.

```less
@import '@prosazhin/pbstyles/styles/less';
```

### SCSS

[Variables and mixins](https://github.com/prosazhin/pbstyles/blob/main/styles/scss/index.scss) for SCSS.

```scss
@import '@prosazhin/pbstyles/styles/scss';
```

### Tailwind v4

The [Tailwind theme](https://github.com/prosazhin/pbstyles/blob/main/styles/tailwind/theme.css) goes after Tailwind:

```css
@import 'tailwindcss';
@import '@prosazhin/pbstyles/styles/tailwind/theme.css';
```

It also works with a [Tailwind prefix](https://tailwindcss.com/docs/styling-with-utility-classes#using-the-prefix-option),
e.g. `@import 'tailwindcss' prefix(tw);` — the dark theme and token overrides keep working.

## What's included

### Variables

| Category              | CSS | LESS | SCSS | Tailwind |
| :-------------------- | :-- | :--- | :--- | :------- |
| Typography            | ✅  | ✅   | ✅   | ✅       |
| Semantic colors       | ✅  | ✅   | ✅   | ✅       |
| Colors palette        | ✅  | ✅   | ✅   | ✅       |
| Basic sizes           | ✅  | ✅   | ✅   | ✅       |
| Containers sizes      | ✅  | ✅   | ✅   | ✅       |
| Columns               | ✅  | ✅   | ✅   | —        |
| Border sizes          | ✅  | ✅   | ✅   | ✅       |
| Border rounding sizes | ✅  | ✅   | ✅   | ✅       |
| Opacity               | ✅  | ✅   | ✅   | ✅       |
| Shadows               | ✅  | ✅   | ✅   | ✅       |

### Mixins

| Mixin       | CSS | LESS | SCSS | Tailwind |
| :---------- | :-- | :--- | :--- | :------- |
| Animation   | —   | ✅   | ✅   | ✅       |
| Typography  | —   | ✅   | ✅   | ✅       |
| Breakpoints | —   | ✅   | ✅   | ✅       |

## Dark theme

Semantic colors (`basic`, `primary`, `secondary`, `success`, `danger`, `warning`, `outline`, `text`) have light and dark
values. The color palette (`gray`, `blue`, etc.) is the same in both themes.

The dark theme is enabled in two ways:

- **System** — automatically via `@media (prefers-color-scheme: dark)`.
- **Manual** — with the `data-theme="dark"` attribute on `<html>` or on any container. Nested containers work too:
  everything inside `<div data-theme="dark">` uses dark colors.

`data-theme="light"` works the same way in the opposite direction: it forces the light theme even when the system
prefers dark, on `<html>` or on any nested container.

```html
<html data-theme="dark">
  ...
  <div data-theme="dark">This block is always dark</div>
  <div data-theme="light">This block is always light</div>
</html>
```

## Overriding tokens

Semantic colors are plain CSS variables, so any of them can be overridden with a regular cascade rule — on `:root`,
inside `[data-theme='dark']` or on a specific element. In the Tailwind theme they have their own `--theme-color-*` names,
which do not depend on the Tailwind prefix.

| Format         | Variable name                                             |
| :------------- | :-------------------------------------------------------- |
| CSS            | `--color-basic-0`, `--color-primary-300`, ...             |
| LESS           | `@color-basic-0` → `var(--color-basic-0)`                 |
| SCSS           | `$color-basic-0` → `var(--color-basic-0)`                 |
| Tailwind Theme | `--theme-color-basic-0`, `--theme-color-primary-300`, ... |

In the Tailwind theme semantic colors are declared as `--theme-color-*` variables outside `@theme` and mapped via
`@theme inline` (`--color-basic-0: var(--theme-color-basic-0)`). Utilities like `bg-basic-0` compile to
`var(--theme-color-basic-0)` directly, so the override works at any DOM level and with any Tailwind prefix:

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

## Design tokens

The styles are generated from [design tokens](https://github.com/prosazhin/pbstyles/tree/main/tokens): CSS, LESS and SCSS
with [Mixin Dictionary](https://github.com/prosazhin/mixin-dictionary), the Tailwind theme with
[Tailwind Dictionary](https://github.com/prosazhin/tailwind-dictionary).

- Text styles are composite `typography` tokens with `fontSize`, `lineHeight` and `fontWeight`: the font family and
  letter spacing are inherited.
- Breakpoints (`screen.<name>.{min,max}`) and animations (`keyframes.<name>.<frame>.<property>`) become mixins by their
  structure.
- `container.full` (`100%`), animations and text decorations are plain string tokens: DTCG has no matching type for them.
- Since 1.4.0 the tokens use DTCG instead of the legacy Style Dictionary format. The generated styles are the same as in
  1.3.1.

## Related projects

- [mixin-dictionary](https://github.com/prosazhin/mixin-dictionary) — tokens to CSS variables and LESS/SCSS variables
  and mixins.
- [tailwind-dictionary](https://github.com/prosazhin/tailwind-dictionary) — tokens to a Tailwind CSS theme (v3 and v4).
- [pbcomponents](https://github.com/prosazhin/pbcomponents) — React components on top of pbstyles.

## Contributing

Bug reports and ideas are welcome in [issues](https://github.com/prosazhin/pbstyles/issues). Edit the tokens in
[`tokens/`](./tokens) and regenerate the styles with `npm run build` — never edit `styles/` by hand.

## Author

**Evgenii Sazhin**, frontend developer & designer — [prosazhin.dev](https://prosazhin.dev?lang=en) ·
[GitHub](https://github.com/prosazhin) · [Telegram](https://t.me/prosazhin) ·
[LinkedIn](https://www.linkedin.com/in/prosazhin)

If the package is useful to you, give it a ⭐ on [GitHub](https://github.com/prosazhin/pbstyles).

## License

[MIT](./LICENSE) © Evgenii Sazhin
