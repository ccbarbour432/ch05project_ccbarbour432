"use strict";

/* This function checks all required fields in the form and tells the user how many are missing. */
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


/* This function checks the email field to make sure it contains at least 8 characters. */
function validateEmail() {
    let email = document.getElementById("email");

    if (email.value.length < 8) {
        email.classList.add("invalid-email");
        return false;
    }

    email.classList.remove("invalid-email");
    return true;
}


/* This function runs both checkMissing() and validateEmail() when the button is clicked. */
function validateForm() {
    let missingCount = checkMissing();
    let validEmail = validateEmail();

    if (missingCount > 0 || !validEmail) {
        alert("Please complete all required fields and enter a valid email address.");
        return;
    }

    alert("Congratulations, You Won!");
}


/* The event listener runs validateForm() when the form's button is clicked. */
document.getElementById("submit-button").addEventListener("click", validateForm);
