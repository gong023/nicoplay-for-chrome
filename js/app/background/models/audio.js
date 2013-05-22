define(
 ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    var AudioModel = Backbone.Model.extend({
      defaults: {
        "audio": new Audio()
      },
      initialize: function() {
        this.on("change:src", this.changeSrc);
        this.on("invalid", function(model, error) {
          console.warn('[validate error] ' + error);
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
      play: function() {
        this.get("audio").play();
      },
      isPaused: function() {
        return this.get("audio").paused;
      },
      changeSrc: function() {
        var audio = this.get("audio");
        audio.src = this.get("src");
        this.set("audio", audio);
      },
      togglePlay: function() {
        var audio = this.get("audio");
        audio.paused === true ? audio.play() : audio.pause();
      }
    });

    return AudioModel;
  }
);
