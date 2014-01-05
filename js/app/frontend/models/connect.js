define(
  ['jquery', 'underscore', 'backbone',],
  function($, _, Backbone, ConnectView) {

    var ConnectModel = Backbone.Model.extend({
      constructor: function() {
        if (! ConnectModel.instance) {
          ConnectModel.instance = this;
          Backbone.Model.apply(ConnectModel.instance, arguments);
        }
        return ConnectModel.instance;
      },
      initialize: function() {
        this.port = chrome.extension.connect();
      }
    });

    return ConnectModel;
  }
);
