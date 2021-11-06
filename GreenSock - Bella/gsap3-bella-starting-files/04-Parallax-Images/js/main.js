gsap.registerPlugin(ScrollTrigger);


function initImageParallax() {

    // selectionner toutes les sections
    gsap.utils.toArray('.with-parallax').forEach(section => {
        
        const image = section.querySelector('img');

        gsap.to(image, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                // markers: true,
                trigger: section,
                start: 'top bottom',
                scrub: true
            }
        })
    });
}

function initPinSteps() {
    ScrollTrigger.create({
        trigger: '.fixed-nav',
        start: 'top center',
        endTrigger: '#stage4',
        end: 'center center',
        pin: true,
        markers: true
    })
}

function init(){
    
    initImageParallax();
    initPinSteps();
}

window.addEventListener('load', function(){
    init();
});
