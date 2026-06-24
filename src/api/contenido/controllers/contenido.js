'use strict';

/**
 *  contenido controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contenido.contenido', ({ strapi }) => ({
  // Devuelve los contenidos que el usuario logueado puede ver:
  //  - los asignados directamente (relación users), y
  //  - los marcados "paraSocios" si es socio, o "paraAlumnos" si es alumno.
  // socio = tiene el contenido "Socio"; alumno = tiene alguna clase (tipo clase_anio).
  async miCampus(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized();

    const data = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      user.id,
      { populate: { contenidos: { populate: ['materias'] } } }
    );
    const propios = (data && data.contenidos) || [];

    const esSocio = propios.some((c) => c.flagLegacy === 'esSocio');
    const esAlumno = propios.some((c) => c.tipo === 'clase_anio');

    const orFiltros = [];
    if (esSocio) orFiltros.push({ paraSocios: true });
    if (esAlumno) orFiltros.push({ paraAlumnos: true });

    let porAudiencia = [];
    if (orFiltros.length) {
      porAudiencia = await strapi.entityService.findMany('api::contenido.contenido', {
        filters: { $or: orFiltros },
        populate: ['materias'],
        limit: -1,
      });
    }

    // Unir y deduplicar por id (un contenido directo + por audiencia no se repite).
    const porId = new Map();
    for (const c of [...propios, ...porAudiencia]) porId.set(c.id, c);

    return { contenidos: [...porId.values()] };
  },
}));
