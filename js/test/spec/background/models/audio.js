define(
  ['background/models/audio'],
  function(AudioModel) {
    describe("Background AudioModel", function() {
      var audio = null;
      beforeEach(function() {
        audio = new AudioModel();
      });

      it("should be singleton", function() {
        var audioCompare = new AudioModel();
        expect(audio).toBe(audioCompare);
      });

      it("should set single audio to html", function() {
        expect($("audio").length).toBe(1);
      });

      it("should set single index to html", function() {
        expect($("#bkIndex").length).toBe(1);
      });

      afterEach(function() {
        $("audio").empty();
        $("#bkIndex").empty();
      });

    });

    describe("Background AudioModel.validate()", function() {
      var audio = null;
      var error_callback = null;
      beforeEach(function() {
        error_callback = jasmine.createSpy("validate error");
        audio = new AudioModel();
        audio.on("error", error_callback);
      });

      it("should validate when src is invalid", function() {
        audio.set({src: false, validate: true});
        expect(error_callback).toHaveBeenCalled();

        audio.set({src: null, validate: true});
        expect(error_callback).toHaveBeenCalled();

        audio.set({src: "", validate: true});
        expect(error_callback).toHaveBeenCalled();
      });
    });

    xdescribe("Background AudioModel.playOnSrc()", function() {

      it("should be called on changed src", function() {
        AudioModel.playOnSrc();
        spyOn(AudioModel, "playOnSrc");
        AudioModel.trigger("change:src", ["sample src"]);
        expect(AudioModel.playOnSrc).toHaveBeenCalled();

        spyOn(AudioModel, "testFunc");
        AudioModel.on("change:hoge", AudioModel.testFunc);
        AudioModel.trigger("change:hoge", []);
        expect(AudioModel.testFunc).toHaveBeenCalled();
      });

      it("should throw exception when there is no src", function() {
        AudioModel.set("src", null);
        expect(AudioModel.playOnSrc).toThrow();
      });
    });

    xdescribe("Background AudioModel.setSrcOnPlayingIndex()", function() {
      beforeEach(function() {
        spyOn(AudioModel, "playOnSrc");
      });

      it("should be called on changed playing_index", function() {
      });

      it("should set index 0 when index is over list count", function() {
        AudioModel.listModel.set("playing_index", 10);
        expect(AudioModel.setSrcOnPlayingIndex).not.toThrow();
        expect(AudioModel.playOnSrc).toHaveBeenCalled();
      });
    });
  }
);
