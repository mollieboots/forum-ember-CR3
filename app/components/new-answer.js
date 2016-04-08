import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,

  actions: {
    newAnswerShow() {
      this.set('newAnswer', true);
    },
    newAnswerHide() {
      this.set('newAnswer', false);
    },
    newAnswerSubmit() {
      var params = {
        content: this.get('answer-content'),
        author: this.get('answer-author'),
        question: this.get('question')
      };
      console.log(params);
      this.set('newAnswer', false);
      this.sendAction('newAnswerSubmit', params);
    }
  }
});
