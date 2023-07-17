let number = 1;
let row = ' ';

for (let i = 1; i <= 4; i++) {
  row += number + ' ';
  console.log(row);
  number++;

  for (let j = 1; j < i; j++) {
    row += number + ' ';
    console.log(row);
    number++;
  }

}
