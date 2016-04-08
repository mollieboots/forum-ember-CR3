import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  content: DS.attr(),
  author: DS.attr(),
  rating: DS.attr({ defaultValue: 1})
});
