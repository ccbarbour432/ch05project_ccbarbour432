"use strict";

/*
    checkMissing()

    This function checks all required fields in the form.
    It counts the fields that have been left empty and
    displays the number of missing fields below the form.
*/
function checkMissing() {
    let requiredFields = document.querySelectorAll(".required");
    let missingCount = 0;

    for (let ndx = 0; ndx < requiredFields.length; ndx++) {
        if (requiredFields[ndx].value.trim() === "") {
            missingCount++;
        }
    }

    let missingMessage = document.getElementById("missing-count");

    if (missingCount > 0) {
        missingMessage.textContent =
            "You are missing " + missingCount + " required field(s).";
    } else {
        missingMessage.textContent = "";
    }

    return missingCount;
}


/*
    validateEmail()

    This function checks the email field to make sure
    it contains at least 8 characters. If the email is
    too short, the invalid-email class is added to give
    the field a red border.
*/
function validateEmail() {
    let email = document.getElementById("email");

    if (email.value.length < 8) {
        email.classList.add("invalid-email");
        return false;
    }

    email.classList.remove("invalid-email");
    return true;
}


/*
    validateForm()

    This function runs both checkMissing() and
    validateEmail() when the button is clicked.
    It prevents the form from continuing if required
    information is missing or the email is invalid.
*/
function validateForm() {
    let missingCount = checkMissing();
    let validEmail = validateEmail();

    if (missingCount > 0 || !validEmail) {
        alert("Please complete all required fields and enter a valid email address.");
        return;
    }

    alert("Congratulations, You Won!");
}


/*
    Event listener

    This event listener runs validateForm() when
    the form's button is clicked.
*/
document.getElementById("submit-button").addEventListener("click", validateForm);
