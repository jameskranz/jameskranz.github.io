window.acSearch = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//acSearch.ApplicationAdapter = DS.FixtureAdapter.extend();
acSearch.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'acsearch'
});
acSearch.ApplicationSerializer = DS.JSONSerializer;
