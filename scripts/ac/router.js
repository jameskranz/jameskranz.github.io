acSearch.acSearchRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('item');
    }
});

acSearch.Router.map(function() {
    this.resource('acSearch', { path: '/' });
});
