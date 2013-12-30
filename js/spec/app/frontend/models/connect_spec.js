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
      });

      // 実際にbackground使うかモック使うかしなければならない
      xdescribe('#post', function() {
        describe('getBkList', function() {
          it('return a list', function() {
            expect(connect.post('getBkList')).not.toBeFalsy();
          })
        });
      });
    });
  }
);
