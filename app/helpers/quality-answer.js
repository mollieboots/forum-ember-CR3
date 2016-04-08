import Ember from 'ember';

export function qualityAnswer(params/*, hash*/) {
  var answer = params[0];

  if(answer.get('rating') > 3) {
    console.log(answer.rating);
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(qualityAnswer);
