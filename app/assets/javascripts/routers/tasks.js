TaskList.Routers.Tasks = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	index: function(){
		var view = new TaskList.Views.TasksIndex({collection: TaskList.Tasks});
		$('body').html(view.render().$el);
	}
})