const db = require("../database/models");

const aspirantesController = {
    list: (req, res) => {
        db.Aspirantes.findAll({
            include: [{ association: "profesion_aspirantes" }],
        })
            .then((aspirantes) => {
                return res.json({
                    status: 200,
                    data: aspirantes,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.json({
                    status: 400,
                    message: err,
                });
            });
    },
};

module.exports = aspirantesController;
