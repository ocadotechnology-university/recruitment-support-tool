# quick info
ten branch jest juz z ladnymi nazwami i całkiem usystematyzowanaa nazwa + ma poprawiony skrypt na sprawdzanie nazw plików i  nie ma już w nim tych starych zapisanych na sztywno

# POCZĄTEK READ.ME

## Ogólne informacje

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
  it('subtract: This method should subtract a add b', () => subtract(general.subtract));

});
```

5. Plik **validator_test.js**
W tym pliku jest sprawdzane czy każdy test z validatora zwraca spodziewany wynik - dla plików z modułu incorrectSolution z pliku modelSolutions.js testy powinny zwracać 'false', a dla plików z modułu general 'true'.
