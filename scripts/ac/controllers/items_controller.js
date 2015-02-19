acSearch.AcSearchController = Ember.ArrayController.extend({
    actions: {
        doSearch: function () {
            console.log('searching', arguments);
        }
    }
});
