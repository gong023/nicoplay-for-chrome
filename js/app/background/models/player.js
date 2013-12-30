define(
  [
    "jquery", "underscore", "backbone",
    "background/collections/historylist"
  ],
  function($, _, Backbone, HistoryCollection) {
    var PlayerModel = Backbone.Model.extend({
      defaults: {
        playing_index: 0,
        page_index: 0
      },
      initialize: function() {
        this.set('collection', new HistoryCollection());
        this.get('collection').add();
      },
      getPlayList: function() {
        return this.get('collection').at(0).get('list');
      },
      onPlayingIndex: function() {
        //次の曲を再生するとか
      },
      onPageIndex: function() {
        //collectionにaddするとか
      }
    });

    return PlayerModel;
  }
);
