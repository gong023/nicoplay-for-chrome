define(
  ["frontend/models/popup", "frontend/models/popup/playlist"],
  function(PopupModel, ListModel) {

    var ControlModel = Backbone.Model.extend({
      listModel: new ListModel(), //XXX: fix me
      initialize: function() {
        _.bindAll(this, "play", "togglePlay", "isPaused");
        this.parent = new PopupModel();
        this.port = chrome.extension.connect();
        this.port.onMessage.addListener($.proxy(this.onMessage, this));
      },
      play: function() {
        var index = this.parent.get("playing_index");
        var list = this.listModel.get("list");
        if (! list) {
          alert('there is no list.');
          return;
        }
        var listLength = this.listModel.getLength();

        if (index < 0) {
          index = listLength - 1;
        } else if (index >= listLength) {
          index = 0;
        }
        this.parent.set({"playing_index": index}, {silent: true});

        var selected = list[index];
        var src = this.parent.get("domain") + selected.ctime + "/" + selected.video_id + ".mp3";
        //src = 'http://taira-komori.jpn.org/sound/game01/Surprise.mp3';
        //src = 'http://taira-komori.jpn.org/sound/game01/button01a.mp3';
        this.port.postMessage(["play", src]);
      },
      togglePlay: function() {
        this.port.postMessage(["togglePlay"]);
      },
      isPaused: function() {
        return this.parent.getBkAudio().paused;
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
