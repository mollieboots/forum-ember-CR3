import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  actions: {
    favorite(question) {
      console.log('made it');
      this.get('favoriteQuestions').favorite(question);
    }
  }
});
