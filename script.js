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
    // Add stagger animation to team membersA
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
