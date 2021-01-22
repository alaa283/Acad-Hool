let trending = document.querySelector("#trending");
let popular = document.querySelector("#popular");
let recent = document.querySelector("#recent");
let trendinglink = document.querySelector("#trendinglink");
let popularlink = document.querySelector("#popularlink");
// let recentlink = document.querySelector("#recentlink");

trendinglink.addEventListener("click", function () {
  trendinglink.classList.add("visited");
  popularlink.classList.remove("visited");
  // recentlink.classList.remove("visited");
  trending.setAttribute("class", "visible");
  popular.setAttribute("class", "hidden");
  recent.setAttribute("class", "hidden");
});

popularlink.addEventListener("click", function () {
  trendinglink.classList.remove("visited");
  popularlink.classList.add("visited");
  // recentlink.classList.remove("visited");
  trending.setAttribute("class", "hidden");
  popular.setAttribute("class", "visible");
  recent.setAttribute("class", "hidden");
});
// recentlink.addEventListener("click", function () {
//   trendinglink.classList.remove("visited");
//   popularlink.classList.remove("visited");
//   recentlink.classList.add("visited");
//   trending.setAttribute("class", "hidden");
//   popular.setAttribute("class", "hidden");
//   recent.setAttribute("class", "visible");
// });
