define(
  ["models/popup", "models/popup/playlist"],
  function(PopupModel, ListModel) {

    var ControlModel = PopupModel().getObj().extend({
      listModel: new ListModel(), //XXX: fix me
      initialize: function() {
        _.bindAll(this, "play", "sendMessage");
        this.parent = PopupModel().getInstance();
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
        this.sendMessage(["play", src]);
      },
      togglePlay: function() {
        this.sendMessage(["togglePlay"]);
      },
      sendMessage: function(arg) {
        chrome.extension.sendMessage(arg, function(res) {
          console.log('popup.js responce');
        });
      }
    });

    return ControlModel;
  }
);
