// Get the menu icon and the nav menu
const menuIcon = document.getElementById("menu-icon");
const resNav = document.querySelector(".resnav");

// Add click event listener to toggle the nav menu
menuIcon.addEventListener("click", () => {
  resNav.classList.toggle("nav-active");
});
