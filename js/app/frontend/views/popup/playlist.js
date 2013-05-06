define(
  ["views/popup", "models/popup", "models/popup/playlist", "models/popup/control"],
  function(PopupView, PopupModel, ListModel, ControlModel) {

    var ListView = PopupView.extend({
      listModel: new ListModel(),
      controlModel: new ControlModel(),
      el: $('#playlist'),
      events: {
        "click .select": "showControl"
      },
      render: function() {
        $(this.el).html(_.template($("#list").html(), {list: this.listModel.get("list")}));
      },
      showControl: function() {
        this.popupModel.set("view", "control");
        this.controlModel.play();
      }
    });

    return ListView;
  }
);
