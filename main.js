const d = document;
let menu = d.querySelector(".menuDeplegable")
console.log(menu)

d.addEventListener("click", e => {
  if (e.target.matches(".menuhamburguesa")) {
      menu.classList.add("activemenu")
  }
  if (e.target.matches(".btnclose")) {
  menu.classList.remove("activemenu")
  }
})