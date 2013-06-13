define(
  ['frontend/models/popup'],
  function(PopupModel) {
    describe("PopupModel", function() {
      var popup = null;
      beforeEach(function() {
        popup = new PopupModel();
      });

      it("should be singleton", function() {
        var popupCompare = new PopupModel();
        expect(popup).toBe(popupCompare);
      });
    });

    describe("PopupModel.switchView", function() {
      var popup = null;
      beforeEach(function() {
        popup = new PopupModel();
      });

      it("should hide control when view is list", function() {
        popup.set("view", "list");
        var ret = popup.switchView();
        expect(ret).toEqual(["control", "playlist", "fast"]);
      });

      it("should hide playlist when view is control", function() {
        popup.set("view", "control");
        var ret = popup.switchView();
        expect(ret).toEqual(["playlist", "control", "fast"]);
      });

      it("should throw exception when unknown view is selected", function() {
        popup.set("view", "unknown");
        expect(popup.switchView).toThrow();
      })
    });
  }
);
