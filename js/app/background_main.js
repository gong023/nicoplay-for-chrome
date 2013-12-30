require.config({
  paths: {
    jquery: "../libs/jquery/jquery-min",
    underscore: "../libs/underscore/underscore-min",
    backbone: "../libs/backbone/backbone-min",
    jquery_mockjax: '../libs/jquery/jquery.mockjax'
  }
});

require(
  ["background/models/player"],
  function(PlayerModel) {
//    var audio = new AudioModel();
//    var list = new ListModel();
    var player = new PlayerModel();
    this.port = chrome.extension.connect();

    chrome.extension.onConnect.addListener(function(port) {
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
          port.postMessage(["isPaused", audio.isPaused()]);
          break;
        case 'setPlayingIndex':
          list.set("playing_index", args[0]);
          break;
        case 'getBkList':
          list = player.getPlayList();
          console.log('back');
          console.log(list);
          port.postMessage('onGetBkList', list);
          break;
        default:
          console.warn("unknown message.");
          break;
      }
    }
  }
);
