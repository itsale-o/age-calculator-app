// HTML elements
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const allInputs = document.querySelectorAll(".input");
const confirmButton = document.getElementById("confirm-button");
const titles = document.querySelectorAll(".title");
const allResultSpans = document.querySelectorAll(".info-span");
const dayErrorSpan = document.getElementById("day-error-span");
const monthErrorSpan = document.getElementById("month-error-span");
const yearErrorSpan = document.getElementById("year-error-span");
const daySpan = document.getElementById("day-span");
const monthSpan = document.getElementById("month-span");
const yearSpan = document.getElementById("year-span");

confirmButton.addEventListener("click", e => {
    let day = inputDay.value.trim();
    let month = inputMonth.value.trim();
    let year = inputYear.value.trim();

    const currentDay = new Date();
    let userDate = new Date(`${month}-${day}-${year}`)

    let totalDays = Math.floor((currentDay - userDate) / (1000 * 60 * 60 * 24))

    let years = Math.floor(totalDays / 365) 
    let restYears = totalDays % 365

    let months = Math.floor(restYears / 30)
    let days = restYears % 30
  
    if(((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) || (day < 0 || month < 0 || year < 0) || (month == 2 && day > 29)){ 
        errorFunc();
        dayErrorSpan.innerText = "Must be a valid date";
        dayErrorSpan.style.display = "block";
    }else if(day > 31 && month > 12){
        errorFunc();
        invalidDay();
        invalidMonth();
        if(year > new Date().getFullYear()){
            invalidYear();
        }   
    }else if(day > 31 && year > new Date().getFullYear()){
        errorFunc();
        invalidDay();
        invalidYear();
        if(month > 12){
            invalidMonth();
        }    
    }else if(month > 12 && year > new Date().getFullYear()){
        errorFunc();
        invalidMonth();
        invalidYear();
        if(day > 31){
            invalidDay();
        }
    }else if(day > 31){
        errorFunc();
        invalidDay();
    }else if(month > 12){
        errorFunc();
        invalidMonth();
    }else if(year > new Date().getFullYear()){
        errorFunc();
        invalidYear();
    }else if(day > new Date().getDate() && month >= new Date().getMonth() + 1 && year >= new Date().getFullYear()){
        errorFunc();
        yearErrorSpan.innerText = "Must be in the past";
        yearErrorSpan.style.display = "block";  
    }else if(day == "" || month == "" || year == ""){
        errorFunc();
        dayErrorSpan.innerText = "Fill in all fields"
        dayErrorSpan.style.display = "block";
    }
    else{
        daySpan.innerText = days;
        monthSpan.innerText = months;
        yearSpan.innerText = years;
    }
});

function errorFunc(){
    titles.forEach(title => {
        title.className += " error-title"
    });

    allInputs.forEach(input => {
        input.style.border = "solid 1px hsl(0, 100%, 67%)";
    });
};

function invalidDay(){
    dayErrorSpan.innerText = "Must be a valid day";
    dayErrorSpan.style.display = "block";
}

function invalidMonth(){
    monthErrorSpan.innerText = "Must be a valid month";
    monthErrorSpan.style.display = "block";  
};

function invalidYear(){
    yearErrorSpan.innerText = "Must be in the past";
    yearErrorSpan.style.display = "block"; 
};

function typing(){
    titles.forEach(title => {
        title.classList.remove("error-title")
    });

    allInputs.forEach(input => {
        input.style.border = "solid 1px hsl(0, 0%, 86%)" 
    });

    allResultSpans.forEach(element =>{
        element.innerText = "--"
    })

    if(dayErrorSpan.style.display = "block"){
        dayErrorSpan.style.display = "none";
    };
    if(monthErrorSpan.style.display = "block"){
        monthErrorSpan.style.display = "none";
    };
    if(yearErrorSpan.style.display = "block"){
        yearErrorSpan.style.display = "none";
    };
};