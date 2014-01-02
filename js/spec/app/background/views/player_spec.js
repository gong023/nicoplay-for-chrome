define(
  ['background/views/player'],
  function(PlayerView) {
    describe('PlayerModel', function() {
      describe('#render', function() {
        it('draw playlist', function() {
          var player = new PlayerView();
          player.render();
          expect($("#bkPlayList").val()).not.toBeFalsy();
        });
      });
    });
  }
) ;
