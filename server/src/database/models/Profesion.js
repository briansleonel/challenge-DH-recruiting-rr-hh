module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: { type: DataTypes.STRING(250), allowNull: false },
    };

    const config = {
        tableName: "profesiones",
        timestamps: false,
    };

    const Profesion = sequelize.define("Profesiones", cols, config);

    return Profesion;
};
