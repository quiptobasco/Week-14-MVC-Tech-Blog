async function editFormHandler(event) {
    // don't refresh page when submitting info
    event.preventDefault();
    
    // get data from webpage
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    // edit data in DB
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// event listener for button click
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);