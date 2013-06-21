define(
  ['frontend/models/popup/control'],
  function(ControlModel) {
    xdescribe("ControlModel", function() {
    });

    describe("ControlModel.play()", function() {
      var controlModel = null;
      beforeEach(function() {
        controlModel = new ControlModel();
        controlModel.listModel.set("list", controlModel.listModel.get("mock"));
        spyOn(controlModel.port, "postMessage");
      });

      afterEach(function() {
        controlModel = null;
      });

      it("should post message to background page", function() {
        expect(controlModel.play).not.toThrow();
        expect(controlModel.port.postMessage).toHaveBeenCalled();
      });

      it("should throw exception when no list is set", function() {
        controlModel.listModel.set("list", false);
        expect(controlModel.play).toThrow();
        expect(controlModel.port.postMessage).not.toHaveBeenCalled();
      });

      it("should set index 0 when index is over", function() {
        controlModel.parent.set("playing_index", 10);
        expect(controlModel.play).not.toThrow();
        expect(controlModel.port.postMessage).toHaveBeenCalled();
        expect(controlModel.parent.get("playing_index")).toBe(0);
      });

      it("should set index max when index is less than 0", function() {
        controlModel.parent.set("playing_index", -1);
        expect(controlModel.play).not.toThrow();
        expect(controlModel.port.postMessage).toHaveBeenCalled();
        expect(controlModel.parent.get("playing_index")).toBe(2); // given by mock
      });
    });

    describe("ControlModel.togglePlay()", function() {
      var controllModel = null;
      beforeEach(function() {
        controlModel = new ControlModel();
        spyOn(controlModel.port, "postMessage");
      });

      afterEach(function() {
        controlModel = null;
      });

      it("should post Message to background", function() {
        expect(controlModel.togglePlay).not.toThrow();
        expect(controlModel.port.postMessage).toHaveBeenCalled();
      });
    });
  }
);
