var AudioModel = Backbone.Model.extend({
  defaults: {
    "audio": new Audio(),
    "src": "",
    "play": false
  },
  initialize: function() {
    this.on("change:src", this.changeSrc);
    this.on("change:play", this.togglePlaying);
  },
  validate: function(attrs) {
    var errs = [];
    if (attrs.src.length == 0) {
      errs.push('audio src is empty');
    }
    if (typeof attrs.playing !== 'boolean') {
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
    this.get("play") === true ? audio.play() : audio.pause();
    var playing = ! this.get("play");
    this.set({"play": playing}, {silent: true});
  }
});

var AudioView = Backbone.View.extend({
  initialize: function() {
    chrome.extension.onMessage.addListener($.proxy(this.getMessage, this));
  },
  getMessage: function() {
    this.model.set(arguments[0], {
//      validate: true,
//      error: function(model, error) {
//        console.log('[validate error] ' + error);
//      }
    });
  }
});

new AudioView({model: new AudioModel()});
