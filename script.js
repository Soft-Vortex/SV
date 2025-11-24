// ASCII Vortex Background - Inward Spiral Animation
function createASCIIVortex() {
    const vortexContainer = document.getElementById('ascii-vortex');
    const chars = ['·', '•', '∘', '○', '◦', '●'];
    const maxRadius = 35;
    let animationOffset = 0;

    function generateVortexFrame(offset) {
        const lines = [];
        const centerY = maxRadius;
        const centerX = maxRadius;

        for (let y = 0; y < maxRadius * 2; y++) {
            let line = '';
            for (let x = 0; x < maxRadius * 2; x++) {
                const dx = x - centerX;
                const dy = y - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);

                if (distance < maxRadius && distance > 1) {
                    // Create inward spiral motion
                    const spiral = angle + (distance * 0.15) - offset;
                    const armCount = 3; // Number of spiral arms
                    const spiralArm = Math.sin(spiral * armCount) * Math.cos(distance * 0.15);

                    // Density increases toward center for inward pull effect
                    const centerPull = 1 - (distance / maxRadius);
                    const intensity = spiralArm * centerPull;

                    // Choose character based on intensity
                    if (intensity > 0.4) {
                        const charIndex = Math.floor(centerPull * (chars.length - 1));
                        line += chars[charIndex];
                    } else if (intensity > 0.2) {
                        line += chars[1];
                    } else if (intensity > 0) {
                        line += chars[0];
                    } else {
                        line += ' ';
                    }
                } else {
                    line += ' ';
                }
            }
            lines.push(line);
        }
        return lines.join('\n');
    }

    // Animate the vortex spiraling inward
    function animate() {
        animationOffset += 0.08; // Speed of inward spiral
        vortexContainer.textContent = generateVortexFrame(animationOffset);

        // Subtle pulsing opacity
        const pulse = 0.12 + Math.sin(animationOffset * 0.5) * 0.03;
        vortexContainer.style.opacity = pulse;

        requestAnimationFrame(animate);
    }

    animate();
}

// Download function
function download() {
    const url = 'https://files.catbox.moe/lfv1vr.nbt';
    window.open(url, '_blank');
}

// Smooth scroll behavior for anchor links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in sections
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ASCII vortex background
    createASCIIVortex();

    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Add stagger animation to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Add stagger animation to team members
    const teamMembers = document.querySelectorAll('.team-member-large');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            member.style.opacity = '1';
            member.style.transform = 'translateX(0)';
        }, 200 * index);
    });

    // Add subtle parallax effect to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        statCards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed / 100);
            card.style.transform = `translateY(${yPos}px)`;
        });
    });
});

// Video Modal Logic
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('demo-video');
let modalLink = document.getElementById('modal-project-link');
const closeModal = document.querySelector('.close-modal');

function openVideoModal(videoName, projectUrl) {
    if (!modal) return;

    // Set video source - assuming mp4 format based on typical web usage
    // User specified names: feather_demo and sv_kit_demo
    console.log('Opening modal for:', videoName, 'Link:', projectUrl);
    modalVideo.src = `${videoName}.mp4`;
    modalLink.href = projectUrl;

    // Remove old event listeners by cloning
    const newLink = modalLink.cloneNode(true);
    modalLink.parentNode.replaceChild(newLink, modalLink);

    // Add click listener to force navigation
    newLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Force navigating to:', projectUrl);
        window.location.href = projectUrl;
    });

    // Update reference
    modalLink = newLink; // Re-assign modalLink to the new element
    const currentLink = document.getElementById('modal-project-link'); // This line is redundant if modalLink is updated

    console.log('Modal link href set to:', modalLink.href);

    modal.style.display = 'flex';
    // Force reflow
    modal.offsetHeight;
    modal.classList.add('show');

    // Autoplay
    modalVideo.play().catch(e => console.log('Autoplay prevented:', e));
}

function closeVideoModal() {
    if (!modal) return;

    modal.classList.remove('show');
    modalVideo.pause();
    modalVideo.currentTime = 0;

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

if (closeModal) {
    closeModal.addEventListener('click', closeVideoModal);
}

if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
}
