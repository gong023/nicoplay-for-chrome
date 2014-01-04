define(
  ['frontend/views/popup/indicator'],
  function(IndicatorView) {
    describe('IndicatorView', function() {
      var indicator = null;
      beforeEach(function() { indicator = new IndicatorView(); });
      afterEach(function() { $('#indicator').text(''); });

      describe('#start', function() {
        it('show reaction', function() {
          indicator.start();
          expect($('#indicator').text()).toBeTruthy();
        });
      });
      describe('#stop', function() {

        it('delete reaction', function() {
          indicator.stop();
          expect($('#indicator').text()).toBeFalsy();
        });
      });
    });
  }
)