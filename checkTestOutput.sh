#!/bin/bash

cd Recruitment

output=$(npm test)


if [[ $output == *"failing"* ]]; then
  echo "$output"
  exit 1
fi

echo "$output"

exit 0