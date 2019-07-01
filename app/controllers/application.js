import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    newPostClicked() {
      this.transitionToRoute('posts.post', 'new');
    }
  },
});
