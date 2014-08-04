var Tasks = Backbone.Collection.extend({
	model: Task,
	url: '/tasks'

	complete: function(){
		return this.filtered(function(task){
			return task.isComplete();
		});
	}
});

_.extend(Tasks.prototype, FilterableCollectionMixin);