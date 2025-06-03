// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Dynamic year in footer
document.querySelector('footer p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Your Name. All rights reserved.`;

// Add project cards dynamically
const projectsGrid = document.querySelector('.projects-grid');
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of your first project. What technologies did you use? What problems did you solve?',
        image: 'https://via.placeholder.com/300x200',
        tags: ['JavaScript', 'React', 'Node.js'],
        links: {
            github: 'https://github.com/yourusername/project1',
            live: 'https://project1.example.com'
        }
    },
    {
        title: 'Project 2',
        description: 'Description of your second project. Highlight your role and the impact of the project.',
        image: 'https://via.placeholder.com/300x200',
        tags: ['Python', 'Django', 'PostgreSQL'],
        links: {
            github: 'https://github.com/yourusername/project2',
            live: 'https://project2.example.com'
        }
    },
    // Add more projects as needed
];

// Create and append project cards
if (projectsGrid) {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.links.github}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    <a href="${project.links.live}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Add additional styles for project cards
const style = document.createElement('style');
style.textContent = `
    .project-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: var(--transition);
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    }

    .project-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .project-content {
        padding: 1.5rem;
    }

    .project-content h3 {
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .tag {
        background: var(--accent-color);
        color: var(--primary-color);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
    }

    .project-links {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .project-links a {
        text-decoration: none;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: var(--transition);
    }

    .project-links a:hover {
        color: var(--secondary-color);
    }
`;

document.head.appendChild(style);