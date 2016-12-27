/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
*/

function makeFriendlyDates(arr) {
  
  var result=[];
  var day=0, month=0, year=0;
  var str ='';
  
  function getDay (num) {
    var s;
    switch (num) {
      case 1: s = '1st'; break;
      case 2: s = '2nd'; break;
      case 3: s = '3rd'; break;
      default: s = num+'th';
    }
    return s;
  }
  
  function getStringDate(nDate){
    var day = getDay(nDate.getDate());
    var month=nDate.toLocaleString('en-US', {month: 'long'});
    var year=nDate.getFullYear();
    return month+' '+day+', '+year;
  } 
  
  var today = new Date();
  var curYear = today.getFullYear();
  var startDate = new Date(arr[0]);
  var endDate = new Date(arr[1]);
  var diff = (endDate-startDate)/(24*3600000);
  
  if (diff===0) result.push(getStringDate(startDate)); 
  else if (diff<365) {
     if (startDate.getFullYear()===curYear){
       if (startDate.getMonth() === endDate.getMonth()){
         day = getDay(startDate.getDate());
         month=startDate.toLocaleString('en-US', {month: 'long'});
         result.push(month+' '+day);
         day = getDay(endDate.getDate());
         result.push(day);
       }
       else {
         day = getDay(startDate.getDate());
         month=startDate.toLocaleString('en-US', {month: 'long'});
         result.push(month+' '+day);
         day = getDay(endDate.getDate());
         month=endDate.toLocaleString('en-US', {month: 'long'});
         result.push(month+' '+day);
       }
     }
    else{
     result.push(getStringDate(startDate));
     day = getDay(endDate.getDate());
     month=endDate.toLocaleString('en-US', {month: 'long'});
     result.push(month+' '+day);}
  }
  else {
    result.push(getStringDate(startDate));
    result.push(getStringDate(endDate));
  }
 
  
  return result;
}
