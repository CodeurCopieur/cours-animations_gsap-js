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
                scrub: 1
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
        pinReparent: true
        //markers: true
    });

    const getVh = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.clientHeight || 0);
        return vh;
    }

    const updateBodyColor = (color) => {
        //gsap.to('.fill-background', { backgroundColor: color, ease: 'none'});
        document.documentElement.style.setProperty('--bcg-fill-color', color);  
    }


    gsap.utils.toArray('.stage').forEach( (stage, i) => {

        const navLinks = gsap.utils.toArray('.fixed-nav li');

        ScrollTrigger.create({
            trigger: stage,
            start: 'top center',
            end: ()=> `+=${stage.clientHeight+getVh()/10}`,
            toggleClass: {
                targets: navLinks[i],
                className: 'is-active'
            },
            //markers: true,
            onEnter: () => updateBodyColor(stage.dataset.color),
            onEnterBack: () => updateBodyColor(stage.dataset.color),
        })
    })
}

function initScrollTo() {

    gsap.utils.toArray('.fixed-nav a').forEach( link => {

        const target = link.getAttribute('href');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            gsap.to(window, {duration: 1.5, scrollTo: target, ease: 'Power2.out'});
        })
    })
}

function init(){
    
    initImageParallax();
    initPinSteps();
    initScrollTo();
}

window.addEventListener('load', function(){
    init();
});

let container = document.querySelector('#scroll-container');
let height;

function setHeight(){
    height = `${container.clientHeight}`;
    document.body.style.height = `${height}px`;
}

ScrollTrigger.addEventListener("refreshInit", setHeight);

gsap.to(container, {

    y: () => -(height - document.documentElement.clientHeight),
    ease:'none',
    scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        invalidateOnRefresh: true,
        markers: true
    }
})
