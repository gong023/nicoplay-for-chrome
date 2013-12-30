define(
  ['background/models/history'],
  function(HistoryModel) {
    describe('HistoryModel', function() {
      describe('#initialize', function() {
        var flg = false;
        afterEach(function() { flg = false; });

        describe('success', function() {
           it('fetch list with 20 items', function() {
             history = new HistoryModel();
             setTimeout(function() { flg = true }, 1000);

             waitsFor(function() { return flg; }, 'fetch within 1sec');

             runs(function() {
               expect(history.get('list')).not.toBeUndefined();
               expect(history.get('list').length).toBe(20);
             });
           });
        });
      });
    });
  }
);
