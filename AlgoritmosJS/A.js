function numerosPares(maximo = 100) {
  let resp = '';
  for (let index = 0; index < maximo; index++) {
    if (index % 2 === 0) {
      resp += ` ${index} `;
    }
  }
  resp += '...';
  return resp;
}

console.log(numerosPares());
