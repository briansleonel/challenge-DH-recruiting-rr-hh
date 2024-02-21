const db = require("../database/models");

const profesionesController = {
    list: (req, res) => {
        db.Profesiones.findAll()
            .then((profesiones) => {
                return res.json({
                    status: 200,
                    data: profesiones,
                });
            })
            .catch((err) => {
                return res.json({
                    status: 400,
                    message: err,
                });
            });
    },
};

module.exports = profesionesController;
