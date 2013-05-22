define(
  ["models/popup", "models/popup/playlist"],
  function(PopupModel, ListModel) {

    var ControlModel = PopupModel().getObj().extend({
      listModel: new ListModel(), //XXX: fix me
      initialize: function() {
        _.bindAll(this, "play", "togglePlay", "isPaused");
        this.parent = PopupModel().getInstance();
        this.port = chrome.extension.connect();
        this.port.onMessage.addListener($.proxy(this.onMessage, this));
      },
      play: function() {
        var index = this.parent.get("playing_index");
        var list = this.listModel.get("list");
        var listLength = this.listModel.getLength();

        if (index < 0) {
          index = listLength - 1;
        } else if (index >= listLength) {
          index = 0;
        }

        var selected = list[index];
        var src = this.get("domain") + selected.ctime + "/" + selected.video_id + ".mp3";
        this.port.postMessage(["play", src]);
      },
      togglePlay: function() {
        this.port.postMessage(["togglePlay"]);
      },
      isPaused: function() {
        // getBackgroundPage
      },
      onMessage: function() {
        var method = _.first(arguments[0]);
        var args = _.rest(arguments[0]);

        switch(method) {
          case 'isPaused':
            this.is_paused = _.first(args);
            break;
        }
      }
    });

    return ControlModel;
  }
);
