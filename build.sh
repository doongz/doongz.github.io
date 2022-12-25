#!/bin/bash

echo "BUILD START"

DIRECTORY=("Algorithm" "Competition" "Course" "Knowledge" "Math" "Skill")
# TODO: README.md 整改完后再放出
FILES=("catalogue-algo.md" "catalogue-knowledge.md" "catalogue-skill.md")

rm -rf ./build/

for dir in ${DIRECTORY[*]}; do
    echo "move dir: $dir"
    rm -rf ./docs/$dir
    cp -r ../notes/$dir/ ./docs/$dir
done

for file in ${FILES[*]}; do
    echo "move file: $file"
    rm -rf ./docs/$file
    cp -r ../notes/$file ./docs/$file
done

npx docusaurus build | grep -v LaTeX-incompatible

echo "BUILD SUCCESS"
