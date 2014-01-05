define(
  ['frontend/models/connect/receive'],
  function(ReceiveModel) {
    describe('ReceiveModel', function() {
      it('be loaded correctly', function() {
        var func = function() { return new ReceiveModel(); };
        expect(func).not.toThrow();
      });

      describe('#initialize', function() {
        var receive = null;
        beforeEach(function() { receive = new ReceiveModel() });
        it('has parent', function() {
          expect(receive.parent).not.toBeFalsy();
        });
      });
    });
  }
);
