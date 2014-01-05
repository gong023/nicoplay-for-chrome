define(
  ['frontend/views/popup/playlist'],
  function(ListView) {
    describe('ListView', function() {
      it('be loaded correctly', function() {
        var list = new ListView();
        var func = function() { return new ListView() };
        expect(func).not.toThrow();
      });
    });
  }
);
