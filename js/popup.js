require.config({
  paths: {
    jquery: "libs/jquery/jquery-min",
    underscore: "libs/underscore/underscore-min",
    backbone: "libs/backbone/backbone-min"
  }
});

require(["app/main"], function(main) {
});
