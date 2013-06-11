define(
  ["views/popup", "models/popup", "models/popup/control"],
  function(PopupView, PopupModel, ControlModel) {

    var ControlView = Backbone.View.extend({
      model: new ControlModel(),
      el: $("#control"),
      initialize: function() {
        _.bindAll(this, "doBack", "doPlay", "doNext",
                  "doPrev", "doShuffle", "onPlay", "onPause", "onEnded");

        this.parent = new PopupView();
        this.parent.model.on("change:playing_index", this.model.play);

        var bkAudio = this.parent.model.getBkAudio();
        $(bkAudio).on("play", this.onPlay);
        $(bkAudio).on("pause", this.onPause);
        $(bkAudio).on("ended", this.onEnded);
      },
      events: {
        "click #back": "doBack",
        "click #play": "doPlay",
        "click #next": "doNext",
        "click #prev": "doPrev",
        "click #shuffle": "doShuffle"
      },
      render: function() {
      },
      doBack: function() {
        this.parent.model.set("view", "list");
      },
      doPlay: function() {
        this.model.togglePlay();
      },
      doNext: function() {
        var index = parseInt(this.parent.model.get("playing_index")) + 1;
        this.parent.model.set("playing_index", index)
      },
      doPrev: function() {
        var index = parseInt(this.parent.model.get("playing_index")) - 1;
        this.parent.model.set("playing_index", index)
      },
      doShuffle: function() {
        var is = ! this.parent.model.get("is_shuffle");
        this.parent.model.set("is_shuffle", is);
//        var text = (is) ? 'shuffle:true' : 'shuffle:false';
//        $(this.el).html(_.template($("#parts").html(), {isShuffle: text}));
      },
      onPlay: function() {
        $(this.el).html(_.template($("#parts").html(), {togglePlay: "pause"}));
      },
      onPause: function() {
        $(this.el).html(_.template($("#parts").html(), {togglePlay: "play"}));
      },
      onEnded: function() {
        var index = parseInt(this.parent.model.get("playing_index")) + 1;
        this.parent.model.set("playing_index", index)
      }
    });

    return ControlView;
  }
);
