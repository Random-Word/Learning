import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
	setup: function() {
		App = startApp();
	}, teardown: function() {
		Ember.run(App, App.destroy);
	}
});

test('Should welcome me to Learning', function() {
	expect(1);
	visit('/').then(function() {
		equal(find('h2#title').text(), 'Welcome to Ember.js');
	});

});
