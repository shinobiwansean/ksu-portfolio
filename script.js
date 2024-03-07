// Add interactivity to navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.page').forEach(page => {
            if (page.getAttribute('id') === targetId) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add form submission functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Here you can add code to handle form submission, like sending an AJAX request or displaying a confirmation message.
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
