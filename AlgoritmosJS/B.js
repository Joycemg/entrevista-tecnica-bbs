const x = ['n', 'bro', 'c', '|'];
const y = ['d', 'n', 'l', 'bro', 'g'];
const resp = y.filter((elem) => !x.includes(elem));
console.log(...resp);
