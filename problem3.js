/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
// var medicineResult = lastDay/3;
for (let i = 1; i <= lastDay; i++) {
    // var m = i % 3
    if (i % 3 === 0) {
        console.log(i+" - "+"medicine")
    }
    else {
        console.log(i+" - "+"rest");
    }
}

/* Problem -03 (Medicine Planner) */
// console.log("3 problem");
// var lastDay = 11;

// for (let day = 1; day <= lastDay; day++) {
//     if (day % 3 === 0) {
//         console.log(`${day} - medicine done`);
//     } else {
//         console.log(`${day} - rest done`);
//     }
// }