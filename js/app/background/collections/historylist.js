define(
    [
      'jquery', 'underscore', 'backbone',
      'background/models/history'
    ],
    function($, _, Backbone, History) {
        var HistoryCollection = Backbone.Collection.extend({
          model: History
        });

        return HistoryCollection;
    }
);
