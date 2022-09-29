#!/bin/sh
rm ./styles/css/index.css
rm ./styles/less/index.less
rm ./styles/scss/index.scss

echo "@import 'variables.css';" >> ./styles/css/index.css
echo "@import 'variables.less';" >> ./styles/less/index.less
echo "@import 'variables.scss';" >> ./styles/scss/index.scss

cd ./styles/scss

mixin_dir=./mixin
for entry in "$mixin_dir"/*
do
  echo "@import '"$entry"';" >> ./index.scss
done

cd ..
cd ..

cd ./styles/less

mixin_dir=./mixin
for entry in "$mixin_dir"/*
do
  echo "@import '"$entry"';" >> ./index.less
done

cd ..
cd ..

echo CSS Files:
cat ./styles/scss/index.css

echo LESS Files:
cat ./styles/scss/index.less

echo SCSS Files:
cat ./styles/scss/index.scss
