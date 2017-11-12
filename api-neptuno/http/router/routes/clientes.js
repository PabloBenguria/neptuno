'use strict';

module.exports = (app, db) => {
  
  // GET all clientes
  app.get('/clientes', (req, res) => {
    db.clientes.findAll()
      .then(clientes => {
        const response = {
          status: 'ok',
          data: clientes
        }
        res.json(response);
      });
  });

  // GET one cliente by id
  app.get('/clientes/:idcliente', (req, res) => {
    const idcliente = req.params.idcliente;
    db.clientes.find({
      where: {idcliente: idcliente}
    })
      .then(cliente => {
        res.json(cliente);
      });
  });

  // POST single cliente
  app.post('/clientes', (req, res) => {
    const nombreempresa = req.body.nombreempresa;
    const nombrecontacto = req.body.nombrecontacto;
    const direccion = req.body.direccion;
    const ciudad = req.body.ciudad;
    const codigopostal = req.body.codigopostal;
    const pais = req.body.pais;
    const telefono = req.body.telefono;
    db.clientes.create({
      nombreempresa: nombreempresa,
      nombrecontacto: nombrecontacto,
      direccion: direccion,
      ciudad: ciudad,
      codigopostal: codigopostal,
      pais: pais,
      telefono: telefono
    })
      .then(newCliente => {
        res.json(newCliente);
      })
  });

  // PUT single cliente
  app.put('/clientes/:idcliente', (req, res) => {
    const idcliente = req.params.idcliente;
    const nombreempresa = req.body.nombreempresa;
    const nombrecontacto = req.body.nombrecontacto;
    const direccion = req.body.direccion;
    const ciudad = req.body.ciudad;
    const codigopostal = req.body.codigopostal;
    const pais = req.body.pais;
    const telefono = req.body.telefono;
    db.clientes.update({
      nombreempresa: nombreempresa,
      nombrecontacto: nombrecontacto,
      direccion: direccion,
      ciudad: ciudad,
      codigopostal: codigopostal,
      pais: pais,
      telefono: telefono
    },{
      where: { idcliente: idcliente }
    })
      .then(updatedCliente => {
        res.send({
          message: 'Cliente actualizado!'
        });
      });
  });

  // DELETE single cliente
  app.delete('/clientes/:idcliente', (req, res) => {
    const idcliente = req.params.idcliente;
    db.clientes.update({
      deleted_at: new Date(),
    },{
      where: { idcliente: idcliente }
    })
      .then(deletedCliente => {
        res.json(deletedCliente);
      });
  });
};