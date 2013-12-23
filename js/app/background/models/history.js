define(
    ["jquery", "underscore", "backbone"],
    function($, _, Backbone) {
        var HistoryModel = Backbone.Model.extend({
            url: 'http://niconicomedia.net:3000/histories',
            initialize: function(index) {
                if (index === undefined) index = 0;
                h = { success: $.proxy(this.fetchSuccess, this), error: $.proxy(this.fetchError, this) }
                this.fetch(h);
            },
            fetchSuccess: function(model, response) {
                // todo
            },
            fetchError: function(model, response) {
                // todo
            }
        })

        return HistoryModel;
    }
);
