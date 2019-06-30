import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  createdAt: DS.attr('date'),
  comments: DS.hasMany('comment')

});
