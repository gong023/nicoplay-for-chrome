define([
 "jquery",
 "underscore",
 "backbone"], function($, _, Backbone) {
   var ListModel = Backbone.Model.extend({
     defaults: {
       "index": 0,
       "list": {
         "0": {
           "ctime": "2013-04-04",
           "title": "MAD　這いよれ!カーズさんW-故意はカーズの隷也-",
           "video_id": "sm20517586"
         },
         "1": {
           "ctime": "2013-04-03",
           "title": "❤「魔法少女幸福論」歌ってみた　ver.lino ❤",
           "video_id": "sm20517586"
         }
       }
     },
     initialize: function(arg) {
     },
     sendMessage: function(arg) {
       chrome.extension.sendMessage(arg, function(res) {
         console.log('popup.js responce');
       });
     }
   });

   return ListModel;
});
