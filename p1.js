/** Problem -01 ( Divide the Asset ) */
var area = 800;
var asset = 2;
//write your code here
var result = area / asset;
console.log(result); // Output: 400

/** Problem -02 ( Cycle or Laptop ) */
var money = 1000;
//write your code here
if (money >= 25000) {
    console.log("Laptop");
}
    else if (money >= 10000 && money < 25000)
         {
    console.log("Cycle");
}
else {
    console.log("Chocolate");
} // Output: Cycle



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
// var medicineResult = lastDay/3;
for (let i = 1; i <= lastDay; i++) {
        // var m = i % 3
    if (i % 3 === 0) {
            console.log(i + " - " + "medicine")
        }

        else {
            console.log(i + " - " + "rest");
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

// while
// do while
// node p1.js
// medicineResult = 1
 
// while (medicineResult = 1) {
//     console.log("h1");
//     lastDay++
// }
// console.log("no");
console.clear();

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var ext_hash = fileName.includes("#")
var ext_pdf = fileName.includes(".pdf")
var ext_docx = fileName.includes(".docx")


if (ext_hash == true || ext_pdf == true || ext_docx == true) {
    console.log("Store");
} 
else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = {name: "jhankar", roll: 1014, department: "cse" };
//write your code here
console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd `);
console.log(`${student.name.concat(student.roll).concat(".").concat(student.department).concat("@ph.ac.bd")}`);
// `${day} - rest done`



console.clear();

/** Problem 06 :  (Current Salary )  */

var experience = 3;
var startingSalary = 15000;
//write your code here
var percentage = 0.05
// var num=5
var imcrement = startingSalary * percentage;

// var imcrementall = startingSalary + imcrement;

for (let i = 1; i <= experience; i++) {

//     //    console.log(i + "index");
//        console.log(i + num);
startingSalary = startingSalary + imcrement;
imcrement = startingSalary * percentage
    // imcrement = startingSalary * percentage
    console.log(i + " "+ startingSalary +" " +imcrement);


}

// while loop

// let i = 10;
// while (i <= experience) {
//     console.log(i + num);

//     i++
// }
// node p1.js

