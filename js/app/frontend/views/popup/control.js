define(
  [
    "frontend/views/popup",
    "frontend/models/connect"
  ],
  function(PopupView, ConnectModel) {

    var ControlView = Backbone.View.extend({
      el: $("#control"),
      initialize: function() {
        _.bindAll(this, "doBack", "doPlay", "doNext",
                  "doPrev", "doShuffle", "onPlay", "onPause");

        this.parent = new PopupView();
        this.connect = new ConnectModel();

        var bkAudio = this.parent.model.getBkAudio();
        $(bkAudio).on("play", this.onPlay);
        $(bkAudio).on("pause", this.onPause);
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
        this.connect.post("togglePlay");
      },
      doNext: function() {
        var index = +(this.parent.model.getBkIndex()) + 1;
        this.connect.post("setPlayingIndex", index);
      },
      doPrev: function() {
        var index = +(this.parent.model.getBkIndex()) - 1;
        this.connect.post("setPlayingIndex", index);
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
      }
    });

    return ControlView;
  }
);
