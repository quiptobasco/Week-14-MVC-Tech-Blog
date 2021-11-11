async function deleteFormHandler(event) {
    // don't refresh page when submitting info
    event.preventDefault();
    
    // get data from webpage
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    // delete data from DB
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);