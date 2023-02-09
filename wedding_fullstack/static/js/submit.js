(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                var name_arr = $("input[id=guest_name_input]")
                    .map(function () {
                        return this.value;
                    })
                    .get();

                var age_arr = $("select[id=guest_age_input]")
                    .map(function () {
                        return this.value;
                    })
                    .get();

                const guests = [];
                name_arr.forEach((name, index) => {
                    const guest = {};
                    guest["name"] = name;
                    guest["age"] = age_arr[index];
                    guests.push(guest);
                });
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    $.ajax({
                        type: "POST",
                        url: "/submit_form",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        cache: false,
                        async: false,
                        headers: {"cache-control": "no-cache"},
                        data: JSON.stringify({
                            name: $("#name_input").val(),
                            email: $("#email_input").val(),
                            comment: $("#comment_input").val(),
                            is_join: $("#join_toggle").prop("checked"),
                            is_shuttle: $("#shuttle_toggle").prop("checked"),
                            is_food: $("#food_toggle").prop("checked"),
                            is_hotel: $("#hotel_toggle").prop("checked"),
                            shuttle_num: $("#shuttle_num").val(),
                            food_comment: $("#food_comment").val(),
                            hotel_num: $("#hotel_num").val(),
                            guests: guests,
                        }),
                        success: function (response) {
                            console.log("Success!");
                        },
                    });
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();