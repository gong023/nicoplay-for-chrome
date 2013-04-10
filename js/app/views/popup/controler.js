define([
 "jquery",
 "underscore",
 "backbone"], function($, _, Backbone) {
   var ControlView = Backbone.View.extend({
     el: $("#control"),

     showControl: function() {
       var list = document.getElementById("list");
       while (list.hasChildNodes()) list.removeChild(list.lastChild);

       var bt_back = document.createElement("button");
       bt_back.setAttribute("id", "playlist");
       bt_back.setAttribute("value", "back");
       bt_back.addEventListener("click", $.proxy(this.showPlayList, this));
       document.getElementById("control").appendChild(bt_back);

       var bt_play = document.createElement("button");
       bt_play.setAttribute("id", "playlist");
       bt_play.setAttribute("value", "play");
       bt_play.addEventListener("click", $.proxy(this.clickPlay, this));
       document.getElementById("control").appendChild(bt_play);
     }
   });

   return ControlView;
});
