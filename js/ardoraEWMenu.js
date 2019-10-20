$(function(){
      $(".fg-button").hover(
          function(){ $(this).removeClass("ui-state-default").addClass("ui-state-focus"); },
      	   function(){ $(this).removeClass("ui-state-focus").addClass("ui-state-default"); }
       );
   $("#flat1").menu({
       content: $("#flat1").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat6").menu({
       content: $("#flat6").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat9").menu({
       content: $("#flat9").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat11").menu({
       content: $("#flat11").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat18").menu({
       content: $("#flat18").next().html(),
       showSpeed: 400,
       flyOut: true
   });
});
$(function () {
     $("#dock").Fisheye({
     maxWidth: 55,
     items: "a", itemsText: "span", container: ".dock-container",
     itemWidth: 50,
     proximity: 60,
     alignment : "right",
     valign: "bottom", halign : "center"});
});
function cargar(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").load(function() {$(this).contents().find("body").css({"text-align":"inherit"});});
}
function cargarIma(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").load(function() {$(this).contents().find("body").css({"text-align":"center"});});
}
