var ListModel = Backbone.Model.extend({
  defaults: {
    "index": 0,
    "list": {
      "0": {
        "ctime": "2013-04-04",
        "title": "MAD　這いよれ!カーズさんW-故意はカーズの隷也-",
        "video_id": "sm20517586"
      },
      "1": {
        "ctime": "2013-04-03",
        "title": "❤「魔法少女幸福論」歌ってみた　ver.lino ❤",
        "video_id": "sm20517586"
      }
    }
  },
  initialize: function(arg) {
  },
  sendMessage: function(arg) {
    chrome.extension.sendMessage(arg, function(res) {
      console.log('popup.js responce');
    });
  }
});


var ListView = Backbone.View.extend({
  el: $('#list'),
  events: {
    "click #play": "showControl",
    "click #playlist": "showPlaylist"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.showPlayList();
  },

  showPlayList: function() {
    var control = document.getElementById("control");
    while (control.hasChildNodes()) control.removeChild(control.lastChild);

    var list = this.model.get("list");
    for (var i in list) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(list[i].title));
      document.getElementById("list").appendChild(li);

      var bt = document.createElement("button");
      bt.setAttribute("id", "play");
      bt.setAttribute("value", "play");
      document.getElementById("list").appendChild(bt);
    }
  },

  clickPlay: function() {
    var domain = "http://gong023.com/nicoplay/public/audio/all/";
    var list = this.model.get("list")[this.model.get("index")];
    console.log(domain + list.ctime + "/" + list.video_id + ".mp3");
    this.model.sendMessage({
      "setSrc": [domain + list.ctime + "/" + list.video_id + ".mp3"]
    });
    this.model.sendMessage("setPlay");
  },

  showControl: function() {
    var list = document.getElementById("list");
    while (list.hasChildNodes()) list.removeChild(list.lastChild);

    var bt_back = document.createElement("button");
    bt_back.setAttribute("id", "playlist");
    bt_back.setAttribute("value", "back");
    bt_back.addEventListener("click", $.proxy(this.showPlayList, this));
    document.getElementById("control").appendChild(bt_back);

    var bt_play = document.createElement("button");
    bt_play.setAttribute("id", "playlist");
    bt_play.setAttribute("value", "play");
    bt_play.addEventListener("click", $.proxy(this.clickPlay, this));
    document.getElementById("control").appendChild(bt_play);
  }
});


new ListView({model: new ListModel()});
