define(
  ["jquery", "underscore", "backbone", "frontend/models/popup"],
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
        try {
          var ret = this.model.switchView();
        } catch (e) {
          $("#control").hide("fast");
          $("#playlist").show("fast");
        }
        var hide = ret[0], show = ret[1], speed = ret[2];
        $("#" + hide).hide(speed);
        $("#" + show).show(speed);
      }
    });

    return PopupView;
  }
);
