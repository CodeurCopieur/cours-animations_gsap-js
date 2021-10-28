gsap.registerPlugin(ScrollTrigger);

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

/*function init(){
    initHoverReveal();
}

window.addEventListener('load', function(){
    init();
});*/


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