define(
 [
   "jquery", "underscore", "backbone",
   "background/models/list", "jquery_mockjax"
  ],
  function($, _, Backbone, ListModel) {

    // singleton
    return  new (Backbone.Model.extend({
      listModel: new ListModel(),
      initialize: function() {
        _.bindAll(this, "validate", "playOnSrc", "setSrcOnPlayingIndex", "togglePlay", "onEnded");

        var audio = new Audio();
        audio.setAttribute('id', 'bkAudio');
        $(audio).on("ended", this.onEnded);
        $("body").append(audio);
        this.set("audio", audio);

        $("body").append("<span id='bkIndex'>0</span>");

        this.listModel.on("change:playing_index", this.setSrcOnPlayingIndex);
        this.on("change:src", this.playOnSrc);
        this.on("invalid", function(model, error) {
          console.warn('[validate error] ' + error);
        });
      },
      validate: function(attrs) {
        var errs = [];
        if (_.has(attrs, "src") && attrs.src.length == 0) {
          errs.push('audio src is empty');
        }
        if (errs.length > 0) return errs;
      },
      playOnSrc: function() {
        var audio = this.get("audio");
        audio.src = this.get("src");
        audio.play();
      },
      setSrcOnPlayingIndex: function() {
        var index = this.listModel.get("playing_index");
        var list = this.listModel.get("list");
        if (! list) {
          throw "there is no list";
        }
        var listLength = this.listModel.getLength();

        if (index < 0) {
          index = listLength - 1;
        } else if (index >= listLength) {
          index = 0;
        }
        this.listModel.set({"playing_index": index}, {silent: true});

        var src = "http://ec2-50-16-95-225.compute-1.amazonaws.com" + list[index].path;
        this.set("src", src);
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
    }));
  }
);
