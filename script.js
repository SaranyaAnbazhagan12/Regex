document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    let isValid = true;

    // Name validation (Only letters, min 3 characters)
    let namePattern = /^[A-Za-z\s]{3,}$/;
    if (!namePattern.test(name)) {
        nameError.textContent = "Enter a valid name (at least 3 letters)";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Phone number validation (10 digits)
    let phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});


