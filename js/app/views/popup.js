define([
 "jquery",
 "underscore",
 "backbone"], function($, _, Backbone) {
   var PopupView = Backbone.View.extend({
     initialize: function() {
       this.list_view = ListView({model: new ListModel()});
       this.control_view = ControlView({model: new ControlModel()});
     }
   });

   //new PopupView({collection: new PopupColl()});
   return PopupView;
});
