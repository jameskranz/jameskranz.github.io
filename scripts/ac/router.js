acSearch.Router.map(function() {
    this.resource('acSearch', { path: '/' });
});

acSearch.AcSearchRoute = Ember.Route.extend({
    activate: function () {
        var store = this.store;
        var bugs, fish;

        $.when(
            $.getJSON('../scripts/ac/bugs.data.js'),
            $.getJSON('../scripts/ac/fish.data.js')
        ).then(function(bugsData, fishData) {
            var data = [].concat(bugsData[0], fishData[0]);

            console.log('data', data);

            $.each(data, function (index, el) {
                var newItem = {};
                newItem.id = index;
                newItem.name = el.name;
                newItem.price = el.price;

                store.push('item', newItem);
            });
        });



    },

    model: function () {
        var store = this.store;

        return store.filter('item', function (item) {
            //console.log('item', item.get('name'));
            return item;
        });
    }
});
