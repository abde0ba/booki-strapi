'use strict';

/**
 * favorite-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-book.favorite-book');
