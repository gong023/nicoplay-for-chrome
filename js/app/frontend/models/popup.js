define(
  ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    var PopupModel = function() {
      var instance = false;
      var obj = Backbone.Model.extend({
        defaults: {
          "view": "list",
          "domain": "http://gong023.com/nicoplay/public/audio/all/"
        }
      });

      return {
        getObject: function() {
          return obj;
        },
        getInstance: function() {
          if (! instance) {
            instance = new obj();
          }
          return instance;
        }
      }
    }

    return PopupModel;
  }
);
