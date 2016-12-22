var nbs = [4, 3, 2, 1];

var sum = nbs.reduce(function (acc, nb) {
  console.log(arguments);
  return acc + nb;
});

var sum = nbs.reduce((acc, nb) => acc + nb);

console.log(sum);