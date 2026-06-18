'use strict';

// ============================================================================
// Catálogo de clases — copiado VERBATIM de app.vue del frontend (useState).
// Cada materia es { nombre, id } donde id = carpeta de Vimeo.
// ============================================================================
const CURSO_BASE = [
  { materias: [
    { nombre: 'Doctrina', id: '9458567' },
    { nombre: 'Materia médica', id: '9486315' },
    { nombre: 'Semiología y Clínica repertorial', id: '9486376' },
    { nombre: 'Pensamiento Hahnemann y Paschero', id: '9486231' },
    { nombre: 'Clínica médica', id: '9486280' },
    { nombre: 'Veterinaria', id: '9458111' },
  ] },
  { materias: [
    { nombre: 'Doctrina', id: '9458582' },
    { nombre: 'Materia médica', id: '9486326' },
    { nombre: 'Semiología y Clínica repertorial', id: '9486393' },
    { nombre: 'Clínica médica', id: '9486294' },
  ] },
  { materias: [
    { nombre: 'Materia médica', id: '9486361' },
    { nombre: 'Semiología y Clínica repertorial', id: '9486412' },
    { nombre: 'Clínica médica dinámica miasmática', id: '9486207' },
    { nombre: 'Clínica médica', id: '9486302' },
  ] },
];

const CLASES_2023 = [
  { materias: [
    { nombre: 'Doctrina', id: '15801033' },
    { nombre: 'Materia médica', id: '15801054' },
    { nombre: 'Semiología', id: '15801041' },
    { nombre: 'Clínica médica', id: '15874209' },
    { nombre: 'Veterinaria', id: '15801019' },
  ] },
  { materias: [
    { nombre: 'Doctrina', id: '15801104' },
    { nombre: 'Materia médica', id: '15801111' },
    { nombre: 'Semiología', id: '15801106' },
    { nombre: 'Clínica médica', id: '15918630' },
    { nombre: 'Veterinaria', id: '15801095' },
  ] },
  { materias: [
    { nombre: 'Materia médica', id: '15800990' },
    { nombre: 'Semiología', id: '15800996' },
    { nombre: 'Clínica médica', id: '15890749' },
    { nombre: 'Doctrina', id: '15800998' },
  ] },
];

const CLASES_2024 = [
  { materias: [ // [0] Primer
    { nombre: 'Doctrina', id: '20474528' },
    { nombre: 'Dudas y compensatorias', id: '20662604' },
    { nombre: 'Materia médica', id: '20474556' },
    { nombre: 'Semiología', id: '20474574' },
    { nombre: 'Veterinaria', id: '20488747' },
  ] },
  { materias: [ // [1] Primero y Segundo
    { nombre: 'Clínica médica', id: '20474512' },
  ] },
  { materias: [ // [2] Segundo
    { nombre: 'Doctrina', id: '20475216' },
    { nombre: 'Dudas y compensatorias', id: '20662684' },
    { nombre: 'Materia médica', id: '20474654' },
    { nombre: 'Semiología', id: '20475222' },
    { nombre: 'Veterinaria', id: '20488744' },
  ] },
  { materias: [ // [3] Tercer
    { nombre: 'Materia médica', id: '20474617' },
    { nombre: 'Dudas y compensatorias', id: '20662698' },
    { nombre: 'Semiología', id: '20474629' },
    { nombre: 'Clínica médica', id: '20474635' },
    { nombre: 'Doctrina', id: '20474621' },
  ] },
  { materias: [ // [4] Todos los años
    { nombre: 'Ateneos', id: '20474519' },
  ] },
];

const CLASES_2025 = [
  { materias: [ // [0] Primer
    { nombre: 'Doctrina', id: '24832742' },
    { nombre: 'Materia médica', id: '24832760' },
    { nombre: 'Semiología y Clínica Repertorial', id: '24832746' },
    { nombre: 'Clínica médica', id: '24832750' },
    { nombre: 'Veterinaria', id: '24832763' },
  ] },
  { materias: [ // [1] Segundo
    { nombre: 'Doctrina', id: '24832772' },
    { nombre: 'Clínica médica', id: '24832779' },
    { nombre: 'Materia médica', id: '24832792' },
    { nombre: 'Semiología y Clínica Repertorial', id: '24832786' },
    { nombre: 'Veterinaria', id: '24832796' },
  ] },
  { materias: [ // [2] Tercer
    { nombre: 'Materia médica', id: '24832818' },
    { nombre: 'Semiología y Clínica Repertorial', id: '24832810' },
    { nombre: 'Clínica médica', id: '24832814' },
    { nombre: 'Doctrina', id: '24832809' },
  ] },
  { materias: [ // [3] Integración de cátedras
    { nombre: 'Clases', id: '24833043' },
  ] },
];

