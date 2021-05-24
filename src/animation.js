gsap.registerPlugin(ScrollTrigger);

//about us
gsap.to(".form_wrapper", {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about_form",
  },
});
gsap.to(".about_us_content", {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about_us_content",
  },
});
//show
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".facts_numbers",
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(".facts_numbers", { rotateZ: 360 }, 0);

gsap.to(".house_dishes", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".house_dishes",
  },
});
