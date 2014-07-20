import Ember from 'ember';

var TodosRoute = Ember.Route.extend({
	model: function() {
    		this.store.find('todo');
  	},
	setupController: function(controller, _) {
		controller.set('model', this.store.find('todo'));
	}
});



export default TodosRoute;
