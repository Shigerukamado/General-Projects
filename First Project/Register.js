const email = document.getElementById("Email");
const username = document.getElementById("Username");
const phone = document.getElementById("PhoneNumber");
const Dateofbirth = document.getElementById("DateOfBirth");
const password = document.getElementById("Password");
const confirmpassword = document.getElementById("ConfirmPassword");
const register = document.getElementById("register");
const tologin = document.getElementById("tologin");
const country = document.getElementById("Country");
const state = document.getElementById("State");
const Gender = document.getElementById("Gender");
const Address = document.getElementById("Address");

const emailalert = document.getElementById("emailalert");
const passwordalert = document.getElementById("passwordalert");
const confirmpasswordalert = document.getElementById("confirmpasswordalert");
const dateofbirthalert = document.getElementById("dateofbirthalert")
const phonenumberalert = document.getElementById("phonenumberalert");

// Email validation
email.addEventListener("input", () => {
  const value = email.value.toLowerCase();
  if (value.endsWith("@gmail.com") || value.endsWith("@yahoo.com") || value.endsWith("@outlook.com")) {
    emailalert.textContent = " Valid Email";
    emailalert.style.color = "green";
    emailalert.style.fontSize= "13px"
 } else {
    emailalert.textContent = " Invalid Email";
    emailalert.style.color = "red";
    emailalert.style.fontSize= "13px"
  }
});

// Password validation
function validatePassword() {
  const value = password.value;
  const confirmValue = confirmpassword.value;

  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSymbol = /[!@#$%^&*()_+?><{}:',./\][=-]/.test(value);

  if (value.length < 8) {
    passwordalert.textContent = " Must be at least 8 characters";
    passwordalert.style.color = "red";
    passwordalert.style.fontSize= "13px"
  } else if (!hasLower || !hasUpper || !hasNumber || !hasSymbol) {
    passwordalert.textContent = "Must contain uppercase, lowercase, number & symbol";
    passwordalert.style.color = "red";
    passwordalert.style.fontSize= "13px"
  } else {
    passwordalert.textContent = "Strong Password";
    passwordalert.style.color = "green";
    passwordalert.style.fontSize= "13px"
  }

  // confirm password check
  if (confirmValue !== "" && confirmValue !== value) {
    confirmpasswordalert.textContent = " Passwords do not match";
    confirmpasswordalert.style.color = "red";
    confirmpasswordalert.style.fontSize= "13px"
  } else {
    confirmpasswordalert.textContent = "";
  }
}

password.addEventListener("input", validatePassword);
confirmpassword.addEventListener("input", validatePassword);

// Toggle Password Visibility
function togglePassword(inputId, element) {
  const input = document.getElementById(inputId);
  const icon = element.querySelector("i"); 

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function validateDateOfBirth() {
    const dob = new Date(Dateofbirth.value);
    const today = new Date();

if (!Dateofbirth.value) {
        dateofbirthalert.textContent = "Please enter your date of birth";
        dateofbirthalert.style.color = "red";
        dateofbirthalert.style.fontSize = "13px";
        return false;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18) {
        dateofbirthalert.textContent = "You must be 18 or above to register";
        dateofbirthalert.style.color = "red";
        dateofbirthalert.style.fontSize = "13px";
        return false;
    } else {
        dateofbirthalert.textContent = "Valid age";
        dateofbirthalert.style.color = "green";
        dateofbirthalert.style.fontSize = "13px";
        return true;
    }
}
Dateofbirth.addEventListener("change", validateDateOfBirth);

function validatePhoneNumber() {
    const number = phone.value.trim();

    if (
        (number.startsWith("080") ||
        number.startsWith("070") ||
        number.startsWith("090") ||
        number.startsWith("081") ||
        number.startsWith("091")) 
        && number.length === 11
    ) {
        phonenumberalert.textContent = "Valid Phone Number";
        phonenumberalert.style.color = "green";
        phonenumberalert.style.fontSize = "13px";
        return true;
    } else {
        phonenumberalert.textContent = "Invalid Phone Number";
        phonenumberalert.style.color = "red";
        phonenumberalert.style.fontSize = "13px";
        return false;
    }
}
register.addEventListener("click", (event) => {
    event.preventDefault();

    const emailValid = emailalert.textContent.includes("Valid Email");
    const passwordValid = passwordalert.textContent.includes("Strong Password");
    const confirmValid = confirmpassword.value === password.value && passwordValid;
    const dobValid = dateofbirthalert.textContent.includes("Valid age");
    const countryValid = country.value !== "Select";
    const stateValid = state.value !== "Select";
    const genderValid = Gender.value.trim() !== "";
    const addressValid = Address.value.trim() !== "";
    const usernameValid = username.value.trim() !== "";
    const phoneValid = validatePhoneNumber();

    if (!emailValid 
        || !passwordValid
        || !confirmValid
        || !dobValid 
        || !countryValid 
        || !stateValid 
        || !genderValid 
        || !addressValid 
        || !usernameValid 
        || !phoneValid) {
        window.alert("Please make sure all fields are filled correctly before registering");
    } else {
        window.alert("Registration Successful! You can now Login");
        window.location.href = "Login.html";
    }
});

tologin.addEventListener("click", (event) => {
    event.preventDefault();

    window.location.href = "Login.html"
});

