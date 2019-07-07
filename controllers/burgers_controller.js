
var db = require('../models')

// Create all our routes and set up logic within those routes where required.

module.exports = function (app) {

    // get route using defined sequelize orm functions to select all columns
    app.get("/", function (req, res) {
        db.Burger.findAll({})
            .then(function (data) {
                var hbsBurger = {
                    burgers: data
                };
                // render to templating engine
                res.render("index", hbsBurger);
            });
    });


    // post route using sequelize orm functions to insert new burgers data
    app.post("/api/burgers", function (req, res) {
        // insert submitted data from the client into the burger_name column
        db.Burger.create(req.body).then(function (result) {
            // return result in json
            res.json(result);
        });
    });

    // put route using sequelize orm functions to update existing burgers data
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

                    // return result in json
                    res.json(result);
                }
            );
    });

};

