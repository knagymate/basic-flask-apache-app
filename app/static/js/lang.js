function translate(lang) {
  fetch("../static/fixtures/lang.json")
    .then((response) => response.json())
    .then((json) =>
      document.querySelectorAll("[loc-key]").forEach((element) => {
        let key = element.getAttribute("loc-key");
        element.innerHTML = json[key][lang];
      })
    );
}

function lang_btn_callback() {
  var lang_btn = document.getElementById("lang_btn");
  if (lang_btn.value === "hu") {
    lang_btn.value = "en";
  } else {
    lang_btn.value = "hu";
  }
  $(".container").fadeOut(300, function () {
    translate(lang_btn.value);
    $(".container").fadeIn(300);
  });
}

$(document).ready(function () {
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang.includes("hu")) {
    document.getElementById("lang_btn").value = "hu";
    translate("hu");
  } else {
    document.getElementById("lang_btn").value = "en";
    translate("en");
  }
});
