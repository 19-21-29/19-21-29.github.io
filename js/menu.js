var menu = document.getElementById("menulist");

console.log(window.innerWidth);
function togglemenu() {
  if (menu.style.display == "none") menu.style.display = "block";
  else menu.style.display = "none";
  if (window.innerWidth > "700px") menu.style.display = "block";
}
