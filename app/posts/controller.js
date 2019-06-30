import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onPostSelected(id) {
      this.transitionToRoute('posts.post', id);
    }
  }
});
