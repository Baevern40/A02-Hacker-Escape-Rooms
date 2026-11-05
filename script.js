const hamMenu = document.querySelector(".hamburger-menu")
const activeMenu = document.querySelector("#nav-menu")

hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("active")
  activeMenu.classList.toggle("active")

})