import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const {slug} =  params
    if (slug !== 'new') {
      return this.store.findRecord('post', params.slug, { include: 'comments' });
    }
  },
  setupController(controller, model) {
    this._super(...arguments);
    if(model) {
      controller.set('title', model.title);
      controller.set('text', model.text);
    }
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.reset();
    }
  }
});
