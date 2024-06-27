document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const projects = {
    'project1': {
        title: 'Project 1',
        description: 'Detailed description of project 1.'
    },
    'project2': {
        title: 'Project 2',
        description: 'Detailed description of project 2.'
    },
    'project3': {
        title: 'Project 3',
        description: 'Detailed description of project 3.'
    },
    'project4': {
        title: 'Project 4',
        description: 'Detailed description of project 4.'
    },
    'project5': {
        title: 'Project 5',
        description: 'Detailed description of project 5.'
    }
};

function openModal(projectId) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = projects[projectId].title;
    document.getElementById('modal-description').textContent = projects[projectId].description;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    alert('Thank you for your message!');
    document.getElementById('contact-form').reset();
});
