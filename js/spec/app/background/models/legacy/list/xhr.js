define(
  ['Background/models/list/xhr'],
  function(XhrModel) {
    describe("XhrModel", function(){
      describe("setList()", function() {
        beforeEach(function() {
          this.xhr = new XhrModel();
          this.xhr.setList();
        });

        it("should set loaded flag true", function() {

          expect(this.xhr.get('loaded')).toBe(true);
//          runs(function() {
//            flag = false;
//            value = 0;
//
//            setTimeout(function() {
//              flag = true;
//              console.log(xhr.get('loaded'));
//            }, 500);
//          });
//
//          waitsFor(function() {
//            value++;
//            return flag;
//          }, "flag should be true", 750);
//
//          runs(function() {
//            expect(value).toBeGreaterThan(0);
//            expect(xhr.get('loaded')).toBe(true);
//          });
        });
      });
    });
  }
);
