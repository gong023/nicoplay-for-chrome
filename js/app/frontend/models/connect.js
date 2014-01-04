define(
  [
    // View直接触りがち
    'jquery', 'underscore', 'backbone',
    'frontend/views/popup/indicator',
    'frontend/views/popup/playlist'

  ],
  function($, _, Backbone, IndicatorView, ListView) {

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
            var indicator = new IndicatorView();
            indicator.stop();
//            console.log(args[0]);
//            playlist.showList(args[0]);
            break;
          default:
            break;
        }
      },
      post: function() {
        this.port.postMessage(arguments);
      }
    });

    return ConnectModel;
  }
);
