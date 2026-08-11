# CLAUDE.md

## Проект

`@prosazhin/pbstyles` — npm-пакет с базовыми стилями и дизайн-токенами для быстрого прототипирования.

Публикуется на npmjs.org с `--access public`. Версия — в `package.json`.

## Команды

```bash
npm run build          # полная сборка: mixin-dictionary + tailwind-dictionary + prettier
npm run lint           # eslint
npm run format         # prettier --write styles
```

Перед завершением любой задачи запускать `npm run build` и убеждаться, что сборка прошла без ошибок.

## Структура

```
tokens/           # исходные дизайн-токены (JSON) — редактировать здесь
  *.json          # базовые токены: font, palette, shadow, size, rounded, screen, opacity, stroke, column, container, animation
  themes/
    light.json    # светлая цветовая тема
    dark.json     # тёмная цветовая тема
styles/           # генерируется автоматически — не редактировать вручную
  css/
  less/
  scss/
  tailwind/
config-mixin-dictionary.json    # конфиг для css/less/scss
config-tailwind-dictionary.json # конфиг для tailwind v4
```

## Правила работы

- Изменять только `tokens/*.json` и конфиги сборки; `styles/` всегда регенерировать через `npm run build`.
- Не трогать `styles/` напрямую — изменения перезапишутся при следующей сборке.
- Узкие, целевые правки — без массовых переименований и ненужного рефакторинга.
- После изменения `package.json` синхронизировать `package-lock.json` (`npm install`).

## Релиз

Релиз делается одним шагом — пушем в `main`. Всё в одном workflow `.github/workflows/release.yml`:

- job `gate` — читает версию из `package.json` и спрашивает npm, опубликована ли она; если да — workflow тихо останавливается
- job `release` — `npm ci` → `npm run lint` → `npm run build` → `npm publish --provenance --access public`, затем создаёт тег и GitHub Release

Проверка идёт против npm, а не против предыдущего коммита, поэтому повторный push или ре-ран workflow не приводят к повторной публикации.

`.github/workflows/ci.yml` гоняет lint + build на pull request в `main`.

Секреты: `NPM_TOKEN` (тег и релиз создаются штатным `GITHUB_TOKEN` с правами `contents: write`).

Формат тега: `@prosazhin/pbstyles@v1.0.0`.
