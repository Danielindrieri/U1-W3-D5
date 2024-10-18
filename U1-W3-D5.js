/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = 20
let num = Math.floor(Math.random() * random) + 1
console.log(num)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/ const me = [
  {
    name: 'Daniel',
    surname: 'Indrieri',
    age: '23',
  },
]
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/ delete me[0].age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me[0].skills = ['penso nessuno']

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/ me[0].skills.push('CSS,HTML,JAVASCRIPT')

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/ me[0].skills.pop()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/ const dice = function (num) {
  const result = Math.floor(Math.random() * num) + 1
  console.log(result)
}
dice(6)

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/ const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return 'num1 è piu grande'
  } else num2 > num1
  return 'num2 è piu grande'
}

console.log(whoIsBigger(10, 11))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const dividiamo = function (ciao) {
  const ora = ciao.split(' ')
  return ora
}
console.log(dividiamo('ciao mi chiamo Daniel'))
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/ const deleteOne = function (string, bool) {
  if (bool === true) {
    return string.substring(1)
  } else {
    return string.substring(0, string.length - 1)
  }
}
console.log(deleteOne('string', false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/ const onlyLetters = function (stringa1) {
  const regex = /[0-9]/g
  //su un devaccademy,ho notato che c è una parte di codice che ha inserito i simboli che vogliamo eliminare
  const risult = stringa1.replace(regex, '')
  // su mdn ho trovato il codice "replace che mi fa ritronare la stringa senza numeri "
  return risult
}
console.log(onlyLetters('stringa12345'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/ const isThisAnEmail = function (email) {
if (email.includes("@")) {
  return true
} else {
  return false 
}
}
console.log(isThisAnEmail)

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/ const whatDayIsIt = function () {
  const giorni = [
    'domenica',
    'lunedi',
    'martedi',
    'mercoledi',
    'giovedi',
    'venerdi',
    'sabato',
    
  ]
  const Corrente =new Date()
  const Oggi = Corrente.getDay()
  return giorni[Oggi]
}
console.log(whatDayIsIt())


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

  /* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/const howManyDays = function (data) {
  const vecchiaD = new Date(data);
  const oggi = new Date()
  const calcolo = oggi - vecchiaD
  const differenzaInGiorni = Math.floor(calcolo / (1000 * 3600 * 24));
// allora prima ho fatto diventare il parametro in un oggetto, per poi creare newdate in modo che potesse darmi gli la data attuale, ho colcolato la differenza tra le 2 date (c'ho messo una bella mezz'oretta)e in fine ho usato math.floor per arrotondare il numero 
  return differenzaInGiorni;
}
console.log(howManyDays('2024-10-10'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/ const isTodayMyBirthday = function () {
  const thisDay = new Date
  const giorno = 13
  const mese = 2
    const oggi = thisDay.getDay()
    const questoMese = thisDay.getMonth() + 1
     return oggi=== giorno || mese === questoMese
}
// allora ho creato new.date per la data corrente, poi ho creato 2 costanti con il giorno e il mese e ne ho create altre 2 per oggi e questo mese  e infine ho confrontato tra di loro se fossere uguali o no. é il risultato è falso
console.log(isTodayMyBirthday())


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
 
// L'HO SPOSTATO QUI PER ANDARE PIU COMODO.

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/ const deleteProp = function (string,Object) {
  delete Object[string]
  return Object
}
console.log(Object)
const casa ={
  home: 'letto',
}
console.log(deleteProp('home', casa))
// non so se andava fatto cosi, ho cercato un bel po in giro (forse non ho trovato il sito giusto ) perche non riuscivo a capire molto bene la consegna.
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (movie)  {
  return movie.filter( function(movie) {
    return parseInt(movie.Year) > 2018
  })
}

console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/const countMovies = function (movie) {
  return movie.length
}
console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/const onlyTheYears = function (movies) {
  return movies.map(movie => movie.Year)
}
console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/ const onlyInLastMillennium = function(movie)  {
  return movie.filter( function(movie) {
    return parseInt(movie.Year) < 2001
  })
}
console.log(onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/const sumAllTheYears = function (sum ) {
  return sum.reduce((acc,curr) => acc + parseInt(curr.Year),0)
}
console.log(sumAllTheYears(movies))
// l'ho trovato un po difficile perche non sapeve che parametri erano poi su mdn ho visto che sono accumulatore e currentvalue in modo che possa calcolarli insieme!!!

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
// const searchByTitle = function(Title, movies)  {
//   return movies.filter(function(movie){
//    return movie.title.toLowerCase()
//   })
// }
// console.log(searchByTitle(movies))
//  se riesco cerco di farlo funzionare altrimenti troverai questo messaggio.
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/const prova = function () {
  const elemento = document.getElementById('Ciao')
  if (elemento) {
    console.log('Elemento trovato:', elemento);
  } else {
    console.log('Elemento non trovato.');
  }
}
// ho usato un get.elementbyid per recuperare l id, del header e infine ho usato un if/else per vedere se l'ho preso perfettamente

prova()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/const n1 =function () {
  const element = document.querySelectorAll('main > td')
  if (element.length) {
    console.log('Elemento trovato:', element);
  } else {
    console.log('Elemento non trovato.');
  }
}
n1()
// qui ho usato un queryselectroall in modo che potessi prendere i figli di main e poi ho controllato in console con if/else per vedere se c'ero riuscito 

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const stampa = function() {
  const tdinStampa = document.querySelectorAll('td')
  tdinStampa.forEach(function(td) {
    console.log(td.textContent)
  })
}
stampa()
//qui ho usato queryselectorall per prendere tutti i td,poi ho usato foreach che è andato a recuperare td su html e poi ho utilizzato textcontent perche va a prendere il testo direttamente nell'elemento

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/const n3 = function () {
  const elementi = document.querySelectorAll('a')
 elementi.forEach(function(a) {
  a.style.backgroundColor='red'
 })
}
n3()
// dopo aver preso tutte le a,ho applicato un foreach e poi ho aggiunto dello style con "style.backgroundColor"

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/const new1 = function () {
  const oggetto =document.createElement('li')
  oggetto.textContent = 'Nuovo elemento della lista'
   const Oldoggetto = document.getElementById('mylist')
   Oldoggetto.appendChild(oggetto)
//  dopo aver creato l'elemento ho aggiunto del testo con textcontent,poi ho usato l'elemento getelementbyid per recuperare id della ul poi ho aggiunto li dentro ul 
}
new1()
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/const new2 = function () {
  const svuotaSpesa = document.getElementById('mylist')
  svuotaSpesa.remove()
}
new2()
// dopo aver recuperato l'elemento ho usato remove per svuotarla

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/ const new3 = function () {
  const aggiungi = document.querySelectorAll('tr');
  aggiungi.forEach(function(tr) {
    tr.classList.add('test');
  });
}
new3()
// dopo aver preso tutti i tr li ho presi direttamente con foreach ed ho aggiunto la classe .test facendo delle prove 

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

