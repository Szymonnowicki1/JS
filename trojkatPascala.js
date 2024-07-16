const printPascalTriangle = (height) => {
    let spacing = ' '.repeat(height);
    let prevRow = '1';
  
    console.log(spacing + prevRow);
  
    for (let i = 1; i < height; i++) {
      let currentRow = '1';
      let prevNumber = 1;
  
      for (let j = 1; j <= i; j++) {
        const currentNumber = prevNumber * (i - j + 1) / j;
        currentRow += ' ' + currentNumber;
        prevNumber = currentNumber;
      }
  
      spacing = spacing.slice(0, -1);
      console.log(spacing + currentRow);
      prevRow = currentRow;
    }
  };
  
  printPascalTriangle(5);
