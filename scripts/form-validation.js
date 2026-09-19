function checkMissing() {
    document.getElementById('email').value = document.getElementById('email'), value + inVal;
}
function displayMe(inVal)
{
    document.getElementById('email').value = document.getElementById('email').value + inVal;
}


function validate_form(inForm) {
    let warnArr ;
    let ndx;
    warnArr = document.getElementsByClassName("form_errors");

    if(inForm.checkValidity == false) {
        let elementsArr = inForm.querySelectorAll(':invalid');
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