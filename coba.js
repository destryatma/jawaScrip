function printPascalTriangle(numRows) {
    for (let i = 0; i < numRows; i++) {
      let row = '';
      for (let j = 0; j <= i; j++) {
        row += pascal(i, j) + ' ';
      }
      console.log(row);
    }
  }
  
  function pascal(i, j) {
    if (j === 0 || j === i) {
      return 1;
    }
    return  pascal(i - 1, j - 1) + pascal(i - 1, j);
  }
  
  printPascalTriangle(4);
  