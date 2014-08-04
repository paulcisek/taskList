var TaskDetail = Support.CompositeView.extend({
	// template: JST['tasks/task_detail'],
	tagName: 'section',
	id: 'task',
	events: {
		"click .comments .form-inputs button": "createComment"
	},

	initialize: function() {
		_.bindAll(this, "render");
		this.model.on("change", this.renderDetails);
		// this.model.on("change", this.render);
		// this.model.comments.on("change", this.render);
		// this.model.comments.on("add",
		// this.render);
	},

	render: function() {
		// this.$el.html(this.template({task: this.model}));
		this.renderLayout();
		this.renderDetails();
		this.renderCommentsList();
	},

	renderLayout: function(){
		this.$el.html(JST['tasks/show']());
	},

	renderDetails: function(){
		var detailsMarkup = JST['tasks/details']({ task: this.model });
		this.$('.task-details').html(detailsMarkup);
	},

	renderCommentsList: function(){
		var commentsList = new CommentList({model: this.model });
	}

	// createComment: function() {
	// 	var comment = new Comment({ text: this.$('.new-comment-input').val() });
	// 	this.$('.new-comment-input').val('');
	// 	this.model.comments.create(comment);
	// 	}
	});

var CommentsList = Support.CompositeView.extend({
	tagName: 'ul',

	initialize: function(){
		this.model.comments.on("add", this.renderComments);
	},

	render: function(){
		this.renderLayout();
		this.renderComments();
		this.renderCommentForm();
	},

	renderLayout: function(){
		this.$el.html(JST['comments/list']());
	},

	renderComments: function(){
		var commentsContainer = this.$('comments-list');
		commentsContainer.html('');

		this.model.comments.each(function(comment){
			var commentMarkup = JST['comments/item']({ comment: comment });
			commentsContainer.append(commentMarkup);
		});
	},

	renderCommentForm: function(){
		var commentForm = new CommentForm({ model: this.model });
		var commentFormContainer = this.$('.new-comment-form');
		this.renderChildInto(commentForm, commentFormContainer);
	}
});

var CommentForm = Support.CompositeView.extend({
	events: {
		"click button" : "createComment"
	},

	initialize: function(){
		this.model = this.options.model;
	},

	render: function(){
		this.$el.html(JST['comments/new']);
	},

	createComment: function(){
		var comment = new Comment({ text: $('.new-comment-input').val()});
		this.$('.new-comment-input').val('');
		this.model.comments.create(comment);
	}
});