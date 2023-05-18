# quick info
ten branch jest juz z ladnymi nazwami i całkiem usystematyzowanaa nazwa + ma poprawiony skrypt na sprawdzanie nazw plików i  nie ma już w nim tych starych zapisanych na sztywno

# POCZĄTEK READ.ME

## Ogólne informacje

Aby dodać nowe zadania należy stworzyć nowy branch, na nim dodać nowe zadania( jakie pliki wymagane jest opis poniżej ) oraz wystawić marge requesta. Po zaakceptowanym merge requeście na githubie zostanie uruchomiony skrypt który puści plik **validator_test.js**, jeśli wszystkie testu zostaną zakończone sukcesem, zostanie wykonany skrypt **uploadFile.js** wrzucający pliki na playcode.io.
>
Skrypt bedzie dodawał na playcode z każdego katalogu oznaczonego numerem zadania pliki **task.js** oraz **task_validator.js** oraz pliki konfigurujace

## Testowanie validatora

1. Struktura katalogów
Katalog **Recruitment** zawiera katalogi z zadaniami
Wszystkie pliki dotyczące jednego zadania/listy zadań/grupy zadań znajdują się w katalogu oznaczonym numerem (zapisujemy dwie cyfry np. 02).
W katalogu powinny się znajdować 4 pliki.
- plik **task.js** 
- plik **model_solutions.js**
- plik **task_validator.js**
- plik **validator_test.js**

2. Plik **task.js** 
W tym pliku znajdują się opiy zadań dla kandytatów wraz z podstawową struktura funkcji
>
>
```javascript
/**
    * Returns sum of a and b.
    */
    add : function(a, b) {
    },
```

3. Plik **model_solutions.js**
W tym pliku znajdują się wzorcowe rozwiązania wszystkich zadań - tak samo nazwane jak w pliku task.js. Dodatkowo mogą się znajdować niepoprawne rozwiązania

4. Plik **task_validator.js**
W tym pliku znajdują się testy do wszystkich zadań z pliku task.js. Jeżeli w pliku model_solutions.js znajdują się niepoprawnie rozwiazane zadania, należy wywołać te same testy dla poprawnego i niepoprawnego rozwiazania. Nazwy testów powinny być tworzone wg wzoru {nazwa z plik task.js testowanej funkcji}_{spodziewany wynik testu}. Spodziwany wynik testu, jeżeli ma być poprawny wpisujemy true, w przeciwnym wypadku dowolnie, najlepiej false. Osobno tworzymy funckje wykonującą assercje, ich wynik sprawdzamy za pomocą funkcji it w funkcji tests. Każdą funkcję testującą, którą dodajemy należy dodać również w module.exports
>
>
```javascript
//Przykładowy test funckji subtract
var subtract_true = () => {
  expect(general.subtract(8, 4)).to.eql(2);
}

var subtract_false = () => {
  expect(general.subtract_false(8, 4)).to.eql(2);
}

//Funkcja tests
var tests = describe('task validator:', function testing() {
  it('add: This method should add a and b', add_true);
  it('subtract: This method should subtract a add b', subtract_true);
});
```

5. Plik **validator_test.js**
Nie zmieniamy
