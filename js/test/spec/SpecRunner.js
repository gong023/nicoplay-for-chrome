require.config({
  baseUrl: "../app/",
  paths: {
    jquery: '../libs/jquery/jquery-min',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min',
    jquery_mockjax: '../libs/jquery/jquery.mockjax'
  }
});

require(
  [
    '../test/spec/frontend/models/popup',
    '../test/spec/background/models/audio',
    '../test/spec/background/models/list'
  ],
  function() {
  }
);
