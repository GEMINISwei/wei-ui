set -e

yarn docs:build

cd docs/.vuepress/dist

git init
git add .
git commit -m "deploy page"

git push -f git@github.com:GEMINISwei/wei-ui.git master:demo-pages

cd -