(function () {
  /* ========= Preloader ======== */
  const preloader = document.querySelectorAll('#preloader')

  window.addEventListener('load', function () {
    if (preloader.length) {
      this.document.getElementById('preloader').style.display = 'none'
    }
  })

  /* ========= Add Box Shadow in Header on Scroll ======== */
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    if (window.scrollY > 0) {
      header.style.boxShadow = '0px 0px 30px 0px rgba(200, 208, 216, 0.30)'
    } else {
      header.style.boxShadow = 'none'
    }
  })

  /* ========= sidebar toggle ======== */
  const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
  const sidebarNav = document.querySelector(".sidebar-nav");
  const mainWrapper = document.querySelector(".main-wrapper");
  const menuToggleButton = document.querySelector("#menu-toggle");
  const menuToggleButtonIcon = document.querySelector("#menu-toggle i");
  const overlay = document.querySelector(".overlay");

  menuToggleButton.addEventListener("click", () => {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");

    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
        menuToggleButtonIcon.classList.remove("lni-chevron-left");
        menuToggleButtonIcon.classList.add("lni-menu");
      } else {
        menuToggleButtonIcon.classList.remove("lni-menu");
        menuToggleButtonIcon.classList.add("lni-chevron-left");
      }
    } else {
      if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
        menuToggleButtonIcon.classList.remove("lni-chevron-left");
        menuToggleButtonIcon.classList.add("lni-menu");
      }
    }
  });

  overlay.addEventListener("click", () => {
    sidebarNavWrapper.classList.remove("active");
    overlay.classList.remove("active");
    mainWrapper.classList.remove("active");
  });
})();

// Alerdi

const navbarLogo = document.querySelector('.navbar-logo'); 
const sidebarNav = document.querySelector('.sidebar-nav-wrapper');
const bigLogo = document.querySelector('.logo-big');
const smallLogo = document.querySelector('.logo-small');
const navspans = document.querySelectorAll('.sidebar-nav .nav .nav-link span');
const footspans = document.querySelectorAll('.sidebar-footer .nav-link span');
const sidebarnavLink = document.querySelectorAll('.sidebar-nav .nav .nav-link');

  sidebarNav.style.width = '80px'; 
  bigLogo.classList.add("hidden");
sidebarNav.addEventListener('mouseleave', () => {
  sidebarNav.style.width = '80px'; 
  bigLogo.classList.add("hidden");
  smallLogo.classList.remove("hidden");
  navspans.classList.add("hidden");
  footspans.classList.add("hidden");
  sidebarnavLink.style.width = '70px';
});

sidebarNav.addEventListener('mouseenter', () => {
  sidebarNav.style.width = '300px';
  bigLogo.classList.remove("hidden");
  smallLogo.classList.add("hidden");
  navspans.classList.remove("hidden");
  footspans.classList.remove("hidden");
  sidebarnavLink.style.width = '240px';
}); 
