require.config({
  paths: {
    jquery: "../libs/jquery/jquery-min",
    underscore: "../libs/underscore/underscore-min",
    backbone: "../libs/backbone/backbone-min",
    jquery_mockjax: '../libs/jquery/jquery.mockjax'
  }
});

require(
  [
    "background/views/player",
    "background/models/player"
  ],
  function(PlayerView, PlayerModel) {
    var player = new PlayerView();
    var player_model = new PlayerModel();

    var saved_port = null;
    chrome.extension.onConnect.addListener(function(port) {
      saved_port = port;
      port.onMessage.addListener(portOnMessage);
    });

    var portOnMessage = function(req) {
      var method = _.first(_.values(req));
      var args = _.rest(_.values(req));

      switch(method) {
        case 'play':
          audio.set({'src': _.first(args)}, {validate: true});
          break;
        case 'togglePlay':
          audio.togglePlay();
          break;
        case 'isPaused':
          saved_port.postMessage(["isPaused", audio.isPaused()]);
          break;
        case 'setPlayingIndex':
          list.set("playing_index", args[0]);
          break;
        case 'getBkList':
          player.render();
          list = player_model.getPlayList();
          saved_port.postMessage(['onGetBkList', list]);
          break;
        default:
          console.warn("unknown message.");
          break;
      }
    }
  }
);
