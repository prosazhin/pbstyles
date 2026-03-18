# Инструкция по релизу

## Как сейчас устроен релиз

В репозитории используются 2 GitHub Actions workflow:

1. `Prepare` (`.github/workflows/prepare.yml`)
   - Триггер: `push` в ветку `main`.
   - Берет версию из локального `package.json`.
   - Сравнивает текущую версию с версией из `HEAD~1` (предыдущий коммит).
   - Если версия изменилась, создает тег `@prosazhin/pbstyles@v<version>` через `secrets.ACCESS_TOKEN`.

2. `Release` (`.github/workflows/release.yml`)
   - Триггер: `push` тега формата `@prosazhin/pbstyles@v*`.
   - Выполняет:
     - `npm ci --legacy-peer-deps`
     - `npm run build`
     - `npm publish --provenance --access public` (через `secrets.NPM_TOKEN`)
   - После публикации создает GitHub Release (не draft, помечает latest) через `secrets.ACCESS_TOKEN`.

## Что нужно настроить один раз

В `Settings -> Secrets and variables -> Actions` репозитория:

- `NPM_TOKEN`: npm automation token с правами публикации для `@prosazhin/pbstyles`.
- `ACCESS_TOKEN`: GitHub token с правами:
  - создавать теги;
  - создавать релизы;
  - пушить в репозиторий (если это требуется защитой ветки).

В npm:

- Убедиться, что scope/пакет `@prosazhin/pbstyles` существует и принадлежит вашему аккаунту/организации.
- Пакет scoped и публичный, поэтому публикация должна идти с `--access public`.

## Пошаговый процесс релиза

1. Поднять версию в `package.json` (и синхронизировать lockfile).
   Пример:
   ```bash
   npm version patch --no-git-tag-version
   ```
2. Локально проверить сборку:
   ```bash
   npm ci --legacy-peer-deps
   npm run build
   ```
3. Закоммитить изменения и запушить в `main`.
4. Дождаться workflow `Prepare`:
   - если версия изменилась относительно предыдущего коммита, будет создан тег `@prosazhin/pbstyles@vX.Y.Z`.
5. Дождаться workflow `Release` на этом теге:
   - пакет публикуется в npm;
   - создается GitHub Release.
6. Проверить результат:
   - в npm у пакета появилась новая версия;
   - в GitHub Releases появился релиз `@prosazhin/pbstyles@vX.Y.Z`.

## Важные замечания

- Релиз не начнется, пока версия в `package.json` не увеличена.
- Если версия не изменилась относительно предыдущего коммита, тег не создастся, а значит публикации не будет.
- В workflow используется Node `22.x`, что согласовано с `engines` в `package.json`.

## Типовые проблемы

- `Prepare` не создал тег:
  - проверить, что версия в `package.json` действительно увеличена;
  - проверить права `ACCESS_TOKEN`;
  - проверить, что в предыдущем коммите версия отличалась.

- `Release` упал на публикации:
  - проверить валидность `NPM_TOKEN`;
  - проверить права токена на scope `@prosazhin`;
  - проверить, что публикация идет как публичная (`--access public`).

- Не создался GitHub Release:
  - проверить права `ACCESS_TOKEN` на release/tag операции.
