acSearch.AcSearchController = Ember.ArrayController.extend({
    actions: {
        doSearch: function () {
            console.log('searching', arguments);
        }
    },

    searchResults: function () {
        var searchTerm = this.get('searchTerm');
        var regexp = new RegExp(searchTerm, 'i');

        var filteredResults = this.filter(function (item) {
            var name = item.get('name');
            return regexp.test(name);
        });

        return filteredResults;
    }.property('@each', 'searchTerm')
});
