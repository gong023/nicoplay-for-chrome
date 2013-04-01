var BackgroundModel = Backbone.Model.extend({
  initialize: function(arg) {
  },
  sendMessage: function(arg) {
    chrome.extension.sendMessage(arg, function(res) {
      console.log('popup.js responce');
    });
  }
});

var ListView = Backbone.View.extend({
  el: $('#list'),
  events: {
    "click #play": "clickPlay"
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    $(this.el).html(_.template($('#audio-template').html(), { play: "play" }));
  },
  clickPlay: function() {
    this.model.sendMessage({'src':'http://gong023.com/nicoplay/public/audio/all/2013-03-20/sm20382879.mp3'});
    this.model.sendMessage({'play':true});
  }
});
new ListView({model: new BackgroundModel()});
