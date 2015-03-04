acSearch.Router.map(function() {
    this.resource('acSearch', { path: '/' });
});

acSearch.AcSearchRoute = Ember.Route.extend({
    activate: function () {
        var store = this.store;
        var bugs;

        $.getJSON('/scripts/ac/bugs.data.js').then(function (bugData) {
            if (bugData) {
                bugs = bugData;
            }

            console.log(bugs);
            store.pushPayload('item', bugs);
        });
    },
    model: function () {
        return this.store.find('item');
    }
});
