define(
  ["models/popup", "models/popup/playlist"],
  function(PopupModel, ListModel) {

    var ControlModel = PopupModel().getObject().extend({
      listModel: new ListModel(), //XXX: fix me
      play: function() {
        var list = this.listModel.get("list")[this.listModel.get("index")];
        var src = this.get("domain") + list.ctime + "/" + list.video_id + ".mp3";
        this.sendMessage({"setSrc": [src]});
        this.sendMessage("setPlay");
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
