
var db = require('../models')

// Create all our routes and set up logic within those routes where required.
// get route using defined sql functions from model to select all burgers data

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({})
            .then(function (data) {
                var hbsBurger = {
                    burgers: data
                };
                console.log(hbsBurger);
                // render to templating engine
                res.render("index", hbsBurger);
            });
    });


    // post route using defined sql functions from model to insert new burgers data
    app.post("/api/burgers", function (req, res) {
        // insert submitted data from the client into the burger_name column
        db.Burger.create(req.body).then(function (result) {
            // Send back the ID of the new burger
            res.json(result);
            console.log(result);
        });
    });

    // put route using defined sql functions from model to update existing burgers data
    app.put("/api/burgers/:id", function (req, res) {

        db.Burger.update(
            {
                devoured: req.body.devoured
            },
            {
                where: { id: req.params.id }
            }).then(
                function (result) {
                    if (result.changedRows === 0) {
                        // If no rows were changed, then the ID must not exist, so 404
                        return res.status(404).end();
                    }
                    res.status(200).end();
                    res.json(result);
                }
            );
    });

};

