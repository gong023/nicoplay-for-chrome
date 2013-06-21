define(
  ["frontend/models/popup/playlist"],
  function(ListModel) {
    describe("ListModel", function() {
      var listModel = null;
      beforeEach(function() {
        listModel = new ListModel();
      });

      afterEach(function() {
        listModel = null;
      });

      it("should be singleton", function() {
        var listModelCompare = new ListModel();
        expect(listModel).toBe(listModelCompare);
      });

    });

    xdescribe("ListModel.list", function() {
      var listModel = null;
      beforeEach(function() {
        listModel = new ListModel();
      });

      afterEach(function() {
        listModel = null;
      });

      it("should be set list by xhr", function() {
        listModel.fetch({
          success: $.proxy(function(data) {
            listModel.set("list", data.attributes.mock);
          }, this),
          error: $.proxy(function() {
            console.warn("fetch error");
          }, this)
        });

        $.proxy(setTimeout(function() {
          var ret = _.isObject(listModel.get("list"));
          expect(ret).toBe(true);
        }, 1000), this);
      });
    });

    describe("ListModel.getLength()", function() {
      var listModel = null;
      beforeEach(function() {
        listModel = new ListModel();
        listModel.set("list", listModel.get("mock"));
      });

      afterEach(function() {
        listModel = null;
      });

      it("should return length of list", function() {
        var ret = listModel.getLength();
        expect(ret).toBe(3); // given by mock
      });
    });

    describe("ListModel.shuffle()", function() {
      var listModel = null;
      beforeEach(function() {
        listModel = new ListModel();
        listModel.set("list", listModel.get("mock"));
      });

      afterEach(function() {
        listModel = null;
      });

      it("should shuffle list when flag is on", function() {
        listModel.parent.set("is_shuffle", true);
        var origin = _.clone(listModel.get("list"));
        listModel.shuffle();
        var i = 10;
        while(i--) {
          if (listModel.get("list") !== origin) {
            expect(listModel.get("list")).not.toEqual(origin);
            break;
          }
        }
      });

      it("should redo shuffle list when flag is off", function() {
        listModel.parent.set("is_shuffle", false);
        listModel.set("list_default", listModel.get("list"));
        var origin = _.clone(listModel.get("list"));
        listModel.shuffle();
        expect(listModel.get("list")).toEqual(origin);
      });
    });
  }
);
