#!/bin/bash

cd Recruitment

output=$(npm test)


if [[ $output == *"failing"* ]]; then
  exit 1
fi

exit 0