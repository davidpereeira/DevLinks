function ToggleMode() {
  /* button click */
  const html = document.documentElement

  html.classList.toggle("light")

  //  if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  //  } else {
  //  html.classList.add('light')
  //  }

  /* img profile */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/david-light.png")
  } else {
    img.setAttribute("src", "./assets/david-night.png")
  }

  /* Text profile */
  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "David bebendo água na garrafa pet, com o manto do peixão. Modo Light"
    )
  } else {
    img.setAttribute(
      "alt",
      "David bebendo água na garrafa pet, com o manto do peixão. Modo Night"
    )
  }
}
