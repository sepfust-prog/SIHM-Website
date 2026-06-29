'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const pick = (value) => (typeof value === 'string' ? value.trim() : '');

module.exports = createCoreController('api::lead.lead', ({ strapi }) => ({
  async create(ctx) {
    const body = ctx.request.body?.data || ctx.request.body || {};
    const data = {
      firstName: pick(body.firstName),
      lastName: pick(body.lastName),
      phone: pick(body.phone),
      email: pick(body.email).toLowerCase(),
      city: pick(body.city),
      program: pick(body.program),
      message: pick(body.message),
      page: pick(body.page),
      source: pick(body.source) || 'website'
    };

    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'city'];
    const missingField = requiredFields.find((field) => !data[field]);

    if (missingField) {
      return ctx.badRequest(`${missingField} is required`);
    }

    const lead = await strapi.entityService.create('api::lead.lead', { data });
    const sanitizedLead = await this.sanitizeOutput(lead, ctx);

    return this.transformResponse(sanitizedLead);
  }
}));
