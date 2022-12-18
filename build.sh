#!/bin/bash

echo "BUILD START"

DIRECTORY=("Algorithm" "Competition" "Course" "Knowledge" "Math" "Skill")
# FILES=("README.md")

rm -rf ./build/

for dir in ${DIRECTORY[*]}; do
    echo "process $dir"
    rm -rf ./docs/$dir
    cp -r ../notes/$dir/ ./docs/$dir
done

# for file in ${FILES[*]}; do
#     echo "process $file"
#     rm -rf ./docs/$file
#     cp -r ../notes/$file ./docs/$file
# done

npx docusaurus build
