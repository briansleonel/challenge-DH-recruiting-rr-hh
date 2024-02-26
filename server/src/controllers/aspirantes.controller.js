const db = require("../database/models");
const url = require("../config/url.public");

const aspirantesController = {
    list: (_req, res) => {
        db.Aspirantes.findAll({
            include: [{ association: "profesion" }],
        })
            .then((aspirantes) => {
                // mapeo el resultado de aspirantes
                const aspirantesMap = aspirantes.map((aspirante) => ({
                    id: aspirante.id,
                    dni: aspirante.dni,
                    nombre: aspirante.nombre,
                    apellido: aspirante.apellido,
                    email: aspirante.email,
                    telefono: aspirante.telefono,
                    linkedin: aspirante.linkedin,
                    fecha_nac: aspirante.fecha_nac,
                    sexo: aspirante.sexo,
                    profesion: aspirante.profesion,
                    imagen: `${url.URL_PUBLIC_IMAGES_ASPIRANTES}/${aspirante.imagen}`,
                }));

                // envío el resultado al cliente
                return res.json({
                    status: 200,
                    data: aspirantesMap,
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
