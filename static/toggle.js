function btn_callback() {
  var t = document.getElementById("btn");
  if (t.value == "hu") {
    t.value = "en";
  } else {
    t.value = "hu";
  }
}
var userLang = navigator.language || navigator.userLanguage;
if (userLang.includes("hu")) {
  document.getElementById("btn").value = "hu";
} else {
  document.getElementById("btn").value = "en";
}
