let homeCount = 0;

let homeCountEl = document.getElementById('home-count-el');

function addOneHome() {
  homeCount += 1;
  homeCountEl.textContent = homeCount;
}

function addTwoHome() {
  homeCount += 2;
  homeCountEl.textContent = homeCount;
}

function addThreeHome() {
  homeCount += 3;
  homeCountEl.textContent = homeCount;
}

let guestCount = 0;

let guestCountEl = document.getElementById('guest-count-el');

function addOneGuest() {
  guestCount += 1;
  guestCountEl.textContent = guestCount;
}

function addTwoGuest() {
  guestCount += 2;
  guestCountEl.textContent = guestCount;
}

function addThreeGuest() {
  guestCount += 3;
  guestCountEl.textContent = guestCount;
}
