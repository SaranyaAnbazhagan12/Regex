document.getElementById("regexForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Regex Patterns
    const namePattern = /^[A-Za-z\s]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[6-9]\d{9}$/; // Indian mobile number format

    // Input Fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // Error Messages
    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const phoneError = phoneInput.nextElementSibling;

    // Name Validation
    if (!namePattern.test(nameInput.value.trim())) {
        nameError.textContent = "Enter a valid name (only letters, min 3 characters)";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email Validation
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Phone Validation
    if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    // If all fields are valid
    if (isValid) {
        document.getElementById("success-message").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("success-message").classList.add("hidden");
            document.getElementById("regexForm").reset();
        }, 3000);
    }
});
