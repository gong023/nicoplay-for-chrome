require.config({
  baseUrl: "../js/app/frontend",
  paths: {
    jquery: "../../libs/jquery/jquery-min",
    underscore: "../../libs/underscore/underscore-min",
    backbone: "../../libs/backbone/backbone-min"
  }
});

require(
  ["views/popup", "views/popup/playlist", "views/popup/control"],
  function(PopupView, ListView, ControlView) {
    var popup_view = new PopupView();
    var list_view = new ListView();
    var control_view = new ControlView();
    popup_view.render();
    list_view.render();
    control_view.render();
  }
);
