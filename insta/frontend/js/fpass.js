function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const email = document.getElementById("email").value;
    
    // Basic email validation (you can expand this)
    if (!validateEmail(email)) {
        document.getElementById("statusMessage").innerText = "Please enter a valid email address.";
        document.getElementById("statusMessage").style.color = "red";
        return;
    }
    
    // Simulate sending reset link (in a real app, you'll send this to the server)
    resetPassword(email);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetPassword(email) {
    // Simulate a backend call to send a password reset email
    setTimeout(() => {
        document.getElementById("statusMessage").innerText = "Password reset link has been sent to " + email;
        document.getElementById("statusMessage").style.color = "green";
        document.getElementById("forgotPasswordForm").reset();
    }, 1500);
}