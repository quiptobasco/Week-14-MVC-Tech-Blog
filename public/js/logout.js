async function logout() {
    // post data to db
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// event listener for button click
document.querySelector('#logout').addEventListener('click', logout);