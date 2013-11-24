define(
  ['background/models/list'],
  function(ListModel) {

    describe("Background ListModel", function() {

      it("should be singleton", function() {
        var list = new ListModel();
        var listCompare = new ListModel();
        expect(list).toBe(listCompare);
      });

      xit("should be set list by xhr in initialize", function() {
        var list = new ListModel();
        ugly_sleep();
        //expect(list.get("list").length).toBeGreaterThan(1);
        console.log(list.get("list"));
        //expect(list.get("list_default").length).toBeGreaterThan(1);
      });

    });

    describe("Background ListModel.getLength()", function() {
      var list = null;
      beforeEach(function() {
        list = new ListModel();
        list.set("list", list.xhr.get("mock"));
        list.set("list_default", list.xhr.get("mock"));
      });

      it("should return length of list", function() {
        var ret = list.getLength();
        expect(ret).toBe(3); // 3 is mock length.
      });
    });

    describe("Background ListModel.shuffle()", function() {
      var list = null;
      beforeEach(function() {
        list = new ListModel();
        list.set("list", list.xhr.get("mock"));
      });

      it("should shuffle list when flag is on", function() {
        list.set("is_shuffle", true);
        var origin = _.clone(list.get("mock"));
        list.shuffle();
        var i = 10;
        while(i--) {
          if (list.get("list") !== origin) {
            expect(list.get("list")).not.toEqual(origin);
            break;
          }
        }
      });

      it("should redo shuffle list when flag is off", function() {
        list.set("is_shuffle", false);
        var origin = _.clone(list.get("list"));
        list.shuffle();
        expect(list.get("list")).toEqual(origin);
      });
    });
  }
);
