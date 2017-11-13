'use strict';

module.exports = (app, db) => {
  
  // GET all empleados
  app.get('/empleados', (req, res) => {
    db.empleados.findAll()
      .then(empleados => {
        res.json(empleados);
      });
  });

  // GET one empleado by id
  app.get('/empleados/:idempleado', (req, res) => {
    const idempleado = req.params.idempleado;
    db.empleados.find({
      where: {idempleado: idempleado}
    })
      .then(empleado => {
        res.json(empleado);
      });
  });

  // POST single empleado
  app.post('/empleados', (req, res) => {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const cargo = req.body.cargo;
    const direccion = req.body.direccion;
    const ciudad = req.body.ciudad;
    const codpostal = req.body.codpostal;
    const pais = req.body.pais;
    const telefono = req.body.telefono;
    db.empleados.create({
      nombre: nombre,
      apellidos: apellidos,
      cargo: cargo,
      direccion: direccion,
      ciudad: ciudad,
      codpostal: codpostal,
      pais: pais,
      telefono: telefono
    })
      .then(newEmpleado => {
        res.json(newEmpleado);
      })
  });

  // PUT single empleado
  app.put('/empleados/:idempleado', (req, res) => {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const cargo = req.body.cargo;
    const direccion = req.body.direccion;
    const ciudad = req.body.ciudad;
    const codpostal = req.body.codpostal;
    const pais = req.body.pais;
    const telefono = req.body.telefono;
    db.empleados.update({
      nombre: nombre,
      apellidos: apellidos,
      cargo: cargo,
      direccion: direccion,
      ciudad: ciudad,
      codpostal: codpostal,
      pais: pais,
      telefono: telefono
    },{
      where: { idempleado: idempleado }
    })
      .then(updatedEmpleado => {
        res.send({
          message: 'Empleado actualizado!'
        });
      });
  });

  // DELETE single empleado
  app.delete('/empleados/:idempleado', (req, res) => {
    const idempleado = req.params.idempleado;
    db.empleados.update({
      deleted_at: new Date(),
    },{
      where: { idempleado: idempleado }
    })
      .then(deletedEmpleado => {
        res.json(deletedEmpleado);
      });
  });
};