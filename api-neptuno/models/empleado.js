'use strict'

module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('empleado', {
    idempleado: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      required: true
    },
    apellidos: {
      type: DataTypes.STRING,
      required: true
    },
    cargo: {
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
    codpostal: {
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
  return Empleado;
};