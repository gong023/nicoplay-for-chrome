define(
  ["views/popup", "models/popup", "models/popup/control"],
  function(PopupView, PopupModel, ControlModel) {

    var ControlView = PopupView.extend({
      model: new ControlModel(),
      el: $("#control"),
      initialize: function() {
        _.bindAll(this, "doBack", "doPlay", "doNext", "doPrev", "onPlay", "onPause");

        this.popupModel.on("change:playing_index", this.model.play);

        var bkAudio = this.popupModel.getBkAudio();
        $(bkAudio).on("play", this.onPlay);
        $(bkAudio).on("pause", this.onPause);
      },
      events: {
        "click #back": "doBack",
        "click #play": "doPlay",
        "click #next": "doNext",
        "click #prev": "doPrev"
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
      onPlay: function() {
        $(this.el).html(_.template($("#parts").html(), {togglePlay: "pause"}));
      },
      onPause: function() {
        $(this.el).html(_.template($("#parts").html(), {togglePlay: "play"}));
      }
    });

    return ControlView;
  }
);
