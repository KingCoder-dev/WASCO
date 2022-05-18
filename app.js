const submit = document.getElementById("name");
const answer = document.getElementById('submit');
const form = document.getElementById("form");
const select = document.getElementById("subject");
const select2 = document.getElementById("subject2");
const select3 = document.getElementById("subject3");
const position1 = document.getElementById("position1");
const decription1 = document.getElementById("description1");

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (
    (select.value == "tech-drawing" ||
      select.value == "info-tech" ||
      select.value == "geo")
    &&
    (select2.value == "info-tech" ||
      select2.value == "tech-drawing" ||
      select2.value == "geo")
    &&
    (select3.value == "geo" ||
      select3.value == "tech-drawing" ||
      select3.value == "info-tech")
  ) {
    window.location = "positions1.html";

  }
  else if ((select.value == 'bio' || select.value == 'chem' || select.value == "physics") &&
    (select2.value == 'bio' || select2.value == 'chem' || select2.value == "physics") &&
    (select3.value == 'bio' || select3.value == 'chem' || select3.value == "physics")) {

    window.location = 'positions2.html'
  }
  else if ((select.value == 'plumber' || select.value == 'eng')
    && (select2.value == 'plumber' || select2.value == 'eng') &&
    (select3.value == 'plumber' || select3.value == 'eng')) {
    window.location = "position4.html"
  }
  else if ((select.value == "qs") &&
    (select2.value == "qs") &&
    (select3.value == "qs")) {
    window.location = 'position3.html'
  }

  else if ((select.value == 'tech-drawing' || select.value == "info-tech" || select.value == 'qs' || select.value == 'geo' || select.value == 'physics' ||
    select.value == 'chem' || select.value == 'bio' || select.value == 'eng' || select.value == 'plumber')
    && (select2.value == 'tech-drawing' || select2.value == "info-tech" || select2.value == 'qs' || select2.value == 'geo' || select2.value == 'physics' || select2.value == 'chem' || select2.value == 'bio'
      || select2.value == 'eng' || select2.value == 'plumber')
    && (select3.value == 'tech-drawing' || select3.value == "info-tech" || select3.value == 'qs' || select3.value == 'geo' ||
      select3.value == 'physics' || select3.value == 'chem' || select3.value == 'bio'
      || select3.value == 'eng' || select3.value == 'plumber')) {
    window.location = 'positions.html'
  }
})
