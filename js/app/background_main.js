require.config({
  baseUrl: "../js/app/background",
  paths: {
    jquery: "../../libs/jquery/jquery-min",
    underscore: "../../libs/underscore/underscore-min",
    backbone: "../../libs/backbone/backbone-min"
  }
});

require(
  ["models/audio"],
  function(AudioModel) {
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
