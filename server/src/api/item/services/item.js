'use strict';

/**
 * item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::item.item');
