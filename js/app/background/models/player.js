define(
    [
        "jquery", "underscore", "backbone",
        "background/collections/audiolist"
        "background/models/audio"
    ],
    function($, _, Backbone, AudioCollection, Audio) {
        var player = Backbone.Model.extend({
            defaults{
                playing_index: 0,
                page_index: 0
            },
            initialize: function() {
                _.bindAll(this, onPlayingIndex, onPageIndex);
            },
            onPlayingIndex: function() {
                //次の曲を再生する
            },
            onPageIndex: function() {
                //collectionにaddする
            }
        });

        return player;
    }
);
