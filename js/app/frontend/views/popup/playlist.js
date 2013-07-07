define(
  [
    "frontend/views/popup",
    "frontend/models/connect"
  ],
  function(PopupView, ConnectModel) {

    var ListView = Backbone.View.extend({
      el: $('#playlist'),
      initialize: function() {
        _.bindAll(this, "render", "showControl");
        this.parent = new PopupView();
        this.connect = new ConnectModel();
      },
      events: {
        "click .select": "showControl"
      },
      render: function() {
        var list = this.parent.model.getBkList();
        $(this.el).html(_.template($("#list").html(), {list: list}));
      },
      showControl: function(ev) {
        this.parent.model.set("view", "control");
        this.connect.post("setPlayingIndex", $(ev.target).val());
      }
    });

    return ListView;
  }
);
