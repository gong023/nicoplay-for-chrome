define(
 ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

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

    return AudioModel;
  }
);