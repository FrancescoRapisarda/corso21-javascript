let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
         (student) => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();



  var giorniDellaSettimana = [    //Array
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica"];

    //DESTRUTTURAZIONE DELL'ASSEGNAMENTO - abbiamo la possibilità (a partire dalla versione 6 di ECMAScript) di assegnare contemporaneamente
    //a piu variabili i valori contenuti in un array!
    var [primoGiorno,secondoGiorno,terzoGiorno,quartoGiorno,quintoGiorno,sestoGiorno,settimoGiorno] = giorniDellaSettimana;

    console.log(primoGiorno);
    console.log(secondoGiorno);
    console.log(terzoGiorno);
    console.log(quartoGiorno);
    console.log(quintoGiorno);
    console.log(sestoGiorno);
    console.log(settimoGiorno);

    console.log(typeof(giorniDellaSettimana));    //object
    console.log(typeof(primoGiorno));             //string
  



    //OGGETTI
    var oggettoVuoto = {};                                        
    var persona = { "nome": "Mario", "cognome": "Rossi"};
    var persona2 = { nome: "Mario", cognome: "Rossi"};
    var persona3 = { "primo-nome": "Mario", "secondo.nome": "Rossi"};
    
    console.log(typeof(oggettoVuoto));                      //object
    console.log(typeof(persona));                           //object

    console.log(persona3);



    //OGGETTI ANNIDATI
    var person = {
      name: "Mario",
      surname: "Rossi",
      address: {
        via: "Via Garibaldi",
        numero: 15,
        CAP: "00100",
        citta: "Roma"
      }
    };


  //ACCEDERE ALLE PROPRIETA'
  console.log(person.address.via);
  console.log(person["address"]["CAP"]);


  //Se proviamo ad assegnare un valore ad una proprietà non definita 
  //creiamo di fatto questa proprietà inizializzandola con il valore assegnato:
  person.age = 34;
  console.log(person);



  //METODI DEGLI OGGETTI
  function visualizzaNomeCognome() { 
    return "Mario Rossi"; }

  person.nomeCognome = visualizzaNomeCognome;

  console.log(typeof(person.nomeCognome));      //type function all'interno dell'oggetto person!
  console.log(visualizzaNomeCognome());         //Mario Rossi




  //PASSAGGIO PER RIFERIMENTO E PASSAGGIO PER VALORE
  var x = 10;  // x = 10
  var y = x;   //passaggio per valore y = 10
  y = y + 1;   // y = 11
  console.log(x);
  console.log(y);


  var person = {nome: "Mario", cognome: "Rossi"};
  var altraPersona = person;                        //passaggio per riferimento (altraPersona ha lo stesso indirizzo di memoria di person)  
  altraPersona.nome = "Giuseppe";                   //modifica il valore della chiave "nome" nella variabile person;

  console.log(person);        //person e altraPersona sono lo stesso oggetto!
  console.log(altraPersona);  //person e altraPersona sono lo stesso oggetto! (altraPersona punta alla locazione di memoria di person)


  

  //FUNZIONI MATEMATICHE CON MATH (Math è un oggetto statico con metodi richiamabili da qualsiasi punto di un programma)
  
  let a = 3.15;
  if (a > Math.PI) {
    console.log("Valore maggiore di pi greco");
    }
    console.log("Il doppio di pi greco è " + Math.PI * 2)


    const numMax = Math.max(89, 13, 6.4, 49, 87.2, 121, 40); //121
    const numMin = Math.min(89, 13, 6.4, 49, 87.2, 121, 40); //6.4
    console.log(numMax);
    console.log(numMin);


    const numPow = Math.pow(4, 3); //4³ = 64    potenza
    const numSqrt = Math.sqrt(144); //12        radice quadrata
    console.log(numPow);
    console.log(numSqrt);


    //metodi ceil(), floor() e round()
    const ceil = Math.ceil(3.4); //4        restituisce il più piccolo intero maggiore o uguale ad un numero
    const floor = Math.floor(3.4) //3       restituisce il più grande intero minore o uguale ad un numero
    const round = Math.round(3.4) //3       effettua l'arrotondamento all'intero più vicino, in base al valore dell'ultima cifra decimale
    const roundMath = Math.round(3.6) //4   effettua l'arrotondamento all'intero più vicino, in base al valore dell'ultima cifra decimale

    console.log(ceil);
    console.log(floor);
    console.log(round);
    console.log(roundMath);



    //GENERA RANDOMICAMENTE DEI NUMERI
    function generaInteroCasuale(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
    console.log(generaInteroCasuale(2,10));   //genera numero casuale fra 2 e 10 (compreso)
    





