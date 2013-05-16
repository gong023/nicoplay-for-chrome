define(
  ["models/popup", "models/popup/playlist"],
  function(PopupModel, ListModel) {

    var ControlModel = PopupModel().getObject().extend({
      list_model: new ListModel(), //XXX: fix me
      initialize: function() {
        _.bindAll(this, "play", "sendMessage");
      },
      play: function() {
        var list = this.list_model.get("list")[this.list_model.get("index")];
        var src = this.get("domain") + list.ctime + "/" + list.video_id + ".mp3";
        console.log(src);
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
