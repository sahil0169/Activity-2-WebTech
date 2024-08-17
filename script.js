document.getElementById('clubRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const studentName = document.getElementById('studentName').value;
    const birthDate = new Date(document.getElementById('studentBirthDate').value);
    const parentPhone = document.getElementById('parentPhone').value;
    const email = document.getElementById('email').value;
    const sessionPrice = parseInt(document.querySelector('input[name="session"]:checked').value);

    // Age Validation
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 5) {
        alert('Registration not allowed for students under 5 years old.');
        return;
    }

    // E-mail Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Phone Number Validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(parentPhone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Display the confirmation
    const confirmationDetails = `
        <p>Thank you for registering, ${studentName}.</p>
        <p>Total Amount: Rs. ${sessionPrice}</p>
        <p>Contact Information: ${parentPhone}</p>
    `;

    document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
    document.getElementById('confirmation').style.display = 'block';
});
