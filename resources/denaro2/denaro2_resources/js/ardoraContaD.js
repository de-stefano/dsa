//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
loadMoney();
$(".draggable").draggable({revert: "invalid"});
$("#drop").droppable({accept: ".draggable",drop: function(event, ui){var dropped=ui.draggable;var droppedOn = $(this);var className=$(dropped).attr("src").substr($(dropped).attr("src").lastIndexOf("/")+1);className=className.substr(0,className.lastIndexOf("."));$(dropped).removeClass("c"+className);$(dropped).addClass("rec");$(dropped).detach().css({top:0,left:0}).appendTo(droppedOn);calIt();}});
$("#drop").sortable();
$("#origin").droppable({accept: ".draggable",drop: function(event, ui) {$(this).removeClass("border").removeClass("over");var dropped = ui.draggable;var droppedOn = $(this);$(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);$(dropped).removeClass("rec");
var className=$(dropped).attr("src").substr($(dropped).attr("src").lastIndexOf("/")+1);className=className.substr(0,className.lastIndexOf("."));$(dropped).addClass("c"+className);calIt();}});
}
function loadMoney(){
$(".rec").each(function(key, element){$(this).detach().css({top:0,left:0}).appendTo("#origin");$(this).removeClass("rec");
var className=$(this).attr("src").substr($(this).attr("src").lastIndexOf("/")+1);className=className.substr(0,className.lastIndexOf("."));$(this).addClass("c" + className);});
totCentFixed=ce[ram_G[indexGame]];totEurosFixed=eu[ram_G[indexGame]];paintScore();
var newHtml="";if ($.trim(im[ram_G[indexGame]])){newHtml='<img id="imaL" class="imaLeft" alt="Ima" src="denaro2_resources/media/'+im[ram_G[indexGame]]+'">';}
newHtml=newHtml+te[ram_G[indexGame]];$("#actText").html(newHtml);
if ($.trim(im[ram_G[indexGame]])) {$( "#imaL" ).css("cursor","pointer");$( "#imaL" ).click(function() {imaUp("denaro2_resources/media/G" + im[ram_G[indexGame]])});}
$("#actText").css("minHeight",imaH[ram_G[indexGame]]);$(".buttonAu").remove();
if ($.trim(a1[ram_G[indexGame]])){$("#origin").append('<img class="buttonAu" src="denaro2_resources/media/sound.png"/>');
$("audio").each(function(){this.pause();});document.getElementById(a1[ram_G[indexGame]]).play();$(".buttonAu").click(function(){document.getElementById(a1[ram_G[indexGame]]).play();});}
}
function imaUp(ima) {$("body").css("overflow", "hidden");var aW=$("#ardoraActCanvas").attr("width");var aH=$("#ardoraActCanvas").attr("height");$("#ardoraActCanvas").attr({"width": $(window).width(),"height": $(window).height()});document.getElementById("ardoraActCanvas").style.zIndex = 5;
document.getElementById("ardoraActCanvas").style["visibility"] = "visible";var alpha=0;var delta=0.03;var canvas = document.getElementById("ardoraActCanvas");var context = canvas.getContext("2d");context.beginPath();
context.fillStyle = "rgba(0, 0, 0, 0.25)";context.fillRect(0, 0, context.canvas.width, context.canvas.height);context.fill();var imageObj=new Image();
imageObj.onload = function() {var xCenterIma=($("#ardoraActCanvas").width()-imageObj.width)/2;var yCenterIma=($("#ardoraActCanvas").height()-imageObj.height)/2;context.beginPath();
context.shadowColor = "rgba(0,0,0,0.25)";context.shadowBlur=10;context.shadowOffsetX=10;context.shadowOffsetY=10;context.fill();context.beginPath();context.strokeStyle = "rgba(0,0,0,1)";
context.fillStyle = "rgba(255,255,255,1)";context.fillRect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);context.fill();context.rect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);
context.stroke();context.fill();context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;loop();
function loop() {alpha += delta;if (alpha <= 1) {context.clearRect(xCenterIma, yCenterIma, imageObj.width, imageObj.height);context.globalAlpha=alpha;context.drawImage(imageObj, xCenterIma, yCenterIma);requestAnimationFrame(loop);}}};
imageObj.src=ima;$("#ardoraActCanvas").css("cursor","pointer");$("#ardoraActCanvas").click(function() {document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";
canvas.width=canvas.width;$("body").css("overflow", "visible");$("#ardoraActCanvas").attr({"width":aW,"height":aH});});}
window.requestAnimationFrame=(function() {return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {window.setTimeout(callback, 10000 / 60);};})();
function calIt(){totCent=0;totEuros=0;$("#drop img").each(function (index) {var className = $(this).attr("src").substr($(this).attr("src").lastIndexOf("/") + 1);className = className.substr(0, className.lastIndexOf("."));
if (values[jQuery.inArray("c"+className,m)]<1000){totCent=totCent+values[jQuery.inArray("c"+className,m)];}else{totEuros=totEuros+values[jQuery.inArray("c"+className,m)];}})
while (totCent>999){totEuros=totEuros+1000;totCent=totCent-1000;}
}
function paintScore(){
$("#score").animate({marginTop:"150px"})
$("#scoreC").animate({marginTop:"150px"})
$("#scoreU").animate({marginTop:"150px"})
if (totCentFixed<100){$("#score p").text(totEurosFixed/1000+",0"+String(totCentFixed/10).replace(".","").replace(",","")+" "+nameEuro);}else{$("#score p").text(totEurosFixed/1000+","+String(totCentFixed/10).replace(".","").replace(",","")+" "+nameEuro);}
$("#score").animate({marginTop:"-10px"})
$("#scoreC").animate({marginTop:"-10px"})
$("#scoreU").animate({marginTop:"-10px"})
}
function randomSort(){
for (i=0;i<ram_G.length;i++){var ind=Math.floor(Math.random()*ram_G.length);while (ram_G[ind]>-1) {ind++;if (ind>=ram_G.length){ind=0;}}ram_G[ind]=i;}
}
function isCorrect(){
var isCorrect=false;if ((totCentFixed==totCent) && (totEurosFixed==totEuros)){isCorrect=true}
if (isCorrect) {totEuros=0;totCent=0;score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexGame++;if (indexGame >= ram_G.length) {showMessage("Ok");} else {loadMoney();}}
else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function ContaDWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
