define(
  ["jquery", "underscore", "backbone", "background/models/list/xhr"],
  function($, _, Backbone, XhrModel) {
    var ListModel = Backbone.Model.extend({
      url: "http://ec2-50-16-95-225.compute-1.amazonaws.com:3000/api/menus.json",
      defaults: {
        playing_index: 0,
        is_shuffle: false
      },
      constructor: function() {
        if (! ListModel.instance) {
          ListModel.instance = this;
          Backbone.Model.apply(ListModel.instance, arguments);
        }
        return ListModel.instance;
      },
      initialize: function() {
        _.bindAll(this, "onLoaded", "getLength", "shuffle");

        this.xhr = new XhrModel();
        this.xhr.setList();
        this.xhr.on("change:loaded", this.onLoaded);
      },
      onLoaded: function() {
        this.set("list", _.clone(this.xhr.get("list")));
        this.set("list_default", _.clone(this.xhr.get("list_default")));
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
