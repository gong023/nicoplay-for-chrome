define(
  [
    'jquery', 'underscore', 'backbone',
    'frontend/models/connect'
  ],
  function($, _, Backbone, ConnectModel) {
    var SendModel = Backbone.Model.extend({
      initialize: function() {
        _.bindAll(this, 'post');
        this.parent = new ConnectModel();
      },
      post: function() {
        this.parent.port.postMessage(arguments);
      }
    });

    return SendModel;
  }
);
