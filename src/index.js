module.exports = function connectFour(board) {
  const arr = board;

  const R = 'R';
  const Y = 'Y';
  const U = '-';
  const [ x, y ] = [ arr[0].length, arr.length ];

  const isFilled = d => d === R || d === Y;

  const hasNeighbord = (i, j) => (i > -1 && i < x) && (j > -1 && j < y)

  const checkLeft = (i, j) => {
    return hasNeighbord(i, j - 1) ? arr[i][j - 1] === arr[i][j] : false;
  }

  const checkUp = (i, j) => {
    return hasNeighbord(i - 1, j) ? arr[i - 1][j] === arr[i][j] : false;
  }

  const checkUpperLeft = (i, j) => {
    return hasNeighbord(i - 1, j - 1) ? arr[i - 1][j - 1] === arr[i][j] : false;
  }

  for ( let i = 0; i < y; i++) {
      for ( let j = 0; j < x; j++) {
        if (isFilled(arr[i][j])) {
          if (
            (checkLeft(i, j) && checkLeft(i, j - 1) && checkLeft(i, j - 2)) ||
            (checkUp(i, j) && checkUp(i - 1, j) && checkUp(i - 2, j)) ||
            (checkUpperLeft(i, j) && checkUpperLeft(i - 1, j - 1) && checkUpperLeft(i - 2, j - 2))
          ) {
            return arr[i][j];
          }
        }
      }
  }
  return 'That is not the end!';
}
