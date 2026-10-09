# pbstyles

[![npm version](https://img.shields.io/npm/v/@prosazhin/pbstyles.svg)](https://www.npmjs.com/package/@prosazhin/pbstyles)
[![npm downloads](https://img.shields.io/npm/dm/@prosazhin/pbstyles.svg)](https://www.npmjs.com/package/@prosazhin/pbstyles)
[![node](https://img.shields.io/node/v/@prosazhin/pbstyles.svg)](https://nodejs.org)
[![license](https://img.shields.io/npm/l/@prosazhin/pbstyles.svg)](./LICENSE)

[English](https://github.com/prosazhin/pbstyles/blob/main/README.md) · **Русский**

Базовые стили для быстрого прототипирования: типографика, семантические цвета со светлой и тёмной темами, цветовая
палитра, размеры, контейнеры и колонки, брейкпоинты, границы, скругления, прозрачность и тени — в виде CSS, LESS, SCSS и
темы Tailwind v4.

🌐 [Сайт](https://prosazhin.dev/design-system?lang=ru) ·
📖 [Документация](https://prosazhin.dev/docs/pbstyles?lang=ru) ·
🎨 [Figma community](https://www.figma.com/community/file/1213609862805339771/pbstyles) ·
🖼 [Behance](https://www.behance.net/gallery/162935391/pbstyles) ·
📝 [Релизы](https://github.com/prosazhin/pbstyles/releases)

## Содержание

- [Возможности](#возможности)
- [Установка](#установка)
- [Быстрый старт](#быстрый-старт)
- [Что входит](#что-входит)
- [Тёмная тема](#тёмная-тема)
- [Переопределение токенов](#переопределение-токенов)
- [Дизайн-токены](#дизайн-токены)
- [Связанные проекты](#связанные-проекты)
- [Участие в разработке](#участие-в-разработке)
- [Автор](#автор)
- [Лицензия](#лицензия)

## Возможности

- **Четыре формата.** CSS-переменные, переменные и миксины LESS и SCSS, тема Tailwind CSS v4 — из одного источника.
- **Светлая и тёмная темы.** Следует за `prefers-color-scheme` или переключается вручную через `data-theme` на любом
  уровне DOM.
- **Дизайн-токены как источник.** [W3C Design Tokens (DTCG 2025.10)](https://www.designtokens.org/tr/2025.10/format/) в
  [`tokens/`](./tokens), сборка через [Style Dictionary](https://github.com/style-dictionary/style-dictionary).
- **Файл в Figma.** Те же стили доступны в [файле Figma community](https://www.figma.com/community/file/1213609862805339771/pbstyles).
- **Переопределяемость.** Семантические цвета — обычные CSS-переменные, их можно переопределить обычным правилом каскада.

## Установка

```bash
npm install @prosazhin/pbstyles
# или
yarn add @prosazhin/pbstyles
```

## Быстрый старт

### CSS

В пакете только [базовый набор переменных](https://github.com/prosazhin/pbstyles/blob/main/styles/css/index.css): миксинов
в CSS пока нет.

```css
@import '@prosazhin/pbstyles/styles/css';
```

### LESS

[Переменные и миксины](https://github.com/prosazhin/pbstyles/blob/main/styles/less/index.less) для LESS.

```less
@import '@prosazhin/pbstyles/styles/less';
```

### SCSS

[Переменные и миксины](https://github.com/prosazhin/pbstyles/blob/main/styles/scss/index.scss) для SCSS.

```scss
@import '@prosazhin/pbstyles/styles/scss';
```

### Tailwind v4

[Тема Tailwind](https://github.com/prosazhin/pbstyles/blob/main/styles/tailwind/theme.css) подключается после Tailwind:

```css
@import 'tailwindcss';
@import '@prosazhin/pbstyles/styles/tailwind/theme.css';
```

Работает и с [префиксом Tailwind](https://tailwindcss.com/docs/styling-with-utility-classes#using-the-prefix-option),
например `@import 'tailwindcss' prefix(tw);` — тёмная тема и переопределение токенов продолжают работать.

## Что входит

### Переменные

| Категория           | CSS | LESS | SCSS | Tailwind |
| :------------------ | :-- | :--- | :--- | :------- |
| Типографика         | ✅  | ✅   | ✅   | ✅       |
| Семантические цвета | ✅  | ✅   | ✅   | ✅       |
| Цветовая палитра    | ✅  | ✅   | ✅   | ✅       |
| Базовые размеры     | ✅  | ✅   | ✅   | ✅       |
| Размеры контейнеров | ✅  | ✅   | ✅   | ✅       |
| Колонки             | ✅  | ✅   | ✅   | —        |
| Размеры границ      | ✅  | ✅   | ✅   | ✅       |
| Скругления          | ✅  | ✅   | ✅   | ✅       |
| Прозрачность        | ✅  | ✅   | ✅   | ✅       |
| Тени                | ✅  | ✅   | ✅   | ✅       |

### Миксины

| Миксин      | CSS | LESS | SCSS | Tailwind |
| :---------- | :-- | :--- | :--- | :------- |
| Анимации    | —   | ✅   | ✅   | ✅       |
| Типографика | —   | ✅   | ✅   | ✅       |
| Брейкпоинты | —   | ✅   | ✅   | ✅       |

## Тёмная тема

У семантических цветов (`basic`, `primary`, `secondary`, `success`, `danger`, `warning`, `outline`, `text`) есть светлые
и тёмные значения. Цветовая палитра (`gray`, `blue` и т. д.) одинакова в обеих темах.

Тёмная тема включается двумя способами:

- **Системная** — автоматически через `@media (prefers-color-scheme: dark)`.
- **Ручная** — атрибутом `data-theme="dark"` на `<html>` или на любом контейнере. Вложенные контейнеры тоже работают:
  всё внутри `<div data-theme="dark">` использует тёмные цвета.

`data-theme="light"` работает так же в обратную сторону: принудительно включает светлую тему, даже если система
предпочитает тёмную, — на `<html>` или на любом вложенном контейнере.

```html
<html data-theme="dark">
  ...
  <div data-theme="dark">Этот блок всегда тёмный</div>
  <div data-theme="light">Этот блок всегда светлый</div>
</html>
```

## Переопределение токенов

Семантические цвета — обычные CSS-переменные, поэтому любую можно переопределить обычным правилом каскада: на `:root`,
внутри `[data-theme='dark']` или на конкретном элементе. В теме Tailwind у них собственные имена `--theme-color-*`,
которые не зависят от префикса Tailwind.

| Формат         | Имя переменной                                            |
| :------------- | :-------------------------------------------------------- |
| CSS            | `--color-basic-0`, `--color-primary-300`, ...             |
| LESS           | `@color-basic-0` → `var(--color-basic-0)`                 |
| SCSS           | `$color-basic-0` → `var(--color-basic-0)`                 |
| Tailwind Theme | `--theme-color-basic-0`, `--theme-color-primary-300`, ... |

В теме Tailwind семантические цвета объявлены как переменные `--theme-color-*` вне `@theme` и подключены через
`@theme inline` (`--color-basic-0: var(--theme-color-basic-0)`). Утилиты вроде `bg-basic-0` компилируются сразу в
`var(--theme-color-basic-0)`, поэтому переопределение работает на любом уровне DOM и с любым префиксом Tailwind:

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

## Дизайн-токены

Стили генерируются из [дизайн-токенов](https://github.com/prosazhin/pbstyles/tree/main/tokens): CSS, LESS и SCSS — через
[Mixin Dictionary](https://github.com/prosazhin/mixin-dictionary), тема Tailwind — через
[Tailwind Dictionary](https://github.com/prosazhin/tailwind-dictionary).

- Стили текста — составные токены `typography` с `fontSize`, `lineHeight` и `fontWeight`: семейство шрифта и межбуквенное
  расстояние наследуются.
- Брейкпоинты (`screen.<name>.{min,max}`) и анимации (`keyframes.<name>.<frame>.<property>`) становятся миксинами по своей
  структуре.
- `container.full` (`100%`), анимации и text-decoration — строковые токены: подходящего типа в DTCG для них нет.
- Начиная с 1.4.0 токены используют DTCG вместо старого формата Style Dictionary. Сгенерированные стили те же, что в
  1.3.1.

## Связанные проекты

- [mixin-dictionary](https://github.com/prosazhin/mixin-dictionary) — токены в CSS-переменные и переменные и миксины
  LESS/SCSS.
- [tailwind-dictionary](https://github.com/prosazhin/tailwind-dictionary) — токены в тему Tailwind CSS (v3 и v4).
- [pbcomponents](https://github.com/prosazhin/pbcomponents) — React-компоненты поверх pbstyles.

## Участие в разработке

Сообщения об ошибках и идеи приветствуются в [issues](https://github.com/prosazhin/pbstyles/issues). Токены правятся в
[`tokens/`](./tokens), стили пересобираются командой `npm run build` — `styles/` вручную не редактируется.

## Автор

**Евгений Сажин**, фронтенд-разработчик и дизайнер — [prosazhin.dev](https://prosazhin.dev?lang=ru) ·
[GitHub](https://github.com/prosazhin) · [Telegram](https://t.me/prosazhin) ·
[LinkedIn](https://www.linkedin.com/in/prosazhin)

Если пакет оказался полезным, поставьте ⭐ на [GitHub](https://github.com/prosazhin/pbstyles).

## Лицензия

[MIT](./LICENSE) © Evgenii Sazhin
