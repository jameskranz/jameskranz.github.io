acSearch.AcSearchController = Ember.ArrayController.extend({
    actions: {
        doSearch: function () {
            console.log('searching', arguments);
        }
    },

    searchResults: function () {
        var searchTermRaw = this.get('searchTerm');
        var searchTerms = searchTermRaw ? searchTermRaw.split(' ') : [''];
        var regexps = [], i, l;

        for (i = 0, l = searchTerms.length; i < l; i++) {
            regexps.push(new RegExp(searchTerms[i], 'i'));
        }

        var filteredResults = this.filter(function (item) {
            var result = true;
            var name = item.get('name');

            for (i = 0, l = regexps.length; result && i < l; i++) {
                result = regexps[i].test(name);
            }

            return result;
        });

        return filteredResults;
    }.property('@each', 'searchTerm')
});
