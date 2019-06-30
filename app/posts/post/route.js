import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('post', params.slug, {include: 'comments'});
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('text', model.text);
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.reset();
    }
  }
});
