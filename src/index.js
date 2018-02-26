module.exports = function solveEquation(equation) {
  // your implementation
  var arr = equation.split('*');
  arr[1] = arr[1].replace('x^2','');
  arr[2] = arr[2].replace('x','');
  arr[0] = arr[0].replace(/ /g,'');
  arr[1] = arr[1].replace(/ /g,'');
  arr[2] = arr[2].replace(/ /g,'');
  var discriminant = Math.sqrt(+arr[1]*+arr[1] - 4*+arr[0]*+arr[2]);
  var solves = [];
  solves[0] = Math.round((-discriminant - +arr[1])/(2*+arr[0]));
  solves[1] = Math.round((+discriminant - +arr[1])/(2*+arr[0]));
  return solves.sort(compareNumbers);
}
function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
