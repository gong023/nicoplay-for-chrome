var AudioModel = Backbone.Model.extend({
  defaults: {
    "audio": new Audio()
  },
  initialize: function() {
    this.on("change:src", this.changeSrc);
    this.on("change:playing", this.togglePlaying);
    this.on("invalid", function(model, error) {
      console.log('[validate error] ' + error);
    });
  },
  validate: function(attrs) {
    var errs = [];
    if (_.has(attrs, "src") && attrs.src.length == 0) {
      errs.push('audio src is empty');
    }
    if (_.has(attrs, "playing") && typeof attrs.playing !== 'boolean') {
      errs.push('playing must be boolean');
    }

    if (errs.length > 0) return errs;
  },
  changeSrc: function() {
    var audio = this.get("audio");
    audio.src = this.get("src");
    this.set("audio", audio);
  },
  togglePlaying: function() {
    var audio = this.get("audio");
    this.get("playing") === true ? audio.pause() : audio.play();
  }
});

var AudioView = Backbone.View.extend({
  initialize: function() {
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

new AudioView({model: new AudioModel()});
