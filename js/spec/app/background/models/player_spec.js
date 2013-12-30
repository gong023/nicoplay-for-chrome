define(
  ['background/models/player'],
  function(PlayerModel) {
    describe('PlayerModel', function() {
      var player = null;
      beforeEach(function() { player = new PlayerModel() });

      describe('#initialize', function() {
        it('set collection with 1 model', function() {
          expect(player.get('collection')).not.toBeFalsy();
          expect(player.get('collection').length).toBe(1);
        });
      });

      describe('#getPlayList', function() {
        var flg = null;
        afterEach(function() { flg = false; });

        it('return list to play in model', function() {
          setTimeout(function() { flg = true }, 1000);

          waitsFor(function() { return flg; }, 'wait PlayerModel fetch');

          runs(function() {
            expect(player.getPlayList()).not.toBeFalsy();
          });
        });
      });
    });
  }
) ;