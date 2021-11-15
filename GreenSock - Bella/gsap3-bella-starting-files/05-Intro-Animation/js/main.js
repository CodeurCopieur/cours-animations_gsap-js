gsap.registerPlugin(ScrollTrigger);

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

function initLoader() {

    const tlLoaderIn = gsap.timeline({
        id: 'tlLoaderIn',
        defaults: {
            duration: 1.1,
            ease: 'Power2.out'
        }
    });

    const loaderInner = select('.loader .inner');
    const image = select('.loader__image img');
    const mask = select('.loader__image--mask');
    const line1 = select('.loader__image--mask:nth-child(1) span');
    const line2 = select('.loader__image--mask:nth-child(2) span');

    tlLoaderIn
        .from(loaderInner, {
            scaleY: 0,
            transformOrigin: 'bottom'
        }, .2)
        .addLabel('revealImage')
        .from(mask, {yPercent: 100}, 'revealImage-=.6')
        .from(image, {yPercent: -50}, 'revealImage-=.6')

    GSDevTools.create({paused:true})
}

function init(){
    
    initLoader();

}

window.addEventListener('load', function(){
    init();
});
