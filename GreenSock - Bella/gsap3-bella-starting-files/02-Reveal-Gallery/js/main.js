gsap.registerPlugin(ScrollTrigger);

function initHoverReveal() {

    const sections = document.querySelectorAll('.rg__column');
    sections.forEach(section => {
        
        // obtenir des composants pour l'animation
        section.imageBlock = section.querySelector('.rg__image');
        section.mask = section.querySelector('.rg__image--mask');
        section.text = section.querySelector('.rg__text');
        section.textHeight = section.querySelector('.rg__text--copy');

        // réinitialiser la position initiale
        gsap.set(section.imageBlock, {yPercent: -101});
        gsap.set(section.mask, {yPercent: 100});

        // ajouter des écouteurs d'événement à chaque section
        section.addEventListener('mouseenter', createHoverReveal)
        section.addEventListener('mouseleave', createHoverReveal)
    });
}

function getTextHeight(textHeight) {
    return textHeight.clientHeight;
}

function createHoverReveal({type, target}){
    
    const {imageBlock, mask, text, textHeight} = target;

    let tl = gsap.timeline({
        defaults: {
            duration: .7,
            ease: 'Power4.out'
        }
    });
    
    if(type === 'mouseenter') {

        tl
        .to([mask, imageBlock], {yPercent: 0})
        .to(text, {y: () => -getTextHeight(textHeight)/2})

    }else if(type === 'mouseleave') {

        tl
        .to(imageBlock, {yPercent: -101})
        .to(mask, {yPercent: 100}, 0)
        .to(text, {y: 0})
    }

    return tl;
}

function init(){
    
    initHoverReveal();

}

window.addEventListener('load', function(){
    init();
});
