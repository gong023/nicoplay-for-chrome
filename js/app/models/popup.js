define([
 "jquery",
 "underscore",
 "backbone"], function($, _, Backbone) {
   var PopupModel = Backbone.Model.extend({
     defaults: {
       "view": "list"
     }
   });

   return PopupModel;
});
