'use strict';

// Ruta custom: contenidos del usuario logueado. Requiere permiso del rol
// authenticated (se otorga en el bootstrap de src/index.js).
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mi-campus',
      handler: 'contenido.miCampus',
    },
  ],
};
