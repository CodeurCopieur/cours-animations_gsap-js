gsap.registerPlugin(ScrollTrigger);

function initHoverReveal() {

    const sections = document.querySelectorAll('.rg__column');
    sections.forEach(section => {
        
        // obtenir des composants pour l'animation
        const imageBlock = section.querySelector('.rg__image');
        const mask = section.querySelector('.rg__image--mask');

        // réinitialiser la position initiale
        gsap.set(imageBlock, {yPercent: -101});
        gsap.set(mask, {yPercent: 100});

        // ajouter des écouteurs d'événement à chaque section
        section.addEventListener('mouseenter', createHoverReveal)
        section.addEventListener('mouseleave', createHoverReveal)
    });
}

function createHoverReveal(e){
    console.log(e.type);
}

function init(){
    
    initHoverReveal();

}

window.addEventListener('load', function(){
    init();
});