const CLASES_2026 = [
  { materias: [ // [0] Primer
    { nombre: 'Doctrina', id: '29035587' },
    { nombre: 'Materia médica', id: '29035590' },
    { nombre: 'Semiología y Clínica Repertorial', id: '29035596' },
    { nombre: 'Clínica médica', id: '29035595' },
    { nombre: 'Veterinaria', id: '29035598' },
  ] },
  { materias: [ // [1] Segundo
    { nombre: 'Doctrina', id: '29035574' },
    { nombre: 'Clínica médica', id: '29035577' },
    { nombre: 'Materia médica', id: '29035575' },
    { nombre: 'Semiología y Clínica Repertorial', id: '29035584' },
    { nombre: 'Veterinaria', id: '29035586' },
  ] },
  { materias: [ // [2] Tercer
    { nombre: 'Materia médica', id: '29035560' },
    { nombre: 'Semiología y Clínica Repertorial', id: '29035570' },
    { nombre: 'Clínica médica', id: '29035566' },
    { nombre: 'Doctrina', id: '29035555' },
  ] },
];

// Construye materias-de-clase (link a carpeta de Vimeo) con sus coordenadas de display.
// orden = cardOrden*100 + indice, para ordenar tarjetas y links de forma estable.
function clase(lista, { seccion, seccionOrden, nivelLabel, color, urlPrefijo, cardOrden }) {
  return lista.map((m, i) => ({
    nombre: m.nombre,
    vimeoFolderId: m.id,
    urlPrefijo,
    seccion,
    seccionOrden,
    nivelLabel,
    color,
    orden: cardOrden * 100 + i,
  }));
}

// Link directo (secciones tipo jornada/seminario): url ya armada.
function link({ nombre, url, seccion, seccionOrden, color, cardOrden }) {
  return { nombre, urlOverride: url, seccion, seccionOrden, color, orden: cardOrden * 100 };
}

// Combos compartidos de 2024/2025 (OR de varios flags). Se adjuntan a cada contenido
// que los habilita; el frontend deduplica por url dentro de cada tarjeta.
const COMBO_TODOS_2024 = clase(CLASES_2024[4].materias, { seccion: 'Clases 2024', seccionOrden: 3, nivelLabel: 'Todos los años', color: 'sugus', urlPrefijo: 'todos los años 2024', cardOrden: 5 });
const COMBO_INTEGRACION_2025 = clase(CLASES_2025[3].materias, { seccion: 'Clases 2025', seccionOrden: 2, nivelLabel: 'Integración de cátedras', color: 'sugus', urlPrefijo: 'todos los años 2024', cardOrden: 4 });
const COMBO_PRIMERO_SEGUNDO_2024 = clase(CLASES_2024[1].materias, { seccion: 'Clases 2024', seccionOrden: 3, nivelLabel: 'Primero y Segundo Año', color: 'crema', urlPrefijo: 'segundo 2024', cardOrden: 1 });

