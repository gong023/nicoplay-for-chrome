define(
  [
    'jquery', 'underscore', 'backbone',
    'background/models/player'
  ],
  function($, _, Backbone, PlayerModel) {
    var PlayerView = Backbone.View.extend({
      el: $('player'),
      model: new PlayerModel(),
      initialize: function() {
        _.bindAll(this, 'render');
      },
      render: function() {
        list = this.model.getPlayList();
        $("#bkPlayList").val(JSON.stringify(list));
      }
    });
    return PlayerView;
  }
)