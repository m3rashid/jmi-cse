#!/bin/bash

folders=( "node_modules" ".next" "build" "dist" )

for folder in "${folders[@]}"
do
	find . -name $folder -type d -exec rm -rf {} +
done

yarn cache clean
