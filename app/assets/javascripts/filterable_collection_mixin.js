var FilterableMixin = {
	filtered: function(criteriaFunction){
		var sourceCollection = this;
		var filteredCollection = new this.constructor;

		var applyFilter = function(){
			filteredCollection.reset(sourceCollection.select(criteriaFunction));
		};

		this.bind("change", applyFilter);
		this.bind("add", applyFilter);
		this.bind("remove", applyFilter);

		applyFilter();

		return filteredCollection;
	}
};