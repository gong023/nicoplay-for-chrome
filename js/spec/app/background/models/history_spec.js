define(
  ['background/models/history'],
  function(HistoryModel) {
    describe('HistoryModel', function() {
      describe('#fetch', function() {
        var history = null;
        var flg = false;

        beforeEach(function() { history = new HistoryModel(); });
        afterEach(function() { flg = false; });

        it('has list with 20 items', function() {
          history.fetch({ success: $.proxy(function() { flg = true }, this)});

          waitsFor(function() { return flg; }, 'fetch within 1 sec', 1000);

          runs(function() {
            expect(history.get('list')).not.toBeUndefined();
            expect(history.get('list').length).toBe(20);
          });
        });
      })
    });
  }
);