// ============================================================================
// Definición de los 21 contenidos (unidades de acceso) con sus materias.
// flagLegacy = nombre del ATRIBUTO del flag en el schema de User.
// ============================================================================
const CONTENIDOS = [
  // --- Curso de Homeopatía 2022 (requiere ser socio) ---
  { titulo: 'Curso homeopatía - 1er año', slug: 'curso-homeopatia-1er-anio', flagLegacy: 'acceso_1er_anio', tipo: 'curso', requiereSocio: true,
    materias: clase(CURSO_BASE[0].materias, { seccion: 'Curso de Homeopatía 2022', seccionOrden: 5, nivelLabel: 'Primer Año', color: 'verde', urlPrefijo: 'primero 2022', cardOrden: 0 }) },
  { titulo: 'Curso homeopatía - 2do año', slug: 'curso-homeopatia-2do-anio', flagLegacy: 'acceso_2do_anio', tipo: 'curso', requiereSocio: true,
    materias: clase(CURSO_BASE[1].materias, { seccion: 'Curso de Homeopatía 2022', seccionOrden: 5, nivelLabel: 'Segundo Año', color: 'crema', urlPrefijo: 'segundo 2022', cardOrden: 1 }) },
  { titulo: 'Curso homeopatía - 3er año', slug: 'curso-homeopatia-3er-anio', flagLegacy: 'acceso_3er_anio', tipo: 'curso', requiereSocio: true,
    materias: clase(CURSO_BASE[2].materias, { seccion: 'Curso de Homeopatía 2022', seccionOrden: 5, nivelLabel: 'Tercer Año', color: 'celeste', urlPrefijo: 'tercero 2022', cardOrden: 2 }) },

  // --- Clases 2023 ---
  { titulo: 'Clases 1er año 2023', slug: 'clases-1er-anio-2023', flagLegacy: 'acceso_1er_anio_2023', tipo: 'clase_anio', anio: '2023',
    materias: clase(CLASES_2023[0].materias, { seccion: 'Clases 2023', seccionOrden: 4, nivelLabel: 'Primer Año', color: 'verde', urlPrefijo: 'primero 2023', cardOrden: 0 }) },
  { titulo: 'Clases 2do año 2023', slug: 'clases-2do-anio-2023', flagLegacy: 'acceso_2do_anio_2023', tipo: 'clase_anio', anio: '2023',
    materias: clase(CLASES_2023[1].materias, { seccion: 'Clases 2023', seccionOrden: 4, nivelLabel: 'Segundo Año', color: 'crema', urlPrefijo: 'segundo 2023', cardOrden: 1 }) },
  { titulo: 'Clases 3er año 2023', slug: 'clases-3er-anio-2023', flagLegacy: 'acceso_3er_anio_2023', tipo: 'clase_anio', anio: '2023',
    materias: clase(CLASES_2023[2].materias, { seccion: 'Clases 2023', seccionOrden: 4, nivelLabel: 'Tercer Año', color: 'celeste', urlPrefijo: 'tercero 2023', cardOrden: 2 }) },

  // --- Clases 2024/2025/2026 (los flags _2024 se reusan para los 3 años) ---
  { titulo: 'Clases 1er año 2024', slug: 'clases-1er-anio-2024', flagLegacy: 'acceso_1er_anio_2024', tipo: 'clase_anio', anio: '2024',
    materias: [
      ...clase(CLASES_2026[0].materias, { seccion: 'Clases 2026', seccionOrden: 1, nivelLabel: 'Primer Año', color: 'verde', urlPrefijo: 'primero 2026', cardOrden: 0 }),
      ...clase(CLASES_2025[0].materias, { seccion: 'Clases 2025', seccionOrden: 2, nivelLabel: 'Primer Año', color: 'verde', urlPrefijo: 'primero 2025', cardOrden: 0 }),
      ...clase(CLASES_2024[0].materias, { seccion: 'Clases 2024', seccionOrden: 3, nivelLabel: 'Primer Año', color: 'verde', urlPrefijo: 'primero 2024', cardOrden: 0 }),
      ...COMBO_PRIMERO_SEGUNDO_2024, ...COMBO_TODOS_2024, ...COMBO_INTEGRACION_2025,
    ] },
  { titulo: 'Clases 2do año 2024', slug: 'clases-2do-anio-2024', flagLegacy: 'acceso_2do_anio_2024', tipo: 'clase_anio', anio: '2024',
    materias: [
      ...clase(CLASES_2026[1].materias, { seccion: 'Clases 2026', seccionOrden: 1, nivelLabel: 'Segundo Año', color: 'crema', urlPrefijo: 'segundo 2026', cardOrden: 1 }),
      ...clase(CLASES_2025[1].materias, { seccion: 'Clases 2025', seccionOrden: 2, nivelLabel: 'Segundo Año', color: 'crema', urlPrefijo: 'segundo 2025', cardOrden: 1 }),
      ...clase(CLASES_2024[2].materias, { seccion: 'Clases 2024', seccionOrden: 3, nivelLabel: 'Segundo Año', color: 'crema', urlPrefijo: 'segundo 2024', cardOrden: 2 }),
      ...COMBO_PRIMERO_SEGUNDO_2024, ...COMBO_TODOS_2024, ...COMBO_INTEGRACION_2025,
    ] },
  { titulo: 'Clases 3er año 2024', slug: 'clases-3er-anio-2024', flagLegacy: 'acceso_3er_anio_2024', tipo: 'clase_anio', anio: '2024',
    materias: [
      ...clase(CLASES_2026[2].materias, { seccion: 'Clases 2026', seccionOrden: 1, nivelLabel: 'Tercer Año', color: 'celeste', urlPrefijo: 'tercero 2026', cardOrden: 2 }),
      ...clase(CLASES_2025[2].materias, { seccion: 'Clases 2025', seccionOrden: 2, nivelLabel: 'Tercer Año', color: 'celeste', urlPrefijo: 'tercero 2025', cardOrden: 2 }),
      ...clase(CLASES_2024[3].materias, { seccion: 'Clases 2024', seccionOrden: 3, nivelLabel: 'Tercer Año', color: 'celeste', urlPrefijo: 'tercero 2024', cardOrden: 3 }),
      ...COMBO_TODOS_2024, ...COMBO_INTEGRACION_2025,
    ] },

  // --- Socio (sección Ateneos dinámica: la maneja el frontend, sin materias) ---
  { titulo: 'Socio', slug: 'socio', flagLegacy: 'esSocio', tipo: 'otro', materias: [] },

  // --- Secciones de link directo ---
  { titulo: 'Veterinaria', slug: 'veterinaria', flagLegacy: 'accesoVeterinaria', tipo: 'curso',
    materias: [ link({ nombre: 'Ver ateneos', url: '/ver-Ateneos-veteriaria-12229229', seccion: 'Ateneos de Veterinaria', seccionOrden: 7, color: 'veterinaria', cardOrden: 0 }) ] },
  { titulo: 'Curso online 2018', slug: 'curso-online-2018', flagLegacy: 'acceso_curso_online_2018', tipo: 'curso', anio: '2018',
    materias: [ link({ nombre: 'Ver clases', url: '/ver-Curso superior online-2018-15785285', seccion: 'Curso superior online 2018', seccionOrden: 8, color: 'veterinaria', cardOrden: 0 }) ] },
  { titulo: 'Premio Zalman Bronfman', slug: 'premio-zalman-bronfman', flagLegacy: 'acceso_premio_zalman_bronfman', tipo: 'otro',
    materias: [ link({ nombre: 'Ver ateneos', url: '/ver-Ateneos-bronfman-15785295', seccion: 'Premio Zalman Bronfman', seccionOrden: 9, color: 'veterinaria', cardOrden: 0 }) ] },
  { titulo: 'Clases magistrales Schaffer', slug: 'clases-magistrales-schaffer', flagLegacy: 'acesso_clases_magistrales_schaffer', tipo: 'seminario',
    materias: [ link({ nombre: 'Ver clases', url: '/ver-Ateneos-schaffer-15785278', seccion: 'Clases Magistrales Schaffer', seccionOrden: 10, color: 'veterinaria', cardOrden: 0 }) ] },
  { titulo: 'Seminario Krichesky', slug: 'seminario-krichesky', flagLegacy: 'acceso_seminario_krichesky', tipo: 'seminario',
    materias: [ link({ nombre: 'Ver clases', url: '/ver-Ateneos-krichesky-15785118', seccion: 'Seminario Krichesky', seccionOrden: 11, color: 'veterinaria', cardOrden: 0 }) ] },

  // --- Jornadas ---
  { titulo: 'Jornadas 30/09/2022', slug: 'jornadas-30-09-2022', flagLegacy: 'accesoJornadas30_09_2022', tipo: 'jornada', anio: '2022',
    materias: [ link({ nombre: 'Jornadas del 30 de septiembre', url: '/ver-Jornadas-30 de septiembre de 2022-12998619', seccion: 'Jornadas 2022', seccionOrden: 12, color: 'veterinaria', cardOrden: 0 }) ] },
  { titulo: 'Jornadas 01/10/2022', slug: 'jornadas-01-10-2022', flagLegacy: 'accesoJornadas01_10_2022', tipo: 'jornada', anio: '2022',
    materias: [ link({ nombre: 'Jornadas del 1 de octubre', url: '/ver-Jornadas-1 de octubre de 2022-12998667', seccion: 'Jornadas 2022', seccionOrden: 12, color: 'fondo-lindo-1', cardOrden: 1 }) ] },
  { titulo: '2das Jornadas Internacionales 2023', slug: 'jornadas-internacionales-2023', flagLegacy: 'acceso_2das_jornadas_internacionales_2023', tipo: 'jornada', anio: '2023',
    materias: [
      link({ nombre: 'Jornadas del 10 de noviembre', url: '/ver-Jornadas-10 de noviembre de 2023-18622904', seccion: 'Jornadas 2023', seccionOrden: 13, color: 'veterinaria', cardOrden: 0 }),
      link({ nombre: 'Jornadas del 11 de noviembre', url: '/ver-Jornadas-11 de noviembre de 2023-18623142', seccion: 'Jornadas 2023', seccionOrden: 13, color: 'fondo-lindo-1', cardOrden: 1 }),
    ] },
  { titulo: 'Jornadas 2024', slug: 'jornadas-2024', flagLegacy: 'acceso_jornadas_2024', tipo: 'jornada', anio: '2024',
    materias: [
      link({ nombre: 'Jornada del 29 de noviembre', url: '/ver-Jornadas-29 de noviembre de 2024-23145460', seccion: 'Jornadas 2024 FAMHA', seccionOrden: 14, color: 'veterinaria', cardOrden: 0 }),
      link({ nombre: 'Jornada del 30 de noviembre', url: '/ver-Jornadas-30 de noviembre de 2024-23145468', seccion: 'Jornadas 2024 FAMHA', seccionOrden: 14, color: 'fondo-lindo-1', cardOrden: 1 }),
    ] },
  { titulo: 'Jornadas 14 noviembre 2025', slug: 'jornadas-14-11-2025', flagLegacy: 'acceso_jornadas_14_noviembre_2025', tipo: 'jornada', anio: '2025',
    materias: [ link({ nombre: 'Jornadas del 14 de noviembre', url: '/ver-Jornadas-14 de noviembre de 2025-27316848', seccion: 'Jornadas 2025', seccionOrden: 15, color: 'veterinaria', cardOrden: 0 }) ] },
  { titulo: 'Jornadas 15 noviembre 2025', slug: 'jornadas-15-11-2025', flagLegacy: 'acceso_jornadas_15_noviembre_2025', tipo: 'jornada', anio: '2025',
    materias: [ link({ nombre: 'Jornadas del 15 de noviembre', url: '/ver-Jornadas-15 de noviembre de 2025-27323291', seccion: 'Jornadas 2025', seccionOrden: 15, color: 'fondo-lindo-1', cardOrden: 1 }) ] },
];

