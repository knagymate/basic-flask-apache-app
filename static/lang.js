var userLang = navigator.language || navigator.userLanguage;
if (userLang.includes("hu")) {
  document.getElementById("btn").value = "hu";
  translate("hu");
} else {
  document.getElementById("btn").value = "en";
  translate("en");
}

function translate(lang) {
  fetch("../static/lang.json")
    .then((response) => response.json())
    .then((json) =>
      document.querySelectorAll("[loc-key]").forEach((element) => {
        let key = element.getAttribute("loc-key");
        element.innerHTML = json[key][lang];
      })
    );
}

function btn_callback() {
  var btn = document.getElementById("btn");
  if (btn.value === "hu") {
    btn.value = "en";
  } else {
    btn.value = "hu";
  }
  translate(btn.value);
}
