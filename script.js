document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // You can perform form validation and submit the data to the server here
    // For simplicity, I'm not including the validation and submission code in this example
  
    // Displaying the form data (you can remove this in your final implementation)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  });
  