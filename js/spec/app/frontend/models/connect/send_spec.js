define(
  ['frontend/models/connect/send'],
  function(SendModel) {
    describe('SendModel', function() {
      it('be loaded correctly', function() {
        var func = function() { return new SendModel(); };
        expect(func).not.toThrow();
      });

      describe('#initialize', function() {
        var send = null;
        beforeEach(function() { send = new SendModel() });
        it('has parent', function() {
          expect(send.parent).not.toBeFalsy();
        });
      });
    });
  }
);
