define(
  ['frontend/views/connect'],
  function(ConnectView) {
    describe('ConnectView', function() {
      it('be loaded correctly', function() {
        var func = function() { return new ConnectView() };
        expect(func).not.toThrow();
      });
    });
  }
);
