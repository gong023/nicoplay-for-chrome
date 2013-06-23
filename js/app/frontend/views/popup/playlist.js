define(
  [
    "frontend/views/popup"
  ],
  function(PopupView) {

    var ListView = Backbone.View.extend({
      el: $('#playlist'),
      initialize: function() {
        _.bindAll(this, "render", "showControl");
        this.parent = new PopupView();
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
        this.parent.model.set({"playing_index": $(ev.target).val()});
      }
    });

    return ListView;
  }
);
