import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LearningENV.locationType
});

Router.map(function() {
	this.route('todo', { path: '/' });
});

export default Router;
