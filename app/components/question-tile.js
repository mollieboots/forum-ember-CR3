import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  ConcatQuestion: Ember.computed('question.author', 'question.content', function() {
    return this.get('question.author') + " asks: " + this.get('question.content');
  }),

  actions: {
    favorite(question) {
      console.log('made it');
      console.log(question);
      this.get('favoriteQuestions').add(question);
    }
  }
});
