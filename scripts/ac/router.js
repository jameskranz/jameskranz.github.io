acSearch.Router.map(function() {
    this.resource('acSearch', { path: '/' });
});

acSearch.AcSearchRoute = Ember.Route.extend({
    activate: function () {
        console.log('ACTIVATE');
    },
    model: function () {
        return this.store.find('item');
    }
});
