//Gioco carta forbice sasso

const scelte = ["carta", "forbice", "sasso"];

const utente = () => {
  const scelta = prompt("Scegli: carta, forbice o sasso?").toLowerCase();
  if (!scelte.includes(scelta)) {
    console.log("Scelta non valida. Scegli tra carta, forbice o sasso.");
    return utente();
  }
  return scelta;
};

const computer = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return scelte[randomIndex];
};

const gioca = (utente, computer) => {
  if (utente === computer) {
    return "Pareggio!";
  } else if (
    (utente === "carta" && computer === "sasso") ||
    (utente === "forbice" && computer === "carta") ||
    (utente === "sasso" && computer === "forbice")
  ) {
    return "Hai vinto!";
  } else {
    return "Il computer ha vinto.";
  }
};

const risultato = gioca(utente(), computer());
console.log(`Il computer ha scelto ${computer()}. ${risultato}`);
