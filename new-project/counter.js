export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  // console.log(element.on)

  const handler = (event) => {
    // event.stopPropagation()
    console.log(event) // event object
    console.log(event.target) // element
    setCounter(counter + 1)
  }

  // element.on('click', handler, { once: true })

  element.addEventListener('click', handler, { once: true})
  setCounter(0)
}

let sentence = 'You are a fearless being embrace it'
function addComma(sentence, word) {
  var indexOfWord = sentence.indexOf(word)
  console.log(indexOfWord)
  return sentence.slice(0, indexOfWord + word.length) + ',' + sentence.slice(indexOfWord + word.length)
}
console.log(addComma(sentence, 'being'))

function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};
const obj2 = {
  animal2: "dogs",
  sleepDuration2: "8 and 14 hours",
};

greet.call(obj);

function greetings() {
  console.log(this.animal2, "typically sleep between", this.sleepDuration2);
}

function callBoth() {
  greet.call(obj);
  greetings.call(obj2);
}

console.log(callBoth())