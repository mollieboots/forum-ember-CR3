import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    deleteQuestion(question) {
      console.log(question);
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    newAnswerSubmit(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
    },
    upvote(answerId) {
      this.store.findRecord('answer', answerId).then(function(answer) {
        answer.incrementProperty('rating');
        answer.save();
      });
      this.refresh();

    },
    downvote(answerId) {
      this.store.findRecord('answer', answerId).then(function(answer) {
        answer.decrementProperty('rating');
        answer.save();
      });
      this.refresh();
    }
  }
});
