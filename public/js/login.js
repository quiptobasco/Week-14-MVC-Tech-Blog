async function loginFormHandler(event) {
    // don't refresh page when submitting info
    event.preventDefault();

    // get data from webpage
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // if both an email and password supplied
    if (email && password) {
        // post data to DB
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            let result = await response.json()
            alert(result.message)
        }
    }
};

// event listener for button click
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);