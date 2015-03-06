window.acSearch = Ember.Application.create({
    LOG_TRANSITIONS: true
});

acSearch.ApplicationAdapter = DS.FixtureAdapter;
//acSearch.ApplicationAdapter = DS.LSAdapter.extend({
    //namespace: 'acsearch'
//});
acSearch.ApplicationSerializer = DS.JSONSerializer.extend({
    pushPayload: function () {
        console.log('derp');
    }
});
