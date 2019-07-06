// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // event listener on submit
    $(".burger-form").on("submit", function (event) {
        event.preventDefault();

        // store user input
        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        // route user input to post route to post to database
        $.post("/api/burgers", newBurger, function (data) {
            console.log(data);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // event listener on click on devour button
    $(".devour").on("click", function () {
        // store data attribute into variable
        var id = $(this).data("id")

        // route user input to put route to update database
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(function () {
            console.log(id);
            // Reload the page to get the updated list
            location.reload();
        });

    });

    // event listener on click on undevour button
    $(".undevour").on("click", function () {
        // store data attribute into variable
        var id = $(this).data("id")

        // route user input to put route to update database
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: false }
        }).then(function () {
            console.log(id);
            // Reload the page to get the updated list
            location.reload();
        });

    });

});