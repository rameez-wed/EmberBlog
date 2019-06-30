import Controller from '@ember/controller';

export default Controller.extend({
  text: null,
  reset() {
    this.setProperties(
      {
        'text': null
      }
    );
  },
  actions: {
    saveClicked() {
      let { text, model } = this;
      model.set('text', text);
      model.save();
    },
    onTextChanged(text) {
      this.set('text', text);
    }
  }
});
