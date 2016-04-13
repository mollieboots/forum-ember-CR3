import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
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
      this.get('favorites').add(question);
    }
  }
});
