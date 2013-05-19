define(
  ["models/popup", "models/popup/playlist"],
  function(PopupModel, ListModel) {

    var ControlModel = PopupModel().getObj().extend({
      list_model: new ListModel(), //XXX: fix me
      initialize: function() {
        _.bindAll(this, "play", "sendMessage");
        this.parent = PopupModel().getInstance();
      },
      play: function() {
        var index = this.parent.get("playing_index");
        console.log(index);
        var list = this.list_model.get("list")[index];
        var src = this.get("domain") + list.ctime + "/" + list.video_id + ".mp3";
        this.sendMessage(["play", src]);
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
