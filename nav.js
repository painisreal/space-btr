// !nav bar toggle menu switch
var sidebar = document.getElementById("sidebar"); // ?side-menu-bar
var closebtn = document.getElementById("close"); // ?"X"btn
var openbtn =  document.getElementById("nav-button");
function shownav() {
  sidebar.style.display = "flex";
}
function closenav() {
  sidebar.style.display = "none";
}