import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  favoriteQuestions: Ember.inject.service(),

  actions: {
    saveQuestion(params) {
      console.log(params);
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      console.log(newQuestion);
    },
    favorite(question) {
      console.log('made it');
      this.get('favoriteQuestions').add(question);
    }
  }
});
