define(
  ["models/audio"],
  function(AudioModel) {

    var AudioView = Backbone.View.extend({
      model: new AudioModel(),
      initialize: function() {
        console.log("aaaa");
        chrome.extension.onMessage.addListener($.proxy(this.getMessage, this));
      },
      getMessage: function() {
        var a = arguments[0];
        if (_.isObject(a)) {
          var method = _.keys(a)[0];
          var arg = _.values(a)[0];
        } else {
          var method = a;
        }
        switch (method) {
          case 'setSrc':
            this.model.set({'src': _.first(arg)}, {validate: true});
          break;
          case 'setPlay':
            var is_playing = ! this.model.get("audio").paused;
          this.model.set({'playing': is_playing}, {validate: true});
          break;
        }
      }
    });

    return AudioView;
  }
);
