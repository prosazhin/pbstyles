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

Релизный контур — GitHub Actions:

- `.github/workflows/prepare.yml` — сравнивает версию с `HEAD~1`, создаёт тег `@prosazhin/pbstyles@v<version>`
- `.github/workflows/release.yml` — публикует пакет с `--access public`

Секреты: `NPM_TOKEN`, `ACCESS_TOKEN`.

Формат тега: `@prosazhin/pbstyles@v1.0.0`.
