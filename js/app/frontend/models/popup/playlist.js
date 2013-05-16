define(
  ["models/popup"],
  function(PopupModel) {

    var ListModel = PopupModel().getObject().extend({
      defaults: {
        "index": 0,// 消す
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
      }
    });

    return ListModel;
  }
);
