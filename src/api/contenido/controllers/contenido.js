'use strict';

/**
 *  contenido controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contenido.contenido', ({ strapi }) => ({
  // Devuelve los contenidos del usuario logueado, con sus materias.
  // Reemplaza la lectura de flags booleanos del frontend.
  async miCampus(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized();

    const data = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      user.id,
      { populate: { contenidos: { populate: ['materias'] } } }
    );

    return { contenidos: (data && data.contenidos) || [] };
  },
}));
