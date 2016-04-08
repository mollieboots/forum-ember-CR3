import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  favorite(question) {
    this.get('favorites').pushObject(question);
  }
});
