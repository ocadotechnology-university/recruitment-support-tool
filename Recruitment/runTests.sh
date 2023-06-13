#!/bin/bash

# Pobierz listę elementów w bieżącym katalogu
directories=$(ls -d */)

# Zapisz bieżący katalog
current_directory=$(pwd)

# Iteruj przez katalogi
for dir in $directories; do
    # Sprawdź, czy katalog nie jest 'node_modules'
    if [[ "$dir" != "node_modules/" ]]; then
        # Utwórz pełną ścieżkę do pliku validator_test.js
        test_file="${current_directory}/${dir}validator_test.js"
        
        # Wykonaj komendę Mocha
        mocha "$test_file"
    fi
done