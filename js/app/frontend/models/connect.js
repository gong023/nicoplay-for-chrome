define(
  [],
  function() {
    var ConnectModel = Backbone.Model.extend({
      initialize: function() {
        _.bindAll(this, "onMessage", "post");
        this.port = chrome.extension.connect();
        this.port.onMessage.addListener($.proxy(this.onMessage, this));
      },
      onMessage: function() {
      },
      post: function() {
        this.port.postMessage(arguments);
      }
    });

    return ConnectModel;
  }
);
