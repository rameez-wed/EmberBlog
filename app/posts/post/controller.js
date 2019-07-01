import Controller from '@ember/controller';

export default Controller.extend({
  text: null,
  title: null,
  comment: null,
  reset() {
    this.setProperties(
      {
        'text': null,
        'title': null,
        'comment': null,
      }
    );
  },
  actions: {
    saveClicked() {
      let { text, model, title} = this;
      if (model) {
        model.set('title', title);
        model.set('text', text);
        model.save();
      } else {
        let post = this.store.createRecord('post', {
          title, text,
        });
        post.save().then ( (post) => {
          this.transitionToRoute('posts.post', post.id);
        })
      }
      
    },
    onTextChanged(text) {
      this.set('text', text);
    },
    titleValueChanged(event){
      this.set('title', event.target.value);
    },
    onCommentChanged(comment) {
      this.set('comment', comment);
    },
    saveCommentClicked() {
      let {model, comment} = this;
      if (model && comment) {
        this.store.createRecord('comment', {
          text: this.comment,
          post: model,
        }).save().then (() => {
          this.set('comment', null);
        });
      }
      
    },
  }
});
