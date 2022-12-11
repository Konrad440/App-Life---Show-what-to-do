// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->

const options = ["walcz", "przemyśl to jeszcze raz"];

const btnAdd = document.querySelector(".add");
const btnAdvice = document.querySelector(".showAdvice");
const btnClean = document.querySelector(".clean");
const btnOption = document.querySelector(".showOptions");
const h1 = document.querySelector("h1");

const addToArray = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const newText = input.value;
  if (input.value.length) {
    for (item of options) {
      if (item === newText) {
        alert("To już jest w tablicy");
        return;
      }
    }
  }
  options.push(newText);
  alert(`dodana została opcja - ${newText}`);
  input.value = "";
};

const removeFromArray = (e) => {
  e.preventDefault();
  options.splice(2);
  document.querySelector("h1").textContent = "";
};

const showAdvice = () => {
  const indexOptions = Math.floor(Math.random() * options.length);
  h1.textContent = `${options[indexOptions]}`;
};

const showOption = () => {
  alert(options.join("--- ---"));
};

btnAdd.addEventListener("click", addToArray);

btnClean.addEventListener("click", removeFromArray);

btnAdvice.addEventListener("click", showAdvice);

btnOption.addEventListener("click", showOption);
