window.acSearch = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//acSearch.ApplicationAdapter = DS.FixtureAdapter.extend();
acSearch.ApplicationAdapter = DS.RESTAdapter.extend();
acSearch.ApplicationSerializer = DS.JSONSerializer;
