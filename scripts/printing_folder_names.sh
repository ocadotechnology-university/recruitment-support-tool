#!/bin/bash
for entry in "./test"/*; do
  if [ -d "$entry" ]; then
    folder_name=$(basename "$entry")
    echo "$folder_name"
    cd ./test/"$folder_name"
    npm test
    cd ../..
  fi
done
