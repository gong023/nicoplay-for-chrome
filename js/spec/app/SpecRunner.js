require.config({
  baseUrl: "../app/",
  paths: {
    jquery: '../libs/jquery/jquery-min',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(
  [
    '../spec/app/frontend/models/connect_spec',
    '../spec/app/frontend/views/indicator_spec',
    '../spec/app/background/collections/historylist_spec',
    '../spec/app/background/models/player_spec',
    '../spec/app/background/models/history_spec',
    '../spec/app/background/views/player_spec'
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
