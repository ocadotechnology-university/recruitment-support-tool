#!/bin/bash
directories=$(ls -d */)
current_directory=$(pwd)
for dir in $directories; do if [[ "$dir" != "node_modules/" ]]; then
        test_file="${current_directory}/${dir}validator_test.js"
        mocha "$test_file"
    fi
done