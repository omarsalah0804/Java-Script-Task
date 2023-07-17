let birthMonth = prompt("Please enter the number of your birth month (1-12):");

if (birthMonth >= 1 && birthMonth <= 12) {
  let month;
  switch (Number(birthMonth)) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  console.log("Your birth month is: " + month);
} else {
  console.log("Invalid input! Please enter a valid number between 1 and 12.");
}
