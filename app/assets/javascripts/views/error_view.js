ErrorView = Backbone.View.extend({
	initialize: function(options){
		this.attributesWithErrors = this.options.attributesWithErrors;
		_.bindAll(this, "clearErrors", "renderErrors", "renderError", "fieldFor");
	},

	render: function(){
		this.clearOldErrors();
		this.renderErrors();
	},

	clearOldErrors: function(){
		this.$(".error").removeClass("error");
		this.$("p.inline-errors").remove();
	},

	renderErrors: function(){
		_.each(this.attributesWithErrors, this.renderError);
	},

	renderError: function(errors, attribute){
		var errorString = errors.join(", ");
		var field = this.fieldFor(attribute);
		var errorTag = $('<p>').addClass('inline-errors').text(errorString);
		field.append(errorTag);
		field.addClass("error");
	},

	fieldFor: function(attribute){
		return this.$('li[id*="_'+ attribute + '_input"]');
	}
});