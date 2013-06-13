define(
  ["frontend/models/popup/playlist"],
  function(ListModel) {
    describe("ListModel", function() {
      var listModel = null;
      beforeEach(function() {
        listModel = new ListModel();
      });

      it("should be singleton", function() {
        var listModelCompare = new ListModel();
        expect(listModel).toBe(listModelCompare);
      });
    });
  }
);
