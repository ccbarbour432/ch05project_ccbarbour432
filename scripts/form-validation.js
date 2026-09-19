
"use strict"

function checkMissing() {
    document.getElementById('email, name, select').value = document.getElementById('email, name, select'), value + inVal;
}
function displayMe(inVal)
{
    document.getElementById('email, name, select').value = document.getElementById('email, name, select').value + inVal;
}

function validateEmail() {
    document.getElementById('email').value = document.getElementById('email').value + inVal;
}


function validate_form(inForm) {
    let warnArr = document.getElementsByClassName("form_errors");
    let ndx;

    if(inForm.checkValidity() === false) {
        let elementsArr = inForm.querySelectorAll(":invalid");
        let errCount = elementsArr.length - 1;

        for (ndx = 0; ndx < warnArr.length; ndx++) {
            warnArr[ndx].innerHTML = "You are missing data in " + errCount + " fields in this form.";
            warnArr[ndx].classList.add("required");
        }
    }
    else {
        for (ndx = 0; ndx < warnArr.length; ndx++) {
            warnArr[ndx].innerHTML = "";
            warnArr[ndx].classList.remove("required");
        }
    }
}

// function validate_form(inForm) {
//     let warnArr = document.getElementsByClassName("form_errors");
//     let ndx;
//     const warningElements =
//         document.getElementsByClassName("form_errors");

//     const invalidElements =
//         inForm.querySelectorAll(":invalid");

//     const formIsValid = inForm.checkValidity();

//     for (let ndx = 0; ndx < warningElements.length; ndx++) {
//         if (!formIsValid) {
//             warningElements[ndx].textContent =
//                 "You are missing data in " +
//                 (invalidElements.length - 1) +
//                 " field(s) in this form.";

//             warningElements[ndx].classList.add("required");
//         } else {
//             warningElements[ndx].textContent = "";
//             warningElements[ndx].classList.remove("required");
//         }
//     }

//     return formIsValid;
// }
