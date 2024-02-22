module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        dni: { type: DataTypes.STRING(12), allowNull: false },
        nombre: { type: DataTypes.STRING(200), allowNull: false },
        apellido: { type: DataTypes.STRING(150), allowNull: false },
        email: { type: DataTypes.STRING(250), allowNull: false },
        telefono: { type: DataTypes.STRING(100), allowNull: false },
        linkedin: { type: DataTypes.STRING(600), allowNull: false },
        fecha_nac: { type: DataTypes.DATE, allowNull: false },
        sexo: { type: DataTypes.STRING(50), allowNull: false },
        imagen: { type: DataTypes.STRING(200), allowNull: false },
        profesion_id: { type: DataTypes.INTEGER, allowNull: false },
    };

    const config = {
        tableName: "aspirantes",
        timestamps: false,
    };

    const Aspirante = sequelize.define("Aspirantes", cols, config);

    Aspirante.associate = function (models) {
        Aspirante.hasMany(models.Profesiones, {
            as: "profesion_aspirantes",
            foreignKey: "profesion_id",
        });
    };

    return Aspirante;
};
