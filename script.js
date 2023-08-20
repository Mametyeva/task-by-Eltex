let alfs = "ABDEFGHIJKLMNOQRTUVWYZ".split('');
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = [...alfs, ...numbers, '+', '-', '_', '$', '~'];
let btn = document.querySelector('button');

let randomSymbol = () => symbols.sort(() => 0.5 - Math.random()).join('')[0];
let findRepeat = (symbol, arr) => arr.filter((el) => el === symbol).length;

function makeRandomString(n, arr) {
  for (let i = 0; i < n; i++) {
    arr.push(randomSymbol());
  }
  return arr;
};

function replaceSymbols(param, symbol, arr) {
  if (param === "alfs") {
    arr.forEach((el, i, ar) => {
      if (alfs.includes(el)) ar.splice(i, 1, symbol);
    });
  } else if (param === "nums") {
    arr.forEach((el, i, ar) => {
      if (Number(el)) ar.splice(i, 1, symbol);
    });
  };
  return arr
};

function makeCustomString() {
  let arr = [];
  let quantity = Number(prompt("Строку из скольки символов вы хотите получить?"));
  makeRandomString(quantity, arr);
  alert(`Ваша случайная строка: ${arr.join('')}`);
  let symbolOne = prompt("Введите символ №1");
  replaceSymbols("alfs", symbolOne, arr);
  let symbolTwo = prompt("Введите символ №2");
  replaceSymbols("nums", symbolTwo, arr);
  alert(`Теперь ваша строка выглядит так: ${arr.join('')}`);
  let repeatOne = findRepeat(symbolOne, arr);
  let repeatTwo = findRepeat(symbolTwo, arr);
  alert(`
  Количество повторов первого символа: ${repeatOne};
  Количество повторов второго символа: ${repeatTwo};
  Неизмененных символов: ${arr.length - repeatOne - repeatTwo};
  `);
  return
};

btn.addEventListener('click', () => makeCustomString());