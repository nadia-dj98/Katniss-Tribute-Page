let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
document.getElementById("today-date").innerHTML = day + "/" + month + "/" + year;