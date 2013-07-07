define(
  ['background/models/list'],
  function(ListModel) {
    describe("Background ListModel", function() {
      var list = null;
      beforeEach(function() {
        list = new ListModel();
      });

      it("should be singleton", function() {
        var listCompare = new ListModel();
        expect(list).toBe(listCompare);
      });

      xit("should be set list by xhr in initialize", function() {
        fetch_callback = jasmine.createSpy("fetch_callback");
        jasmine.Clock.useMock();
        jasmine.Clock.useMock();
        list.fetch({
          success: function() {
            fetch_callback();
          },
          error: function() {
          }
        });

        jasmine.Clock.tick(5);
        expect(fetch_callback).toHaveBeenCalled();
      });

    });

    describe("Background ListModel.getLength()", function() {
      var list = null;
      beforeEach(function() {
        list = new ListModel();
        list.set("list", list.get("mock"));
      });

      it("should return length of list", function() {
        var ret = list.getLength();
        expect(ret).toBe(3); // given by mock
      });
    });

    describe("Background ListModel.shuffle()", function() {
      var list = null;
      beforeEach(function() {
        list = new ListModel();
        list.set("list", list.get("mock"));
      });

      it("should shuffle list when flag is on", function() {
        list.set("is_shuffle", true);
        var origin = _.clone(list.get("list"));
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
        list.set("list_default", list.get("list"));
        var origin = _.clone(list.get("list"));
        list.shuffle();
        expect(list.get("list")).toEqual(origin);
      });
    });
  }
);
