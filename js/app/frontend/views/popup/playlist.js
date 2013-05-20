define(
  ["views/popup", "models/popup", "models/popup/playlist", "models/popup/control"],
  function(PopupView, PopupModel, ListModel, ControlModel) {

    var ListView = PopupView.extend({
      model: new ListModel(),
      el: $('#playlist'),
      initialize: function() {
      },
      events: {
        "click .select": "showControl"
      },
      render: function() {
        $(this.el).html(_.template($("#list").html(), {list: this.model.get("list")}));
      },
      showControl: function(ev) {
        this.popupModel.set("view", "control");
        this.popupModel.set({"playing_index": $(ev.target).val()});
      }
    });

    return ListView;
  }
);
