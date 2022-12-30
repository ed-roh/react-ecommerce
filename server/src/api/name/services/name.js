'use strict';

/**
 * name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::name.name');
