require.config({
  paths: {
    jquery: "../libs/jquery/jquery-min",
    underscore: "../libs/underscore/underscore-min",
    backbone: "../libs/backbone/backbone-min",
    jquery_mockjax: "../libs/jquery/jquery.mockjax"
  }
});

require(
  [
    "jquery", "underscore", "backbone",
    "frontend/views/popup",
    "frontend/views/popup/playlist",
    "frontend/views/popup/control",
    'frontend/models/connect/receive'
  ],
  function($, _, Backbone, PopupView, ListView, ControlView, ReceiveModel) {
    var popup_view = new PopupView();
    var list_view = new ListView();
    var control_view = new ControlView();
    list_view.render();
    control_view.render();
    popup_view.render();
    // TODO:port開けるタイミングないので・・・
    new ReceiveModel();
  }
);
