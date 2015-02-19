acSearch.ItemsController = Ember.ArrayController.extend({
    actions: {
        doSearch: function () {
            console.log('searching', arguments);
        }
    }
});
