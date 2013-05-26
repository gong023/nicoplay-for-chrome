define(
 ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    // singleton
    return  new (Backbone.Model.extend({
      initialize: function() {
        var audio = new Audio();
        audio.setAttribute('id', 'bkAudio');
        $("body").append(audio);
        this.set("audio", audio);

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
      changeSrc: function() {
        var audio = this.get("audio");
        audio.src = this.get("src");
        audio.play();
      },
      togglePlay: function() {
        var audio = this.get("audio");
        audio.paused === true ? audio.play() : audio.pause();
      }
    }));
  }
);
