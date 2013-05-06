define(
  ["views/popup", "models/popup", "models/popup/control"],
  function(PopupView, PopupModel, ControlModel) {

    var ControlView = PopupView.extend({
      controlModel: new ControlModel(),
      el: $("#control"),
      events: {
        "click #back": "doBack",
        "click #play": "doPlay"
      },
      render: function() {
        $(this.el).html(_.template($("#parts").html(), {src: "hoge"}));
      },
      doBack: function() {
        this.popupModel.set("view", "list");
      },
      doPlay: function() {
        this.controlModel.play();
      }
    });

    return ControlView;
  }
);