module.exports = {
  register(/*{ strapi }*/) {},

  /**
   * Fase 2 del refactor de permisos del campus.
   * Crea la colección Contenido (seed con materias) y migra los flags booleanos
   * de cada usuario a links many-to-many usuario<->contenido. NO toca los flags
   * viejos (la migración es reversible). Corre una sola vez gracias al guard.
   */
  async bootstrap({ strapi }) {
    const store = strapi.store({ type: 'plugin', name: 'campus' });

    // 0. Otorgar al rol "authenticated" el permiso para GET /api/mi-campus (idempotente).
    const rolAuth = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'authenticated' } });
    if (rolAuth) {
      const action = 'api::contenido.contenido.miCampus';
      const yaTiene = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action, role: rolAuth.id } });
      if (!yaTiene) {
        await strapi
          .query('plugin::users-permissions.permission')
          .create({ data: { action, role: rolAuth.id } });
        strapi.log.info('[campus] Permiso /mi-campus otorgado al rol authenticated');
      }
    }

    // 1. Seed del catálogo (idempotente: solo si todavía no hay contenidos).
    const total = await strapi.entityService.count('api::contenido.contenido');
    if (total === 0) {
      for (let i = 0; i < CONTENIDOS.length; i++) {
        await strapi.entityService.create('api::contenido.contenido', {
          data: { ...CONTENIDOS[i], orden: i },
        });
      }
      strapi.log.info(`[campus] Seed: ${CONTENIDOS.length} contenidos creados`);
    }

    // 2. Migración flags -> links many-to-many. Corre una sola vez.
    if (await store.get({ key: 'migracion_permisos_v1' })) {
      strapi.log.info('[campus] Migración de permisos ya hecha, se omite.');
      return;
    }

    const contenidos = await strapi.entityService.findMany('api::contenido.contenido', {
      fields: ['id', 'titulo', 'flagLegacy'],
      limit: -1,
    });

    const resumen = [];
    for (const c of contenidos) {
      if (!c.flagLegacy) continue;
      const usuarios = await strapi.entityService.findMany('plugin::users-permissions.user', {
        filters: { [c.flagLegacy]: true },
        fields: ['id'],
        limit: -1,
      });
      const ids = usuarios.map((u) => u.id);
      if (ids.length) {
        await strapi.entityService.update('api::contenido.contenido', c.id, {
          data: { users: ids },
        });
      }
      resumen.push(`  ${c.titulo} (${c.flagLegacy}): ${ids.length}`);
    }

    await store.set({ key: 'migracion_permisos_v1', value: true });
    strapi.log.info('[campus] Migración de permisos OK. Links por contenido:\n' + resumen.join('\n'));
  },
};
