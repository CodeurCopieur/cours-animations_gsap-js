gsap.registerPlugin(ScrollTrigger);

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

function initLoader() {

    const tlLoaderIn = gsap.timeline({
        id: 'tlLoaderIn',
        defaults: {
            duration: 1.1,
            ease: 'power2.out'
        },
        onComplete: () => select('body').classList.remove('is-loading')
    });

    const loaderInner = select('.loader .inner');
    const image = select('.loader__image img');
    const mask = select('.loader__image--mask');
    const line1 = select('.loader__title--mask:nth-child(1) span');
    const line2 = select('.loader__title--mask:nth-child(2) span');
    const lines = selectAll('.loader__title--mask');
    const loader = select('.loader');
    const loaderContent = select('.loader__content');

    tlLoaderIn
        .from(loaderInner, {
            scaleY: 0,
            transformOrigin: 'bottom'
        }, .2)
        .addLabel('revealImage')
        .from(mask, {yPercent: 100}, 'revealImage-=.6')
        .from(image, {yPercent: -80}, 'revealImage-=.6')
        .from([line1, line2], {yPercent: 100, stagger: .1}, 'revealImage-=.4');
    
    const tlLoaderOut = gsap.timeline({
        id: 'tlLoaderOut',
        defaults: {
            duration: 1.2,
            ease: 'power2.inOut'
        },
        delay: 1
    });

    tlLoaderOut
        .to(lines, {yPercent: -500, stagger: .2}, 0)
        .to([loader, loaderContent], {yPercent: -100}, .2)
        .from('#main', {y: 150}, .2)


    const tlLoader = gsap.timeline();
    tlLoader
        .add(tlLoaderIn)
        .add(tlLoaderOut)

    //GSDevTools.create({paused:true})
}

function init(){
    
    initLoader();

}

window.addEventListener('load', function(){
    init();
});
