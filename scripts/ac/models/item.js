acSearch.Item = DS.Model.extend({
    name: DS.attr('string'),
    price: DS.attr('number'),
    location: DS.attr('string'),
    time: DS.attr('string'),
    months: DS.attr('string')
});

acSearch.Item.FIXTURES = [
    {
        id: 1,
        name: 'Search for items by name!',
        price: 0,
        location: 'xxx',
        time: 'xxx',
        months: 'xxx'
    },
    {
        id: 2,
        name: 'test',
        price: 0,
        location: 'xxx',
        time: 'xxx',
        months: 'xxx'
    }
];
