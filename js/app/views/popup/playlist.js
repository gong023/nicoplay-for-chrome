define([
 "jquery",
 "underscore",
 "backbone"], function($, _, Backbone) {
   var ListView = Backbone.View.extend({
     el: $('#list'),
     events: {
       //"click #play": "showControl",
       "click #playlist": "showPlaylist"
     },

     initialize: function() {
       this.render();
     },

     render: function() {
       this.showPlayList();
     },

     showPlayList: function() {
       var control = document.getElementById("control");
       while (control.hasChildNodes()) control.removeChild(control.lastChild);

       var list = this.model.get("list");
       for (var i in list) {
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(list[i].title));
         document.getElementById("list").appendChild(li);

         var bt = document.createElement("button");
         bt.setAttribute("id", "play");
         bt.setAttribute("value", "play");
         document.getElementById("list").appendChild(bt);
       }
     },

     clickPlay: function() {
       var domain = "http://gong023.com/nicoplay/public/audio/all/";
       var list = this.model.get("list")[this.model.get("index")];
       console.log(domain + list.ctime + "/" + list.video_id + ".mp3");
       this.model.sendMessage({
         "setSrc": [domain + list.ctime + "/" + list.video_id + ".mp3"]
       });
       this.model.sendMessage("setPlay");
     }
   });

   return ListView;
 });
