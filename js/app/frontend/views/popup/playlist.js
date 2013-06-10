define(
  ["views/popup", "models/popup", "models/popup/playlist", "models/popup/control"],
  function(PopupView, PopupModel, ListModel, ControlModel) {

    var ListView = PopupView.extend({
      model: ListModel,
      el: $('#playlist'),
      initialize: function() {
        _.bindAll(this, "render", "showControl");
        this.popupModel.on("change:is_shuffle", this.model.shuffle);
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
          error: function(error) {
            alert("failed to get resource.");
            console.warn(error);
          }
        });
      },
      showControl: function(ev) {
        this.popupModel.set("view", "control");
        this.popupModel.set({"playing_index": $(ev.target).val()});
      }
    });

    return ListView;
  }
);
