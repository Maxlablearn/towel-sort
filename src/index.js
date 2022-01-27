
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
  } if ( matrix === []) {
    return [];
  }
    return matrix.map((a, b) => b % 2 === 0 ? a : a.reverse()).flat();
}
