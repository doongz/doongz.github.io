#!/bin/bash

echo "BUILD START"

TOPIC=("Algorithm" "Competition" "Course" "Knowledge" "Math" "Skill")

for sub_name in ${TOPIC[*]}; do
    echo "process $sub_name"
    rm -rf ./docs/$sub_name
    cp -r ../notes/$sub_name/ ./docs/$sub_name
done

npx docusaurus start
