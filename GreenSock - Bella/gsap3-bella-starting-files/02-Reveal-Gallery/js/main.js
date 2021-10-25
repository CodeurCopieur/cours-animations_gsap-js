gsap.registerPlugin(ScrollTrigger);

function initHoverReveal() {

    const sections = document.querySelectorAll('.rg__column');
    sections.forEach(section => {
        
        // obtenir des composants pour l'animation
        section.imageBlock = section.querySelector('.rg__image');
        section.mask = section.querySelector('.rg__image--mask');

        // réinitialiser la position initiale
        gsap.set(section.imageBlock, {yPercent: -101});
        gsap.set(section.mask, {yPercent: 100});

        // ajouter des écouteurs d'événement à chaque section
        section.addEventListener('mouseenter', createHoverReveal)
        section.addEventListener('mouseleave', createHoverReveal)
    });
}

function createHoverReveal({type, target}){
    
    const {imageBlock, mask} = target;

    let tl = gsap.timeline({
        defaults: {
            duration: .7,
            ease: 'Power4.out'
        }
    });
    
    if(type === 'mouseenter') {

        tl.to([mask, imageBlock], {yPercent: 0})

    }else if(type === 'mouseleave') {

        tl
        .to(imageBlock, {yPercent: -101})
        .to(mask, {yPercent: 100}, 0)
    }

    return tl;
}

function init(){
    
    initHoverReveal();

}

window.addEventListener('load', function(){
    init();
});
