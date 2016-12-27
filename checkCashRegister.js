/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
  var change =[];
  // Here is your change, ma'am.
  var coins = [
    { name: 'ONE HUNDRED', val: 10000 },
    { name: 'TWENTY', val: 2000 },
    { name: 'TEN', val: 1000 },
    { name: 'FIVE', val: 500 },
    { name: 'ONE', val: 100 },
    { name: 'QUARTER', val: 25 },
    { name: 'DIME', val: 10 },
    { name: 'NICKEL', val: 5 },
    { name: 'PENNY', val: 1 }
  ];
  
  var amount = cash*100-price*100;
  var totalCash =  Math.round(cid.reduce(function(a, b) {
    return a + b[1];
  }, 0)*100);
  var q=0, c=0;
  
  if (amount<totalCash) {
    for (var i=0; i<coins.length; i++){
      for (var j=0; j<cid.length; j++){
        if (cid[j][0] == coins[i].name){
          //Quantity of coins in dash
          q=cid[j][1]*100/coins[i].val;
          //Quantity of coins needed
          c=Math.floor(amount/coins[i].val);
          if (q-c>=0){
            amount-=c*coins[i].val;
            if (c!==0) change.push([coins[i].name, c*coins[i].val/100]);
          }
          else {
            amount-=q*coins[i].val;
            if (q!==0) change.push([coins[i].name, q*coins[i].val/100]);
          }
        }
      }
    }
    if (change.length === 0 || amount !== 0) return "Insufficient Funds";
    else return change;
  }
  else if (amount===totalCash) {
    return "Closed";
  }
  else return "Insufficient Funds";
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
