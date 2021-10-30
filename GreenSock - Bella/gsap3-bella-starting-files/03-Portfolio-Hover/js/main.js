gsap.registerPlugin(ScrollTrigger);

// créer un effet de survol pour chaque élément de navigation du portfolio
const allLinks = gsap.utils.toArray('.portfolio__categories a');
const pageBackground = document.querySelector('.fill-background');
const largeImage = document.querySelector('.portfolio__image--l');
const smallImage = document.querySelector('.portfolio__image--s');
const lInside = document.querySelector('.portfolio__image--l .image_inside');
const sInside = document.querySelector('.portfolio__image--s .image_inside');

function initPortfolioHover() {
    allLinks.forEach( link => {
        link.addEventListener('mouseenter', createPortfolioHover)
        link.addEventListener('mouseleave', createPortfolioHover)
        link.addEventListener('mousemove', createPortfolioMove)
    });
}

function createPortfolioHover({type, target}) {

    if(type === 'mouseenter') {
        // change images to the right urls 
        // fade in images 
        // all siblings to while and fade out
        // active link to white
        // update page background color

        const {color, imagelarge, imagesmall} = target.dataset;
        const allSiblings = allLinks.filter( link => link !== target);
        const tl = gsap.timeline();

        tl
        .set(lInside, { backgroundImage : `url(${imagelarge})`})
        .set(sInside, { backgroundImage : `url(${imagesmall})`})
        .to([largeImage, smallImage], { autoAlpha: 1})
        .to(allSiblings, { color: '#fff', autoAlpha: 0.2}, 0)
        .to(target, { color: '#fff', autoAlpha: 1}, 0)
        .to(pageBackground, {backgroundColor: color, ease: 'none'}, 0)

    } else if(type === 'mouseleave') {
        // fondu des images
        // tous les liens dos à dos
        // changer la couleur d'arrière-plan noire par défaut #ACB7AE

        const tl = gsap.timeline();
        tl
        .to([largeImage, smallImage], {autoAlpha: 0})
        .to(allLinks, {color: '#000', autoAlpha: 1}, 0)
        .to(pageBackground, { backgroundColor: '#ACB7AE', ease: 'none'}, 0)
    }
}

function createPortfolioMove({clientY}) {

    gsap.to(largeImage, {
        duration: 1.2,
        y: getPortfolioOffset(clientY)/6,
        x: -getPortfolioOffset(clientY)/10,
        ease: 'Power3.inOut'
    })

    gsap.to(smallImage, {
        duration: 1.5,
        y: -getPortfolioOffset(clientY)/3,
        x: -getPortfolioOffset(clientY)/10,
        ease: 'Power3.inOut'
    })
}

function getPortfolioOffset(clientY) {
    return -(document.querySelector('.portfolio__categories').clientHeight - clientY);
}

function init(){
    
    // start here
    initPortfolioHover()

}

window.addEventListener('load', function(){
    init();
});
