let counter = {
  value: 0
};

const loaderNumber = document.querySelector('.loader_number');

function updateLoaderText() {
  let progress = Math.round(counter.value)
  loaderNumber.textContent = progress;
}

let loaderDuration = 7;
let customEase = "M0,0 C0.11,0.494 0.241,0.372 0.398,0.472 0.546,0.566 0.524,0.776 0.708,0.854 0.788,0.887 0.889,0.941 1,1";

let tl = gsap.timeline({});
tl.to(counter, {
  onUpdate: updateLoaderText,
  value: 100,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});

tl.to(".loader_progress", {
  width: "100%",
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
}, 0);