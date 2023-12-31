document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const bannerBottom = sections[0].getBoundingClientRect().bottom;

        if (scrollPosition >= bannerBottom) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth', // 平滑滾動
                    duration: 2000
                });
            }
        });
    });
});