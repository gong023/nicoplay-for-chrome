define(
  ["views/popup", "models/popup", "models/popup/control"],
  function(PopupView, PopupModel, ControlModel) {

    var ControlView = PopupView.extend({
      model: new ControlModel(),
      el: $("#control"),
      initialize: function() {
        this.popup_model.on("change:playing_index", this.model.play);
      },
      events: {
        "click #back": "doBack",
        "click #play": "doPlay"
      },
      render: function() {
        $(this.el).html(_.template($("#parts").html(), {src: "hoge"}));
      },
      doBack: function() {
        this.popup_model.set("view", "list");
      },
      doPlay: function() {
        this.popup_model.play();
      }
    });

    return ControlView;
  }
);
