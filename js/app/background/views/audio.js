define(
  ["models/audio"],
  function(AudioModel) {

    var AudioView = Backbone.View.extend({
      model: new AudioModel(),
      initialize: function() {
        chrome.extension.onMessage.addListener($.proxy(this.getMessage, this));
      },
      getMessage: function() {
        var method = _.first(arguments[0]);
        var args = _.rest(arguments[0]);

        switch (method) {
          case 'play':
            this.model.set({'src': _.first(args)}, {validate: true});
            break;
          case 'togglePlay':
            //var is_playing = ! this.model.get("audio").paused;
            //this.model.set({'playing': is_playing}, {validate: true});
            break;
        }
      }
    });

    return AudioView;
  }
);
