define(
  ['Background/models/list/xhr'],
  function(XhrModel) {
    describe("XhrModel", function(){
      describe("setList()", function() {
        var value, flag;
        it("should set loaded flag true", function() {
          var xhr = new XhrModel();

          runs(function() {
            flag = false;
            value = 0;

            setTimeout(function() {
              flag = true;
              xhr.setList();
              console.log(xhr.get('loaded'));
            }, 500);
          });

          waitsFor(function() {
            value++;
            return flag;
          }, "flag should be true", 750);

          runs(function() {
            expect(value).toBeGreaterThan(0);
            expect(xhr.get('loaded')).toBe(true);
          });
        });
      });
    });
  }
);
