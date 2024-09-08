/* =================== Typing Animation ====== */
var typed = new Typed(".typing", {
  strings: ["Web Designer  !", "WordPress Developer  !!", "Digital Marketer  !!!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* =================== Aside ====== */
function setupNavigation() {
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
      // Remove "back-section" and "active" classes from all sections and nav links
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active", "back-section");
      }

      for (let R = 0; R < totalNavList; R++) {
        if (navList[R].querySelector("a").classList.contains("active")) {
          allSection[R].classList.add("back-section");
        }
        navList[R].querySelector("a").classList.remove("active");
      }

      // Add "active" class to the clicked link and corresponding section
      this.classList.add("active");
      showSection(this);

      // Collapse the aside menu if the screen width is less than 1200px
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    });
  }

  function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector("#" + target);

    if (targetSection) {
      // Remove "active" class from all sections
      allSection.forEach((section) => section.classList.remove("active"));
      // Add "active" and "back-section" classes to the targeted section
      targetSection.classList.add("active", "back-section");
    }
  }

  function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];

    for (let i = 0; i < totalNavList; i++) {
      const navLink = navList[i].querySelector("a");
      navLink.classList.remove("active");

      if (target === navLink.getAttribute("href").split("#")[1]) {
        navLink.classList.add("active");
      }
    }
  }

  const hireMeBtn = document.querySelector(".hire-me");
  if (hireMeBtn) {
    hireMeBtn.addEventListener("click", function () {
      showSection(this);
      updateNav(this);
    });
  }

  // Navbar Responsive area
  const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });

  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  }
}

setupNavigation();
