define(
  ['frontend/models/connect'],
  function(ConnectModel) {
    describe('ConnectModel', function() {
      var connect = null
      beforeEach(function() { connect = new ConnectModel() });

      describe('#initialize', function() {
        it('set port', function() {
          expect(connect.port).not.toBeFalsy();
        });

        it('be singleton', function() {
          var connectCompare = new ConnectModel();
          expect(connect).toBe(connectCompare);
        });
      });
    });
  }
);
