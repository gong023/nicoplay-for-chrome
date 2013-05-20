define(
  ["models/popup"],
  function(PopupModel) {

    var ListModel = PopupModel().getObj().extend({
      defaults: {
        "list": {
          0: {
            "ctime": "2013-04-04",
            "title": "MAD　這いよれ!カーズさんW-故意はカーズの隷也-",
            "video_id": "sm20517586"
          },
          1: {
            "ctime": "2013-05-14",
            "title": "ミサカサーキュレーション",
            "video_id": "sm18392719"
          }
        }
      },
      initialize: function() {
        this.parent = PopupModel().getInstance();
      },
      getLength: function() {
        var length = 0;
        for (var name in this.get("list")) length++;
        return length;
      }
    });

    return ListModel;
  }
);
