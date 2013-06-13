define(
  [
    "frontend/views/popup",
    "frontend/models/popup/playlist"
  ],
  function(PopupView, ListModel) {

    var ListView = Backbone.View.extend({
      model: new ListModel(),
      el: $('#playlist'),
      initialize: function() {
        _.bindAll(this, "render", "showControl");
        this.parent = new PopupView();
        this.parent.model.on("change:is_shuffle", this.model.shuffle);
      },
      events: {
        "click .select": "showControl"
      },
      render: function() {
        this.model.fetch({
          success: $.proxy(function(model) {
            var list = (this.model.get("use_mock")) ? model.attributes.mock : model.toJSON();
            $(this.el).html(_.template($("#list").html(), {list: list}));

            this.model.set('list', list);
            this.model.set("list_default", _.clone(list));
          }, this),
          error: $.proxy(function(error) {
            alert("failed to get resource.");
            console.warn(error);
          }, this)
        });
      },
      showControl: function(ev) {
        this.parent.model.set("view", "control");
        this.parent.model.set({"playing_index": $(ev.target).val()});
      }
    });

    return ListView;
  }
);
