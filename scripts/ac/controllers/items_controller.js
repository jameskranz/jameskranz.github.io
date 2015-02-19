acSearch.ItemsController = Ember.ArrayController.extend({
    actions: {
        search: function () {
            console.log('searching', arguments);
        }
    }
});
