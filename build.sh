#!/bin/sh
rm ./styles/css/index.css
rm ./styles/less/index.less
rm ./styles/scss/index.scss

echo "@import 'variables.css';" >> ./styles/css/index.css
echo "@import 'variables.less';" >> ./styles/less/index.less
echo "@import 'variables.scss';" >> ./styles/scss/index.scss

mixin_dir=./styles/scss/mixin
for entry in "$mixin_dir"/*
do
  echo "@import '"$entry"';" >> ./styles/scss/index.scss
done

mixin_dir=./styles/less/mixin
for entry in "$mixin_dir"/*
do
  echo "@import '"$entry"';" >> ./styles/less/index.less
done

echo CSS Files:
cat ./styles/scss/index.css

echo LESS Files:
cat ./styles/scss/index.less

echo SCSS Files:
cat ./styles/scss/index.scss
