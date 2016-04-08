import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      answer.destroyRecord();
    },
    upvote(answerId) {
      this.sendAction('upvote', answerId);
    },
    downvote(answerId) {
      this.sendAction('downvote', answerId);
    }
  }
});
