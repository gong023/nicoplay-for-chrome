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
//    '../test/spec/frontend/models/popup',
//    '../test/spec/background/models/audio',
//    '../test/spec/background/models/list',
    '../test/spec/background/models/list/xhr'
  ],
  function() {
  }
);
(function() {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var currentWindowOnload = window.onload;

  window.onload = function() {
    if (currentWindowOnload) {
      currentWindowOnload();
    }
    execJasmine();
  };

  function execJasmine() {
    jasmineEnv.execute();
  }

})();
