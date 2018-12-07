// =============================================================Problem 1
// function week(){

//    var days=[
//        "Sunday",
//        "Monday",
//        "Tuesday",
//        "Wednesday",
//        "Thursday",
//        "Friday",
//        "Saturday"
//    ]

//    num = 0

//    while(num<7){
//        if(days.num == days[0] || days.num == days[6]){
//            return "Sleep in."
//        } else {
//            return "Go to Work."
//        }
//        num++
//    }
// }

// console.log(week());
var day = 2

var days = ["Go to Work", "Go to Work", "Go to Work", "Go to Work", "Go to Work", "Sleep in", "Sleep in"]

console.log(days(day))


// =============================================================Problem 3




function tipCalc(service, total) {
    // var tipAmount;
    // var newTotal;

    // if (service == "good") {
    //     tipAmount = total * 0.2;
    // } else if (service == "fair") {
    //     tipAmount = total * 0.15;
    // } else if (service == "poor") {
    //     tipAmount = total * 0.10;
    // }  else {
    //     console.log('wrong value')
    //     return;
    // }

    // newTotal = tipAmount + total;

    // newTotal = newTotal * 100;
    // newTotal = Math.ceil(newTotal);
    // newTotal = newTotal / 100;

    // console.log("$" + newTotal);

    var tipAmounts = {
        poor: 0.1,
        fair: 0.15,
        good: 0.2
    }
    console.log( (total  *  tipAmounts[service]) + total )
}

tipCalc("good", 175.98)

// =============================================================Problem 2



monthEx = "February";
yearEx = 2000;

function date(month, year){

   var calendar = {
       "January": 31,
       "February": 28,
       "March":31,
       "April": 30,
       "May": 31,
       "June": 30,
       "July": 31,
       "August": 31,
       "September": 30,
       "October": 31,
       "November": 30,
       "December": 31
   };

   if(month == "February"){
       if(year % 400 != 0){
           return calendar["February"]
       } else {
           return calendar["February"] + 1
       }

   }else{
       return calendar[month]
   }
}

console.log(date("February", 2000));