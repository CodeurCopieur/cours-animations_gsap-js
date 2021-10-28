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
    const rightImages = gsap.utils.toArray('.hg__right .hg__image');
    // move left 3 images
    leftImages.forEach((image, i) => {
        gsap.to(image, {
            duration: 1.2,
            x: xPos*20*modifier(i),
            y: yPos*30*modifier(i),
            rotationY: xPos*40,
            rotationX: yPos*10,
            ease: 'Power3.out'
        })
    });

    rightImages.forEach((image, i) => {
        gsap.to(image, {
            duration: 1.2,
            x: xPos*20*modifier(i),
            y: -yPos*30*modifier(i),
            rotationY: xPos*40,
            rotationX: yPos*10,
            ease: 'Power3.out'
        })
    });

    gsap.to('.decor__circle', {
        duration: 1.7,
        x: xPos*100,
        y: yPos*120,
        ease: 'Power4.out'
    })

}

function init(){
    initNavigation();
    initHeaderTilt();
}

window.addEventListener('load', function(){
    init();
});

const sections = document.querySelectorAll('.rg__column');

function initHoverReveal() {

    sections.forEach(section => {
        
        // obtenir des composants pour l'animation
        section.imageBlock = section.querySelector('.rg__image');
        section.image = section.querySelector('.rg__image img');
        section.mask = section.querySelector('.rg__image--mask');
        section.text = section.querySelector('.rg__text');
        section.textHeight = section.querySelector('.rg__text--copy');
        section.textMask = section.querySelector('.rg__text--mask');
        section.textP = section.querySelector('.rg__text--copy p');

        // réinitialiser la position initiale
        gsap.set([section.imageBlock, section.textMask], {yPercent: -101});
        gsap.set([section.mask, section.textP], {yPercent: 100});
        gsap.set(section.image, {scale: 1.2});

        // ajouter des écouteurs d'événement à chaque section
        section.addEventListener('mouseenter', createHoverReveal)
        section.addEventListener('mouseleave', createHoverReveal)
    });
}

function getTextHeight(textHeight) {
    return textHeight.clientHeight;
}

function createHoverReveal({type, target}){
    const {imageBlock, mask, text, textHeight, textMask, textP, image} = target;

    let tl = gsap.timeline({
        defaults: {
            duration: .7,
            ease: 'Power4.out'
        }
    });
    
    if(type === 'mouseenter') {

        tl
        .to([mask, imageBlock, textMask, textP], {yPercent: 0})
        .to(text, {y: () => -getTextHeight(textHeight)/2}, 0)
        .to(image, {duration: 1.1, scale: 1}, 0)

    }else if(type === 'mouseleave') {

        tl
        .to([mask, textP], {yPercent: 100})
        .to([imageBlock, textMask], {yPercent: -101}, 0)
        .to(text, {y: 0}, 0)
        .to(image, {scale: 1}, 0)
    }

    return tl;
}

// definir un breakpoint
const mq = window.matchMedia("(min-width: 768px)");

// ajouter un écouteur de changement à ce point d'arrêt
mq.addListener(handleWithChange);

// first page load
handleWithChange(mq);

// reinitialiser tous lespropriétés
function resetPros(elts) {
    //console.log(elts);

    // stop all tweens
    gsap.killTweensOf('*')

    if(elts.length){
        elts.forEach(el => {
            el && gsap.set(el, {clearProps: 'all'})
        });
    }
}

// changement de requête média
function handleWithChange(mq) {
    if(mq.matches) {
        initHoverReveal();
    } else {
        console.log('mobile');
        // supprimer un écouteur de changement pour chaque section
        sections.forEach(section => {
            section.removeEventListener('mouseenter', createHoverReveal);
            section.removeEventListener('mouseleave', createHoverReveal);

            const {imageBlock, mask, text, textHeight, textMask, textP, image} = section;

            resetPros([imageBlock, mask, text, textHeight, textMask, textP, image]);
        });
    }
}
