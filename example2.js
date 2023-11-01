/*
Si sviluppi una funzione che dato un input intero, si verifichi questo sia un anno bisestile o meno.
In breve:
Verifica se un anno è bisestile o meno.
REGOLA:
Un anno è bisestile se è divisibile per 4, tranne quando è divisibile per 100, a meno che non sia divisibile per 400.
*/


function isAnnoBisestile(anno) {
    if ((anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Esempio di utilizzo:
  const anno = 2023;
  if (isAnnoBisestile(anno)) {
    console.log(`${anno} è un anno bisestile.`);
  } else {
    console.log(`${anno} non è un anno bisestile.`);
  }