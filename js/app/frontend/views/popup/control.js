define(
  ["views/popup", "models/popup", "models/popup/control"],
  function(PopupView, PopupModel, ControlModel) {

    var ControlView = PopupView.extend({
      model: new ControlModel(),
      el: $("#control"),
      initialize: function() {
        this.popupModel.on("change:playing_index", this.model.play);
        //this.popupModel.on("change:view", this.render);
      },
      events: {
        "click #back": "doBack",
        "click #play": "doPlay",
        "click #next": "doNext",
        "click #prev": "doPrev"
      },
      render: function() {
        //var toggleText = (this.model.isPaused()) ? "pause" : "play";
        var toggleText = 'pause';
        $(this.el).html(_.template($("#parts").html(), {togglePlay: toggleText}))
      },
      doBack: function() {
        this.popupModel.set("view", "list");
      },
      doPlay: function() {
        this.model.togglePlay();
        //var toggleText = (this.model.isPaused()) ? "pause" : "play";
        //$(this.el).html(_.template($("#list").html(), {togglePlay: toggleText}))
      },
      doNext: function() {
        var index = parseInt(this.popupModel.get("playing_index")) + 1;
        this.popupModel.set("playing_index", index)
      },
      doPrev: function() {
        var index = parseInt(this.popupModel.get("playing_index")) - 1;
        this.popupModel.set("playing_index", index)
      }
    });

    return ControlView;
  }
);
