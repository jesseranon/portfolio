const PROJECT_SECTIONS = Array.from(document.querySelectorAll('.projects'));

window.addEventListener('DOMContentLoaded', e => {
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));

    const options = {
        root: document.querySelector('#observer'),
        threshold: 0.3,
        rootMargin: '0px 0px -60% 0px'
    }
    
    const navLinksObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.id;
                const targetLink = document.querySelector(`a[href="#${target}"]`);
                document.querySelector('.nav-link-active').classList.remove('nav-link-active');
                targetLink.classList.add('nav-link-active');
            }
        });
    }, options);

    PROJECT_SECTIONS.forEach(section => {
        navLinksObserver.observe(section);
    });
})