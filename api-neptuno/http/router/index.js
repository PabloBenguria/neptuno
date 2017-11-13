'use strict'

const routes = [
  require('./routes/clientes'),
  require('./routes/empleados')
  /*require('./routes/categorias'),
  require('./routes/detallepedido'),
  require('./routes/empleados'),
  require('./routes/logistica'),
  require('./routes/pedidos'),
  require('./routes/productos'),
  require('./routes/proveedores')*/
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};