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

var experience = 30;
var startingSalary = 45000;
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
// experience 30 salary 45000
// 1 47250 2362.5
// 2 49612.5 2480.625
// 3 52093.125 2604.65625
// 4 54697.78125 2734.8890625000004
// 5 57432.6703125 2871.633515625
// 6 60304.303828125 3015.21519140625
// 7 63319.519019531246 3165.9759509765627
// 8 66485.4949705078 3324.2747485253904
// 9 69809.7697190332 3490.48848595166
// 10 73300.25820498486 3665.012910249243
// 11 76965.27111523409 3848.263555761705
// 12 80813.5346709958 4040.67673354979
// 13 84854.21140454558 4242.710570227279
// 14 89096.92197477286 4454.846098738643
// 15 93551.76807351151 4677.588403675576
// 16 98229.35647718709 4911.467823859354
// 17 103140.82430104644 5157.0412150523225
// 18 108297.86551609875 5414.893275804938
// 19 113712.75879190369 5685.637939595184
// 20 119398.39673149887 5969.9198365749435
// 21 125368.31656807382 6268.415828403691
// 22 131636.7323964775 6581.836619823876
// 23 138218.5690163014 6910.92845081507
// 24 145129.49746711645 7256.474873355823
// 25 152385.97234047228 7619.2986170236145
// 26 160005.2709574959 8000.263547874795
// 27 168005.53450537068 8400.276725268535
// 28 176405.81123063923 8820.290561531961
// 29 185226.1017921712 9261.30508960856
// 30 194487.40688177975 9724.370344088988

// while loop

// let i = 10;
// while (i <= experience) {
//     console.log(i + num);

//     i++
// }
// node p1.js

