define(
  ["jquery", "underscore", "backbone", "models/popup"],
  function($, _, Backbone, PopupModel) {

    var PopupView = Backbone.View.extend({
      // there may be no way the only termed model.
      // difficult to keep context.fix me.
      popupModel: PopupModel().getInstance(),
      initialize: function() {
        this.popupModel.on("change:view", this.switchView, this);
      },
      render: function() {
        $("#control").hide();
      },
      switchView: function() {
        switch (this.popupModel.get("view")) {
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
