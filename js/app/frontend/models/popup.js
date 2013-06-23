define(
  ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    var PopupModel = Backbone.Model.extend({
      defaults: {
        "view": "list",
        "playing_index": 0,
        "is_shuffle": false,
        "domain": "http://ec2-50-16-95-225.compute-1.amazonaws.com"
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
      getBkList: function() {
        var bkList = chrome.extension.getBackgroundPage().$("#bkList")[0].value;
        if (! bkList) {
          throw "there is no list";
        }
        return JSON.parse(bkList);
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
