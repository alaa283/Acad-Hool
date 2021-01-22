let privacyBtn = document.getElementById("privacy-btn"),
  termsBtn = document.getElementById("terms-btn"),
  privacyIframe = document.getElementById("privacy-iframe"),
  termsIframe = document.getElementById("terms-iframe"),
  privacyContents = document.getElementById("privacy-contents"),
  termsContents = document.getElementById("terms-content");

privacyIframe.scrollTop = 444;
function showPrivacyHandler() {
  privacyBtn.classList.add("active-btn");
  termsBtn.classList.remove("active-btn");
  privacyIframe.classList.remove("hide");
  termsIframe.classList.add("hide");
  privacyContents.classList.remove("hide");
  termsContents.classList.add("hide");
}
function showTermsHandler() {
  privacyBtn.classList.remove("active-btn");
  termsBtn.classList.add("active-btn");
  privacyIframe.classList.add("hide");
  termsIframe.classList.remove("hide");
  privacyContents.classList.add("hide");
  termsContents.classList.remove("hide");
}
privacyBtn.addEventListener("click", showPrivacyHandler);
termsBtn.addEventListener("click", showTermsHandler);

privacyIframe.onmouseenter = (event) => {
  console.log(event);
};
