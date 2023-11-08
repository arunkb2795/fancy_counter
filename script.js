const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const limitTextEl = document.querySelector(".limit__text");

function incrementCounter() {
  //Get the current value of the counter
  let currentValue = counterValueEl.textContent;

  if (Number(currentValue) >= 5) {
    counterValueEl.textContent = 5;

    // adding a red background if the limit reached.
    counterEl.classList.add("counter--limit");

    // adding message if the limit reached.
    limitTextEl.innerHTML =
      "Maximum limit! By <strong>PRO</strong> for more clicks.";

    // disabling the counter buttons to perform further actions.
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  } else {
    //Convert the current value to a number type and increment the current value by one, assign it to the counter.
    counterValueEl.textContent = Number(currentValue) + 1;
  }
  //remove the focus of the button to remove a glich/bug
  increaseButtonEl.blur();
}

function decrementCounter() {
  //Get the current value of the counter
  let currentValue = counterValueEl.textContent;

  //Check the counter not show the negative values.
  if (Number(currentValue) <= 0) {
    counterValueEl.textContent = 0;
  } else {
    //Convert the current value to a number type and decrement the current value by one, assign it to the counter.
    counterValueEl.textContent = Number(currentValue) - 1;
  }

  //remove the focus of the button to remove a glich/bug
  decreaseButtonEl.blur();
}

function resetCounter() {
  //Set the current value to zero.
  counterValueEl.textContent = 0;

  // removing the all warnings and message of limit on reset.
  counterEl.classList.remove("counter--limit");
  limitTextEl.innerHTML = "";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur();
}

//Increment the counter by + button click.
increaseButtonEl.addEventListener("click", incrementCounter);

//Increment the counter by - button click.
decreaseButtonEl.addEventListener("click", decrementCounter);

//Increment the counter by reset button click.
resetButtonEl.addEventListener("click", resetCounter);

//Increment the counter by keyboard clicks.
document.addEventListener("keydown", incrementCounter);
