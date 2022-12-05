// const title = document.title;
const dateActuelle = document.querySelector(".date");
const heureActuelle = document.querySelector(".heure");

//  Date
// const jour = date.getDay();
// const jourDuMois = date.getDay();
// const mois = date.getMonth();

// Heure
function update() {
  const date1 = new Date();
  const date = date1.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const dateComplete = date;
  const heure = date1.getHours();
  const minutes = date1.getMinutes();
  const secondes = date1.getSeconds();
  const heureComplete = `${heure}: ${minutes}: ${secondes}`;
  title.innerText = heureComplete;
  dateActuelle.innerText = dateComplete;
}
// console.log(date);
// console.log(heure);

// heureActuelle.innerText = heureComplete;

// SET INTERVAL
const title = document.getElementById("title");

function updateHour() {
  update();
}
// setTimeout(updateHour, 1000);
setInterval(updateHour, 1000);
