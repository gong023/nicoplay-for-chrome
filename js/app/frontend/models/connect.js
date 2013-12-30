define(
  ["jquery", "underscore", "backbone"],
  function($, _, Backbone) {
    var ConnectModel = Backbone.Model.extend({
      initialize: function() {
        _.bindAll(this, "onMessage", "post");
        this.port = chrome.extension.connect();
        this.port.onMessage.addListener($.proxy(this.onMessage, this));
        chrome.extension.onConnect.addListener(function(port) {
          port.onMessage.addListener(this.onMessage);
        });
      },
      onMessage: function(req) {
        console.log('on');
        var method = _.first(_.values(req));
        var args = _.rest(_.values(req));

        switch(method) {
          case 'onGetBkList':
            console.log(args);
            break;
          default:
            break;
        }
      },
      post: function() {
        console.log('post');
        this.port.postMessage(arguments);
      }
    });

    return ConnectModel;
  }
);
