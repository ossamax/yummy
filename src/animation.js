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

gsap.to(".testemonial", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".testemonial",
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event_name",
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(".event_name", { rotateZ: 360, opacity: 1 }, 0);

gsap.to(".map_wrapper", {
  opacity: 1,
  x: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".map_wrapper",
  },
});
gsap.to(".contact_form", {
  opacity: 1,
  x: 0,
  duration: .7,
  scrollTrigger: {
    trigger: ".contact_form",
  },
});
