const hamMenu = document.querySelector(".hamburger-menu")
const activeMenu = document.querySelector(".header-nav")
const modal = document.querySelector(".modal")

hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("active")
  activeMenu.classList.toggle("active")
  modal.classList.toggle("active")

})