define(
  [
    'jquery', 'underscore', 'backbone',
    'frontend/views/popup/indicator',
    'frontend/views/popup/playlist'
  ],
  function($, _, Backbone, IndicatorView, ListView) {

    var ConnectView = Backbone.View.extend({
      onGetBkList: function(list) {
        var indicator = new IndicatorView();
        var playlist = new ListView();
        indicator.stop();
        playlist.showList(list);
      }
    });

    return ConnectView;
  }
);
