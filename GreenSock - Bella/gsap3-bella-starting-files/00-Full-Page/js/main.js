gsap.registerPlugin(ScrollTrigger);

function initNavigation() {

    // Navigation Links

    const mainNavLinks = gsap.utils.toArray('.main-nav a');

    mainNavLinks.forEach( link => {
        link.addEventListener('mouseleave', ({target}) => {
            
            // add class
            target.classList.add('animate-out');

            setTimeout(() => {
                // remove class
                target.classList.remove('animate-out');
            }, 300)
        })
    });

    // Navigation Toggle Class

    ScrollTrigger.create({
        markers: true,
        start: 100,
        toggleClass: {
            targets: 'body',
            className: 'has-scrolled'
        }
    })
}

function init(){
    
    initNavigation();

}

window.addEventListener('load', function(){
    init();
});
