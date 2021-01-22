/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showCategories() {
  document.getElementById("container").classList.toggle("show");
}
function showSecondryMenue(value) {
  console.log(value);
  switch (value) {
    case "Primary School": {
      document.getElementById("primary-links").style.display = "flex";
      document.getElementById("secondary-school-links").style.display = "none";
      document.getElementById("high-school-links").style.display = "none";
      break;
    }
    case "Secondary School": {
      document.getElementById("secondary-school-links").style.display = "flex";
      document.getElementById("primary-links").style.display = "none";
      document.getElementById("high-school-links").style.display = "none";
      break;
    }
    case "High School": {
      document.getElementById("high-school-links").style.display = "flex";
      document.getElementById("primary-links").style.display = "none";
      document.getElementById("secondary-school-links").style.display = "none";
      break;
    }
    default:
      false;
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".categoriesbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
