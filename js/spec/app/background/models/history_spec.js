define(
    ['background/models/history'],
    function(HistoryModel) {
        describe('HistoryModel', function() {

            describe('#initialize', function() {
                it('set list', function() {
                    waitsFor(function() {
                        return new HistoryModel;
                    }, 1000);
                    runs(function() {
                        expect(true).toBeTruthy;
                        });
                });
            })

        });
    }
);
