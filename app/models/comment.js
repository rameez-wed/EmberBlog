import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  text: DS.attr('string'),
  post: DS.belongsTo('post')
});
