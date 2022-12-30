'use strict';

/**
 * name controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::name.name');
