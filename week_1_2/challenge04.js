console.log('Challenge 04');
var bill = 250;
var tip = (bill) => {
    return (bill>=50 && bill<=300) ? bill*0.15 : bill * 0.2;
}
var totalBill = (bill) => {
    console.log(`The bill was ${bill}, the tip was ${tip(bill)}, and the total value ${bill+tip(bill)}`);
}

totalBill(bill);