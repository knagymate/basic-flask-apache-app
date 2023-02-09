$(document).ready(function () {
});
$(function () {
    $("#join_toggle").change(function () {
        if ($(this).prop("checked")) {
            $("#send_section").fadeOut(function () {
                $("#send_section").fadeIn();
                $("#guests_section").fadeIn();
                $("#details_section").fadeIn();
            });
        } else {
            $("#guests_section").fadeOut();
            $("#details_section").fadeOut();
            $("#send_section").fadeOut();
            $("#send_section").fadeIn();
        }
    });
});
document.querySelector("#join_toggle").bootstrapToggle();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
    observer.observe(element);
});
$("#shuttle_question").hide();
$("#food_question").hide();
$("#hotel_question").hide();
$(function () {
    $("#shuttle_toggle").change(function () {
        if ($(this).prop("checked")) {
            $("#shuttle_question").fadeIn();
        } else {
            $("#shuttle_question").fadeOut();
        }
    });
});
$(function () {
    $("#food_toggle").change(function () {
        if ($(this).prop("checked")) {
            $("#food_question").fadeIn();
        } else {
            $("#food_question").fadeOut();
        }
    });
});
$(function () {
    $("#hotel_toggle").change(function () {
        if ($(this).prop("checked")) {
            $("#hotel_question").fadeIn();
        } else {
            $("#hotel_question").fadeOut();
        }
    });
});
document.querySelector("#shuttle_toggle").bootstrapToggle();
document.querySelector("#food_toggle").bootstrapToggle();
document.querySelector("#hotel_toggle").bootstrapToggle();