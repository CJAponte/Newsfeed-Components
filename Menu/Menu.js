
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.

  menu[0].classList.toggle("menu--open")

}




// // Start Here: Create a reference to the ".menu" class
// const menu;
// // create a reference to the ".menu-button" class
// const menuButton;
// // Using your menuButton reference, add a click handler that calls toggleMenu

const menu = document.getElementsByClassName("menu")
const menuButton = document.getElementsByClassName("menu-button")


menuButton[0].addEventListener("click", toggleMenu)