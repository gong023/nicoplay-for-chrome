define(
  ["jquery", "underscore", "backbone", "frontend/models/popup"],
  function($, _, Backbone, PopupModel) {

    var PopupView = Backbone.View.extend({
      model: new PopupModel(),
      initialize: function() {
        this.model.on("change:view", this.switchView, this);
      },
      render: function() {
        var bk_audio = this.model.getBkAudio();
        if (bk_audio && bk_audio.paused) {
          $("#playlist").hide();
        } else {
          $("#control").hide();
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
