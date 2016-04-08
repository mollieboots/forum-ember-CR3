import Ember from 'ember';

export function sortAnswers(params) {
  var answers = params[0];
  var answersArray = answers.content;

  return answersArray.sortBy('points').reverseObjects();
}

export default Ember.Helper.helper(sortAnswers);
