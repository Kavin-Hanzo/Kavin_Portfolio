// Navigation functionality
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('active');
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Project modal functionality
const projectDetails = {
    project1: {
        title: "Methane Plume Detection",
        domain: "Vision-Transformer",
        description: "Developed a deep learning pipeline for detecting and segmenting methane plumes from satellite images, Analysed geospatial data for environmental monitoring. This model can be used to identify the methane plumes so that the mitigation of point sources are more effective and easier.",
        technologies: ["Python", "PyTorch", "OpenCV","Earth Engine","Gradio"],
        github: "https://github.com/Kavin-Hanzo/Ch4_Plume-detection"
    },
    project2: {
        title: "Real-Time Detection",
        domain: "YOLO",
        description: "Detecting the objects by processing the video frames from camera, Integrated IP camera streams for live inference and segmentation tasks. This system can be very useful in surveillance, can also be fine-tunned and reproudcible for certain set of objects.",
        technologies: ["Python", "Networks","OpenCV","Flask"],
        github: "https://github.com/Kavin-Hanzo/Detection-and-Segmentation"
    },
    project3: {
        title: "Soil Classification",
        domain: "ViT",
        description: "Automated soil classification by utilizing deep learning techniques. Given a soil sample image, the model predicts its type (e.g., sandy, clay, loamy, etc.).",
        technologies: ["Python", "Flask","PyTorch"],
        github: "https://github.com/Kavin-Hanzo/Soil_Cls"
    }
    // project4: {
    //     title: "Mobile App",
    //     domain: "Mobile Development",
    //     description: "A cross-platform mobile application designed for seamless user experience across iOS and Android devices. The app features offline functionality, push notifications, secure authentication, and integration with third-party APIs. Built with performance and user experience as top priorities.",
    //     technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Jest"],
    //     github: "https://github.com/yourusername/mobile-app"
    // }
};

function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <span class="project-domain" style="display: inline-block; margin-bottom: 1rem;">${project.domain}</span>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${project.description}</p>
        
        <h3 style="color: var(--accent-color); margin-bottom: 1rem;">Technologies Used</h3>
        <div class="skills-badges" style="margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `<span class="skill-badge">${tech}</span>`).join('')}
        </div>
        
        <div style="text-align: center;">
            <a href="${project.github}" target="_blank" style="display: inline-block; background: var(--accent-color); color: var(--primary-bg); padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: bold; transition: all 0.3s ease;">
                <i class="fab fa-github" style="margin-right: 0.5rem;"></i>
                View on GitHub
            </a>
        </div>
    `;
    
    document.getElementById('projectModal').style.display = 'block';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items and cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .award-card, .education-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Dynamic content updates (for easy modification)
const portfolioData = {
    personal: {
        name: "Sivakavin K E",
        role: "Student @ SASTRA",
        email: "kesivakavin@gmail.com",
        phone: "9443263299",
        location: "Tamil Nadu, India",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/sivakavin",
            github: "https://github.com/Kavin-Hanzo"
            // twitter: "https://twitter.com/yourusername",
            // website: "https://yourwebsite.com"
        }
    },
    summary: "A person interested in solving environmental and business problems using Machine Learning, Computer Vision, Data Science."
};

// Function to update personal information
function updatePersonalInfo(data) {
    document.querySelector('.hero h1').textContent = data.name;
    document.querySelector('.hero .role').textContent = data.role;
    // Add more updates as needed
}