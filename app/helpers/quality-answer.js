import Ember from 'ember';

export function qualityAnswer(params/*, hash*/) {
  var answerRating = params[0].get('rating');
  console.log(answerRating);

  if(answerRating >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>');
  }
}

export default Ember.Helper.helper(qualityAnswer);
