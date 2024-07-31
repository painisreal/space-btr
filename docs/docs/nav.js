// !nav bar toggle menu switch
var sidebar = document.getElementById("sidebar"); // ?side-menu-bar
// var closebtn = document.getElementById("close");
// var openbtn =  document.getElementById("nav-button");
function shownav() {
    
    sidebar.style.position = "absolute";
    sidebar.style.display = "block";
}
function closenav() {
  sidebar.style.display = "none";
}