require.config({
  baseUrl: "../js/app/background",
  paths: {
    jquery: "../../libs/jquery/jquery-min",
    underscore: "../../libs/underscore/underscore-min",
    backbone: "../../libs/backbone/backbone-min"
  }
});

require(
  ["views/audio"],
  function(AudioView) {
    new AudioView();
  }
);
