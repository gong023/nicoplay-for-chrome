define(
  ["models/popup", "jquery_mockjax"],
  function(PopupModel) {

    var ListModel = Backbone.Model.extend({
      url: 'http://gong023.com/list',
      defaults: {
        use_mock: true,
        mock: {
          0: {
            "ctime": "2013-04-04",
            "title": "MAD 這いよれ!カーズさんW-故意はカーズの隷也-",
            "video_id": "sm20517586"
          },
          1: {
            "ctime": "2013-05-14",
            "title": "ミサカサーキュレーション",
            "video_id": "sm18392719"
          },
          2: {
            "ctime": "2013-05-24",
            "title": "夕立のりぼんを全力で歌ってみた【レミュー】",
            "video_id": "sm20939442"
          }
        }
      },
      constructor: function() {
        if (! ListModel.instance) {
          ListModel.instance = this;
          Backbone.Model.apply(ListModel.instance, arguments);
        }
        return ListModel.instance;
      },
      initialize: function() {
        if (this.get("use_mock")) {
          var mock = this.get("mock_list");
          $.mockjax({
            url: 'http://gong023.com/list',
            responseText: mock
          });
        }
        _.bindAll(this, "getLength", "shuffle");
        this.parent = new PopupModel();
      },
      getLength: function() {
        var length = 0;
        for (var name in this.get("list")) length++;
        return length;
      },
      shuffle: function() {
        if (this.parent.get("is_shuffle")) {
          var list = this.get("list");
          var length = this.getLength();
          while(length--) {
            var rand = Math.floor(Math.random() * (length + 1));
            if (length == rand) continue;
            var tmp = list[length];
            list[length] = list[rand];
            list[rand] = tmp;
          }
        } else {
          this.set("list", _.clone(this.get("list_default")));//XXX:fixme
        }
      }
    });

    return ListModel;
  }
);
