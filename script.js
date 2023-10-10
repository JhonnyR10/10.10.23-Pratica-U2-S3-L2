//FORM DEL NOME PRIMO ESERCIZIO
//Seleziono tutti gli elementi del mio form e del div in cui visualizzerò il nome pecedente
const nameInput = document.getElementById("name");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const savedNameDiv = document.getElementById("preName");

//seleziono l'elemento nella memoria e se è presente lo stampo nel div
const savedName = localStorage.getItem("savedName");
if (savedName) {
  savedNameDiv.textContent = `Nome salvato: ${savedName}`;
}
//al click del pulsante salva prendo il valore del campo di input, creo un elemento in memoria, lo salvo e lo stampo nel div *resetto il campo di input*
saveButton.addEventListener("click", function () {
  const newName = nameInput.value;
  localStorage.setItem("savedName", newName);
  savedNameDiv.innerText = `Nome salvato: ${newName}`;
  nameInput.value = ""; //*
});
//al click del bottone rimuovi elimino l'elemento salvato in memoria e svuoto il div che continene il nome precedente
clearButton.addEventListener("click", function () {
  localStorage.removeItem("savedName");
  savedNameDiv.textContent = "";
});

//COUNTER SECONDO ESERCIZIO
//prendo valore del contatore dalla sessione
let cont = sessionStorage.getItem("counterValue");
//lo imposto a zero per una nuova sessiona
if (!cont) {
  count = 0;
}
//seleziono il div
const counterDiv = document.getElementById("counter");
//creo la funzione che aumenta il contatore di 1 lo stampa dentro il div e aggiorna il suo valore nella sessione
const updateCounter = function () {
  cont++; //incremento
  counterDiv.textContent = `${cont}`; //stampo
  sessionStorage.setItem("counterValue", cont.toString()); //aggiorno il valore nella sessione
};

setInterval(updateCounter, 1000); // imposto ogni quanti secondi la funzione viene eseguita con setIntervall

updateCounter(); //faccio partire la mia funzione
