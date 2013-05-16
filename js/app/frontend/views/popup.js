define(
  ["jquery", "underscore", "backbone", "models/popup"],
  function($, _, Backbone, PopupModel) {

    var PopupView = Backbone.View.extend({
      // 手は尽くしたが、これしかないかも。
      // modelにすると子供に上書きされてしまうし、PopupViewのcontext維持も難しい
      popup_model: PopupModel().getInstance(),
      initialize: function() {
        this.popup_model.on("change:view", this.switchView, this);
      },
      render: function() {
        $("#control").hide();
      },
      switchView: function() {
        switch (this.popup_model.get("view")) {
          case "list":
            $("#control").hide("fast");
            $("#playlist").show("fast");
            break;
          case "control":
            $("#control").show("fast");
            $("#playlist").hide("fast");
            break;
          default:
            console.warn("unknown view");
            break;
        }
      }
    });

    return PopupView;
  }
);
