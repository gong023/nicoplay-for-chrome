define(
  ['jquery', 'underscore', 'backbone'],
  function($, _, Backbone) {
    var IndicatorView = Backbone.View.extend({
      el: $('#indicator'),
      initialize: function() {
      },
      start: function() {
        // このへんあとで
        $('#indicator').text('loading');
      },
      stop: function() {
        $('#indicator').text('');
      }
    });

    return IndicatorView;
  }
)
