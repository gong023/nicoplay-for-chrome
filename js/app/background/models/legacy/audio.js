define(
 [
   "jquery", "underscore", "backbone",
   "background/models/list", "jquery_mockjax"
  ],
  function($, _, Backbone, ListModel) {

    // singleton
    var AudioModel = Backbone.Model.extend({
      constructor: function() {
        if (! AudioModel.instance) {
          AudioModel.instance = this;
          Backbone.Model.apply(AudioModel.instance, arguments);
        }
        return AudioModel.instance;
      },
      initialize: function() {
        _.bindAll(this, "validate", "validate_error",
                  "playOnSrc", "setSrcOnPlayingIndex", "togglePlay", "onEnded");

        this.listModel = new ListModel();

        var audio = new Audio();
        audio.setAttribute('id', 'bkAudio');
        $(audio).on("ended", this.onEnded);
        $("body").append(audio);
        this.set("audio", audio);

        $("body").append("<span id='bkIndex'>0</span>");

        this.listModel.on("change:playing_index", this.setSrcOnPlayingIndex);
        this.on("change:src", this.playOnSrc);
        this.on("error", this.validate_error);
      },
      validate: function(attrs) {
        var errs = [];
        if (_.has(attrs, "src") && ! attrs.src) {
          errs.push('audio src is empty');
        }
        if (errs.length > 0) return errs;
      },
      validate_error: function(model, error) {
        console.warn('[validate error] ' + error);
      },
      playOnSrc: function() {
        var audio = this.get("audio");
        var src = this.get("src");
        audio.src = src;
        audio.play();
      },
      setSrcOnPlayingIndex: function() {
        var list = this.listModel.get("list");
        if (! list) throw("there is no list");

        var index = this.listModel.get("playing_index");
        var listLength = this.listModel.getLength();

        if (index < 0) {
          index = listLength - 1;
        } else if (index >= listLength) {
          index = 0;
        }
        this.listModel.set({"playing_index": index}, {silent: true});

        this.set("src", list[index].path);
        $("#bkIndex")[0].innerHTML = index;
      },
      togglePlay: function() {
        var audio = this.get("audio");
        audio.paused === true ? audio.play() : audio.pause();
      },
      onEnded: function() {
        var index = +(this.listModel.get("playing_index")) + 1;
        this.listModel.set("playing_index", index);
      }
    });

    return AudioModel;
  }
);
