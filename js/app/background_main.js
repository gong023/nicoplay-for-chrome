require.config({
  paths: {
    jquery: "../libs/jquery/jquery-min",
    underscore: "../libs/underscore/underscore-min",
    backbone: "../libs/backbone/backbone-min",
    jquery_mockjax: '../libs/jquery/jquery.mockjax'
  }
});

require(
  ["background/models/audio", "background/models/list"],
  function(AudioModel, ListModel) {
    new ListModel();
    chrome.extension.onConnect.addListener(function(port) {
      port.onMessage.addListener(function(req) {
        var method = _.first(req);
        var args = _.rest(req);
        var model = AudioModel;

        switch(method) {
          case 'play':
            model.set({'src': _.first(args)}, {validate: true});
            break;
          case 'togglePlay':
            model.togglePlay();
            break;
          case 'isPaused':
            port.postMessage(["isPaused", model.isPaused()]);
          break;
          default:
            console.warn("unknown message.");
          break;
        }
      })
    });
  }
);
