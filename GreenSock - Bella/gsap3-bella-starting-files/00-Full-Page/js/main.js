gsap.registerPlugin(ScrollTrigger);

function initNavigation() {

    // Navigation Links

    const mainNavLinks = gsap.utils.toArray('.main-nav a');
    const mainNavLinksRev = gsap.utils.toArray('.main-nav a').reverse();

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

    function navAnimation(direction) {
        console.log(direction);
        const scrolling = direction === 1;
        const links = scrolling ? mainNavLinks : mainNavLinksRev
        return gsap.to(links, {
            duration: .3, stagger: .05,
            autoAlpha: () => scrolling ? 0 : 1,
            y: () => scrolling ? 20 : 0,
            ease: 'Power4.out'
        })
    }

    ScrollTrigger.create({
        markers: true,
        start: 100,
        end: 'bottom bottom-=200',
        toggleClass: {
            targets: 'body',
            className: 'has-scrolled'
        },
        onEnter: ({direction}) => navAnimation(direction),
        onLeaveBack: ({direction}) => navAnimation(direction)
    })
}

function init(){
    
    initNavigation();

}

window.addEventListener('load', function(){
    init();
});
