
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