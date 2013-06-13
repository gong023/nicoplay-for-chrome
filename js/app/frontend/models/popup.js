define(
  ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    var PopupModel = Backbone.Model.extend({
      defaults: {
        "view": "list",
        "playing_index": 0,
        "is_shuffle": false,
        "domain": "http://gong023.com/nicoplay/public/audio/all/"
      },
      constructor: function() {
        if (! PopupModel.instance) {
          PopupModel.instance = this;
          Backbone.Model.apply(PopupModel.instance, arguments);
        }
        return PopupModel.instance;
      },
      getBkAudio: function() {
        return chrome.extension.getBackgroundPage().$("#bkAudio")[0];
      },
      switchView: function() {
        switch (this.get("view")) {
          case "list":
            var hide = "control";
            var show = "playlist";
            break;
          case "control":
            var hide = "playlist";
            var show = "control";
            break;
          default:
            throw "unknown view";
            break;
        }
        var speed = "fast";

        return [hide, show, speed];
      }
    });

    return PopupModel;
  }
);
