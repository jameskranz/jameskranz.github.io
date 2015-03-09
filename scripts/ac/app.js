Ember.LOG_BINDINGS = true;

var acSearch = Ember.Application.create({
    LOG_TRANSITIONS: true
});

acSearch.ApplicationAdapter = DS.FixtureAdapter.extend({
});

acSearch.ApplicationSerializer = DS.JSONSerializer.extend({
});
