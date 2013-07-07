define(
  ['background/models/audio'],
  function(AudioModel) {
    describe("Background AudioModel", function() {

      it("should set single audio to html", function() {
        expect($("audio").length).toBe(1);
      });
    });

    describe("Background AudioModel.playOnSrc()", function() {

      it("should be called on changed src", function() {
        AudioModel.playOnSrc();
//        spyOn(AudioModel, "playOnSrc");
//        AudioModel.trigger("change:src", ["sample src"]);
//        expect(AudioModel.playOnSrc).toHaveBeenCalled();
//
        spyOn(AudioModel, "testFunc");
        AudioModel.on("change:hoge", AudioModel.testFunc);
        AudioModel.trigger("change:hoge", []);
        expect(AudioModel.testFunc).toHaveBeenCalled();
      });
    });

    xdescribe("Background AudioModel.setSrcOnPlayingIndex()", function() {
      beforeEach(function() {
        spyOn(AudioModel, "playOnSrc");
      });

      xit("should be called on changed playing_index", function() {
      });

      it("should set index 0 when index is over list count", function() {
        AudioModel.listModel.set("playing_index", 10);
        expect(AudioModel.setSrcOnPlayingIndex).not.toThrow();
        expect(AudioModel.playOnSrc).toHaveBeenCalled();
      });
    });
  }
);
