#!/bin/bash

# get every element from directory
directories=$(ls -d */)
current_directory=$(pwd)

# Go through every directory
for dir in $directories; do
    # if it's directory with exercises, that's mean it's not 'node_modules'
    if [[ "$dir" != "node_modules/" ]]; then
        test_file="${current_directory}/${dir}validator_test.js"
        
        # run tests - file validator_test.js
        mocha "$test_file"
    fi
done