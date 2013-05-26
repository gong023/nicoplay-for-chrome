define(
  ["views/popup", "models/popup", "models/popup/control"],
  function(PopupView, PopupModel, ControlModel) {

    var ControlView = PopupView.extend({
      model: new ControlModel(),
      el: $("#control"),
      initialize: function() {
        _.bindAll(this, "doBack", "doPlay", "doNext",
                  "doPrev", "doShuffle", "onPlay", "onPause", "onEnded");

        this.popupModel.on("change:playing_index", this.model.play);

        var bkAudio = this.popupModel.getBkAudio();
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
        this.popupModel.set("view", "list");
      },
      doPlay: function() {
        this.model.togglePlay();
      },
      doNext: function() {
        var index = parseInt(this.popupModel.get("playing_index")) + 1;
        this.popupModel.set("playing_index", index)
      },
      doPrev: function() {
        var index = parseInt(this.popupModel.get("playing_index")) - 1;
        this.popupModel.set("playing_index", index)
      },
      doShuffle: function() {
        var is = ! this.popupModel.get("is_shuffle");
        this.popupModel.set("is_shuffle", is);
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
        var index = parseInt(this.popupModel.get("playing_index")) + 1;
        this.popupModel.set("playing_index", index)
      }
    });

    return ControlView;
  }
);
