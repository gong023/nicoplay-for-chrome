define(
  ["jquery", "underscore", "backbone", "jquery_mockjax"],
  function($, _, Backbone) {
    var ListModel = Backbone.Model.extend({
      url: "http://ec2-50-16-95-225.compute-1.amazonaws.com:3000/api/menus.json",
      defaults: {
        playing_index: 0,
        is_shuffle: false,
        use_mock: true,
        mock: {
          0: {
            "title": "「愛ト茄子ト平和ナ果実」を歌ってみた足首",
            "path": "/resource/audio/2013-06-16/sm21128349.mp3"
          },
          1: {
            "title": "【まふまふ】へたくそユートピア政策＠歌ってみた",
            "path": "/resource/audio/2013-06-16/sm21129846.mp3"
          },
          2: {
            "title": "『not blue.』を歌ってみた【clear】",
            "path": "/resource/audio/2013-06-17/sm21137998.mp3"
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
          $.mockjax({
            url: this.url,
            responseText: this.get("mock")
          });
        }
        _.bindAll(this, "setList", "getLength", "shuffle");
        this.setList();
      },
      setList: function() {
        this.fetch({
          success: $.proxy(function(model) {
            var list = (this.get("use_mock")) ? model.attributes.mock : model.toJSON();

            this.set('list', list);
            this.set("list_default", _.clone(list));
            $("#bkList").val(JSON.stringify(this.get("list")));
            $("#bkListDefault").val(JSON.stringify(this.get("list_default")));
          }, this),
          error: $.proxy(function(error) {
            console.warn(error);
          }, this)
        });
      },
      getLength: function() {
        var length = 0;
        for (var name in this.get("list")) length++;
        return length;
      },
      shuffle: function() {
        if (this.get("is_shuffle")) {
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
