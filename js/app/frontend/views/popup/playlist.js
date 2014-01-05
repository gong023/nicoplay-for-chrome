define(
  [
    'frontend/models/connect/send',
    'frontend/views/popup',
    'frontend/views/popup/indicator'
  ],
  function(SendModel, PopupView, IndicatorView) {

    var ListView = Backbone.View.extend({
      el: $('#playlist'),
      initialize: function() {
        _.bindAll(this, 'render', 'showList', 'showControl');
        this.parent = new PopupView();
        this.send = new SendModel();
        this.indicator = new IndicatorView();
      },
      events: {
        'click .select': 'showControl'
      },
      render: function() {
        this.send.post('getBkList');
        this.indicator.start();
      },
      showList: function(list) {
        $(this.el).html(_.template($('#list').html(), { list: list }));
      },
      showControl: function(ev) {
        try {
          this.send.post('setPlayingIndex', $(ev.target).val());
        } catch(e) {
          alert('there is no list');
          return;
        }
        this.parent.model.set('view', 'control');
      }
    });

    return ListView;
  }
);
