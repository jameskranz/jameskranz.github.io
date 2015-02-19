acSearch.Router.map(function() {
    this.resource('acSearch', { path: '/' });
});

acSearch.AcSearchRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('item');
    }
});
