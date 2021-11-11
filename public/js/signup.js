async function signupFormHandler(event) {
    // don't refresh page when submitting info    
    event.preventDefault();

    // get data from webpage
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // if a username, an email, and password supplied    
    if (username && email && password) {
        // post data to DB 
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// event listener for button click
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);