let films = document.querySelectorAll(".films");
for (let i = 0; i < films.length; i++) {
  const film = films[i];
  film.addEventListener("mousemove", Shuf);
  film.addEventListener("mouseout", stopShuf);
}

function Shuf(event) {
  let cardFilms = this.querySelector(".card");
  let half1 = cardFilms.offsetHeight / 2;
  let half2 = cardFilms.offsetWidth / 2;
  cardFilms.style.transform =
    "rotateX(" +
    -(event.offsetY - half1) / 10 +
    "deg) rotateY(" +
    (event.offsetX - half2) / 10 +
    "deg)";
}

function stopShuf(event) {
  let cardFilms = this.querySelector(".card");
  cardFilms.style.transform = "rotate(0)";
}
