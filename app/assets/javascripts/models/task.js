var Task = Backbone.Model.extend({
	isComplete: function(){
		return this.get('completed_at') !== null;
	}	
});