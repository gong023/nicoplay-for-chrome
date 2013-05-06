define(
  ["models/popup"],
  function(PopupModel) {

    var ListModel = PopupModel().getObject().extend({
      defaults: {
        "index": 0,
        "list": {
          0: {
            "ctime": "2013-04-04",
            "title": "MAD　這いよれ!カーズさんW-故意はカーズの隷也-",
            "video_id": "sm20517586"
          },
          1: {
            "ctime": "2013-04-03",
            "title": "❤「魔法少女幸福論」歌ってみた　ver.lino ❤",
            "video_id": "sm20517586"
          }
        }
      },
      getSrc: function() {
        var domain = "http://gong023.com/nicoplay/public/audio/all/";
        var list = this.get("list")[this.get("index")];
        console.log(domain + list.ctime + "/" + list.video_id + ".mp3");
      }
    });

    return ListModel;
  }
);
