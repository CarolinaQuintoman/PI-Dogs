const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true, // es unico, no permite null
      allowNull: false, 
      defaultValue: DataTypes.UUIDV4,
  },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //que sea unico
  },
    heightMin:{
      type: DataTypes.STRING,
      allowNull: false,
  },
    heightMax:{
    type: DataTypes.STRING,
    allowNull: false,
  },
    weightMin:{
      type: DataTypes.STRING,
      allowNull: false
  },
    weightMax:{
      type: DataTypes.STRING,
      allowNull: false
  },
    life_span:{
      type: DataTypes.STRING,
      allowNull: true,
  },
  created: { 
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
  }, {timestamps: false, freezeTableName: true }); // creacion y modificacion fecha y hora.
};
