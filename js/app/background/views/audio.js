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
            this.model.play();
            break;
          case 'togglePlay':
            this.model.togglePlay();
            break;
        }
      }
    });

    return AudioView;
  }
);
