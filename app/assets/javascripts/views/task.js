TaskList.Views.TaskView = Backbone.View.extend({
	render: function(){
		tagName: "tr",

		initialize: function(){

		},

		this.$el.html(JST['tasks/view']({model: this.model}));
		return this;
	}
})