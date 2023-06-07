## How it works  

To add a new file, you should create a new branch as main branch's clone. On your branch add new exercises as it's member below. Before uploading new files, a script, which run  **validator_test.js** file, will be started on Github. If all tests run successfully, files will be upload to the repository. Otherwise, you should correct mistakes. When every file is ready to be uploaded to Playcode.io, you should create a new pull request to merge from your branch to main branch of another recruiter. After this recruiter accepts pull request and all files are uploaded to the main branch, Github will start a script, which uploads every file named **task.js** and **task_validator.js** and all configuration files.


## Testing
To run **validator_test.js** locally you should use ``` javascript npm test ``` command in the Recruitment folder.

## Directory structure

Only **Recruitment** directory is uploaded to the Playcode.io. This directory should contain configuration files and directories with lists of exercises. Those directories should be named with a number (f.e. 02). Every directory with exercises is including 4 files:
- file **task.js** 
- file **model_solutions.js**
- file **task_validator.js**
- file **validator_test.js**

# File **task.js**

This file should contain the instruction for the tasks for candidates with basic function structure. Candidate's job is to implement this function's body.
>
Example
```javascript
let general = {

    /**
    * Returns difference of a and b.
    */
    subtract : function(a, b) {
    },

};

module.export = general;
```
# File **model_solutions.js**

In this file there should be correct solutions enclosed in an object named *general*. Correct solution names should be the same as in **task.js** file. In object *incorrectSolutions** should be incorrect solutions, also named same as in **task.js** file.
>
Example
```javascript 
const general = {
  subtract : function(a, b) {
    return a - b
  },
};

const incorrectSolution = {
  subtract : function(a, b) {
    return b - a
  },
};

module.exports = {
  general,
  incorrectSolution
}
```
# File **task_validator.js**

This file should contain tests for all tasks from **task.js** file. Tests' names should be the same as tested functions. In separate scope we make assertions and later we check results for those assertions using *it* methods in *tests* function. Every testing function, which is added to the file, should be also added in *module.exports* object. Labels to test in *it* methods should follow the pattern: 
>
*name of the testing function*: This method should *explain, what function should do*
>
Example
```javascript 
var expect = require('chai').expect

var subtract = (functionToTest) => {
  expect(functionToTest(8, 6)).to.eql(2);
}

var tests = describe('task validator:', function testing() {
  it('subtract: This method should subtract two number', () => subtract(general.subtract));
});

module.exports = {
  subtract,
}
```
# File **validator_test.js**

In this file we are checking if every test from validator return expected output - true for functions from *general* module and false for functions from *incorrectSolutions* module from **model_solutions.js** file.
>



Aby dodać nowe zadania należy stworzyć nowy branch, na nim dodać nowe zadania (jakie pliki wymagane jest opis poniżej) oraz wystawić merge requesta. Po zaakceptowanym merge requeście na githubie zostanie uruchomiony skrypt który puści plik **validator_test.js**, jeśli wszystkie testy zostaną zakończone sukcesem, zostanie wykonany skrypt **uploadFile.js** wrzucający pliki na playcode.io.
>
Skrypt bedzie dodawał na playcode z każdego katalogu oznaczonego numerem zadania pliki **task.js** oraz **task_validator.js** oraz pliki konfiguracyjne

## Testowanie validatora

1. Struktura katalogów
Katalog **Recruitment** zawiera katalogi z zadaniami
Wszystkie pliki dotyczące jednej listy zadań/grupy zadań znajdują się w katalogu oznaczonym numerem (zapisujemy dwie cyfry np. 02).
W katalogu powinny się znajdować 4 pliki.
- plik **task.js** 
- plik **model_solutions.js**
- plik **task_validator.js**
- plik **validator_test.js**

2. Plik **task.js** 
W tym pliku znajdują się opisy zadań dla kandydatów wraz z podstawową strukturą funkcji
>
>
```javascript
general = (function() {

  return {
    /**
    * Returns difference of a and b.
    */
    subtract : function(a, b) {
    },

  };

})();
```

3. Plik **model_solutions.js**
W tym pliku znajdują się wzorcowe rozwiązania wszystkich zadań w module nazwanym **general** - tak samo nazwane jak w pliku task.js. W module nazwanym **incorrectSolution** znajdują się niepoprawne rozwiązania zadań nazwane tak samo jak w pliku task.js

```javascript
general = (function() {

    return {
      subtract : function(a, b) {
        return a - b
      },
    };
  
  })();

incorrectSolution = (function() {
  return {
    subtract : function(a, b) {
      return b - a
    },
  };
})();

```
4. Plik **task_validator.js**
W tym pliku znajdują się testy do wszystkich zadań z pliku task.js. Nazwy testów powinny być takie same jak nazwa testowanej funkcji. Osobno tworzymy funckje wykonującą asercje, ich wynik sprawdzamy za pomocą funkcji *it* w funkcji tests. Każdą funkcję testującą, którą dodajemy należy dodać również w module.exports. Opis testu w funkcji *it* należy pisac wg wzoru:
*nazwa_funkcji testowanej*: This method should *opis co powinna robić funkcja*.
>
>
```javascript
//Przykładowy test funckji subtract
var subtract = (functionToTest) => {
  expect(functionToTest(8, 6)).to.eql(2);
}

//Funkcja tests
var tests = describe('task validator:', function testing() {
  it('subtract: This method should subtract a add b', 
      () => subtract(general.subtract));
});
```
5. Plik **validator_test.js**
W tym pliku jest sprawdzane czy każdy test z validatora zwraca spodziewany wynik - dla plików z modułu incorrectSolution z pliku modelSolutions.js testy powinny zwracać 'false', a dla plików z modułu general 'true'.
