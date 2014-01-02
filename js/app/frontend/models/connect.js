define(
  ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {

    var ConnectModel = Backbone.Model.extend({
      initialize: function() {
        _.bindAll(this, 'onMessage', 'post');
        this.port = chrome.extension.connect();
        this.port.onMessage.addListener(this.onMessage);
      },
      onMessage: function(req) {
        // TODO:送る側とインターフェースが違う
        var method = _.first(req);
        var args = _.rest(req);

        switch(method) {
          case 'onGetBkList':
            break;
          default:
            break;
        }
      },
      post: function() {
        this.port.postMessage(arguments);
        playlist = chrome.extension.getBackgroundPage().$("#bkPlayList").val();
        console.log(playlist);
        return playlist;
      }
    });

    return ConnectModel;
  }
);
