const usernameorEmail = document.getElementById("usernameoremail");
const password = document.getElementById("password");
const Login = document.getElementById("login");
const Register = document.getElementById("Register");

const usernameoremailalert = document.getElementById("usernameoremailalert");
const passwordalert= document.getElementById("passwordalert");


usernameorEmail.addEventListener("input", () =>{
     const value = usernameorEmail.value.trim();

    const isEmail =  
    value.includes("@") &&
    (value.endsWith("@gmail.com") || value.endsWith("@yahoo.com") || value.endsWith("@outlook.com"));
    const isUsername = /^[a-zA-Z0-9_]{3,15}$/.test(value);

    if (value === "") {
        usernameoremailalert.textContent = "Username or Email cannot be empty";
        usernameoremailalert.style.color = "red";
        usernameoremailalert.style.fontSize = "10px";
    } else if (isEmail) {
        usernameoremailalert.textContent = "Valid Email";
        usernameoremailalert.style.color = "green";
        usernameoremailalert.style.fontSize = "10px";
    }  else if (value.length < 8 || value.length > 15) {
        usernameoremailalert.textContent = "Username must be between 8 to 15 characters long";
        usernameoremailalert.style.color = "red";
        usernameoremailalert.style.fontSize = "10px";
    } else if (isUsername) {
        usernameoremailalert.textContent = "Valid Username";
        usernameoremailalert.style.color = "green";
        usernameoremailalert.style.fontSize = "10px";
    }else {
        usernameoremailalert.textContent = "Invalid Username or Email Address";
        usernameoremailalert.style.color = "red";
        usernameoremailalert.style.fontSize = "10px";
    }
});


function validatePassword() {
    const value = password.value;
    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSymbols = /[!@#$%^&*()_\-+?<>{}\[\];"'":.,/\\~]/.test(value);

    if (value.length < 8) {
        passwordalert.textContent = "Must be at least 8 characters";
        passwordalert.style.color = "red";
        passwordalert.style.fontSize = "10px";
    } else if (!hasLower || !hasUpper || !hasNumber || !hasSymbols) {
        passwordalert.textContent = "Must contain uppercase, lowercase, number & symbol";
        passwordalert.style.color = "red";
        passwordalert.style.fontSize = "10px";
    } else {
        passwordalert.textContent = "Valid Password";
        passwordalert.style.color = "green";
        passwordalert.style.fontSize = "10px";
    }
}
password.addEventListener("input", validatePassword);


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

Register.addEventListener("click", () =>{

    window.location.href = "Register.html";
})
Login.addEventListener("Click", () =>{
    window.location.href = "#"
})