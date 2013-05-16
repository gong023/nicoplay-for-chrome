define(
  ["views/popup", "models/popup", "models/popup/playlist", "models/popup/control"],
  function(PopupView, PopupModel, ListModel, ControlModel) {

    var ListView = PopupView.extend({
      model: new ListModel(),
      control_model: new ControlModel(),
      el: $('#playlist'),
      initialize: function() {
        // do nothing.
      },
      events: {
        "click .select": "showControl"
      },
      render: function() {
        $(this.el).html(_.template($("#list").html(), {list: this.model.get("list")}));
      },
      showControl: function(ev) {
        this.popup_model.set("view", "control");
        this.control_model.play();
        //this.popup_model.set("playing_index", $(ev.target).val());
      }
    });

    return ListView;
  }
);
