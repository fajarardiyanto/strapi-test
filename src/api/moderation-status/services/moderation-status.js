'use strict';

/**
 * moderation-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::moderation-status.moderation-status');
