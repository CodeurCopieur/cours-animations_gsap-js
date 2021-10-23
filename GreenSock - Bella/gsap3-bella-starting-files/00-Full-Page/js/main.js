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
        //markers: true,
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

function initHeaderTilt() {
    document.querySelector('header').addEventListener('mousemove', moveImages)
}

function moveImages(e){

    const {offsetX, offsetY, target} = e;
    const {clientWidth, clientHeight} = target;

    //console.log(offsetX, offsetY, clientWidth, clientHeight);
    // get 0 0 in the center
    const xPos = (offsetX/clientWidth) - .5;
    const yPos = (offsetY/clientHeight) - .5;
    const modifier = (i) => i*1.2+.5

    const leftImages = gsap.utils.toArray('.hg__left .hg__image');
    // move left 3 images
    leftImages.forEach((image, i) => {
        gsap.to(image, {
            duration: 1.2,
            x: xPos * 20 * modifier(i),
            y: yPos * 30 * modifier(i),
            rotationY: xPos*40,
            rotationX: yPos*10
        })
    });

}

function init(){
    initNavigation();
    initHeaderTilt();
}

window.addEventListener('load', function(){
    init();
});
