TaskList.Views.TasksIndexView = Backbone.View.extend({
	render: function(){
		var self = this,
		this.$el.html(JST['tasks/index'])(),
		tagName: 'section',

		initialize: function(){
			_.bindAll(this, "render");

			this.collection.bind("change", this.render);
			this.collection.bind("add", this.render);
			this.collection.bind("remove", this.render);
		},

		render: function(){
			this.$el.html(this.template({tasks: this.collection}));
		},

		// this.collection.each(function(task){
		// 	var taskView = new TaskList.Views.TaskView({model: task});
		// 	self.$('table').append(taskView.render().el);
		// });
		// return this;
	}
})