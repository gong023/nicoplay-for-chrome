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
    '../test/spec/frontend/popup',
    '../test/spec/frontend/popup/control',
    '../test/spec/frontend/popup/playlist'
  ],
  function() {
  }
);
