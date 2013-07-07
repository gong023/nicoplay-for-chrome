define(
  ["jquery", "underscore", "backbone", "jquery_mockjax"],
  function($, _, Backbone) {
    var XhrModel = Backbone.Model.extend{
      listModel: new ListModel(),
      url: "http://ec2-50-16-95-225.compute-1.amazonaws.com:3000/api/menus.json",
      defaults: {
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
      initialize: function() {
      }
    };
  }
);
