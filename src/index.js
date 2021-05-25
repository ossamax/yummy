const yummyMenu = document.querySelector(".dots_menu_icon");
const closeIcon = document.querySelector(".right_close_img");
const dotsIcon = document.querySelector(".dots_img");

const yummyWrapper = document.querySelector(".yummy_wrapper");

yummyMenu.addEventListener("click", () => {
  if (yummyWrapper.classList.contains("active")) {
    yummyWrapper.classList.remove("active");
    closeIcon.classList.remove("active");
    dotsIcon.classList.remove("disactive");
  } else {
    yummyWrapper.classList.add("active");
    closeIcon.classList.add("active");
    dotsIcon.classList.add("disactive");

    main_nav_links.classList.remove("active");
    closeIconLeft.classList.remove("active");
    barsIcon.classList.remove("disactive");
  }
});

//main navigation icons vars
const burgerMenuIcon = document.querySelector(".burger_menu_icon");
const closeIconLeft = document.querySelector(".left_close_img");
const barsIcon = document.querySelector(".bars_img");
const main_nav_links = document.querySelector(".main_nav_links");

burgerMenuIcon.addEventListener("click", () => {
  if (main_nav_links.classList.contains("active")) {
    main_nav_links.classList.remove("active");
    closeIconLeft.classList.remove("active");
    barsIcon.classList.remove("disactive");
  } else {
    main_nav_links.classList.add("active");
    closeIconLeft.classList.add("active");
    barsIcon.classList.add("disactive");

    yummyWrapper.classList.remove("active");
    closeIcon.classList.remove("active");
    dotsIcon.classList.remove("disactive");
  }
});

//remove nav classes

function hideNav() {
  yummyWrapper.classList.remove("active");
  closeIcon.classList.remove("active");
  dotsIcon.classList.remove("disactive");
  //
  main_nav_links.classList.remove("active");
  closeIconLeft.classList.remove("active");
  barsIcon.classList.remove("disactive");
}

//nav links
const links = document.querySelectorAll(".link");

links.forEach((item) => {
  item.addEventListener("click", () => {
    hideNav();
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
