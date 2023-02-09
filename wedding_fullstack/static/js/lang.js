const json = (function () {
    let json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../../../static/fixtures/lang.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

function translate(lang) {
    document.querySelectorAll("[loc-key]").forEach((element) => {
        let key = element.getAttribute("loc-key");
        element.innerHTML = json[key][lang];
    });
}

function lang_btn_callback() {
    const lang_btn = document.getElementById("lang_btn");
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
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("hu")) {
        document.getElementById("lang_btn").value = "hu";
        translate("hu");
    } else {
        document.getElementById("lang_btn").value = "en";
        translate("en");
    }
});