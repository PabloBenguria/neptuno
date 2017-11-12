'use strict'

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('cliente', {
    idcliente: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombreempresa: {
      type: DataTypes.STRING,
      required: true
    },
    nombrecontacto: {
      type: DataTypes.STRING,
      required: true
    },
    direccion: {
      type: DataTypes.STRING,
      required: true
    },
    ciudad: {
      type: DataTypes.STRING,
      required: true
    },
    codigopostal: {
      type: DataTypes.STRING,
      required: true
    },
    pais: {
      type: DataTypes.STRING,
      required: true
    },
    telefono: {
      type: DataTypes.INTEGER,
      required: true
    },
    avatar: {
      type: DataTypes.STRING,
      required: true,
      defaultValue: 'default.png'
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE, 
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Cliente;
};