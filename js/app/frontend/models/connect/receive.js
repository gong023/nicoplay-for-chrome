define(
  [
    'jquery', 'underscore', 'backbone',
    'frontend/models/connect',
    'frontend/views/connect'
  ],
  function($, _, Backbone, ConnectModel, ConnectView) {
    var ReceiveModel = Backbone.Model.extend({
      initialize: function() {
        _.bindAll(this, 'onMessage');
        this.parent = new ConnectModel();
        this.parent.port.onMessage.addListener(this.onMessage);
        this.view = new ConnectView();
      },
      onMessage: function(req) {
        // TODO:送る側とインターフェースが違う
        var method = _.first(req);
        var args = _.rest(req);

        switch(method) {
          case 'onGetBkList':
            this.view.onGetBkList(args[0]);
            break;
          default:
            break;
        }
      }
    });

    return ReceiveModel;
  }
);
