define(
  ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    var instance = false;

    var PopupModel = function() {
      var obj = Backbone.Model.extend({
        defaults: {
          "view": "list",
          "playing_index": 0,
          "domain": "http://gong023.com/nicoplay/public/audio/all/"
        },
        getBkAudio: function() {
          return chrome.extension.getBackgroundPage().$("#bkAudio")[0];
        }
      });

      return {
        getObj: function() {
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
