gsap.registerPlugin(ScrollTrigger);

function initNavigation() {

    const mainNavLinks = gsap.utils.toArray('.main-nav a');

    console.log(mainNavLinks);

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

}

function init(){
    
    initNavigation();

}

window.addEventListener('load', function(){
    init();
});
