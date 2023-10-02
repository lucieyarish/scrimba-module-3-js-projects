let count = 0;

let countEl = document.getElementById('count-el');

function decrement() {
  if (count > 0) {
    count -= 1;
    countEl.textContent = count;
  }
}

function increment() {
  count += 1;
  countEl.textContent = count;
}
