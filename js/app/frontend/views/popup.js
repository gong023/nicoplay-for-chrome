define(
  ["jquery", "underscore", "backbone", "models/popup"],
  function($, _, Backbone, PopupModel) {

    var PopupView = Backbone.View.extend({
      model: new PopupModel(),
      initialize: function() {
        this.model.on("change:view", this.switchView, this);
      },
      render: function() {
        if (this.model.getBkAudio().paused) {
          $("#control").hide();
        } else {
          $("#playlist").hide();
        }
      },
      switchView: function() {
        switch (this.model.get("view")) {
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
