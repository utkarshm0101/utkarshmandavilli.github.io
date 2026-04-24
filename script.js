// PDF Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    const closeBtn = document.querySelector('.close');
    const linkBtns = document.querySelectorAll('.link-btn');

    // Open PDF in modal when link is clicked
    linkBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pdfUrl = this.getAttribute('href');
            pdfFrame.src = pdfUrl;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        pdfFrame.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            pdfFrame.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});