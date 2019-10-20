//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintQuest();paintbGame();paintOk();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function paintQuest(){$("#ardoraQuest").html("");
if (audioW[indexG].localeCompare("")==0){$("#ardoraQuest").html("<p>" + questionW[indexG] + "</p>");}else{
$("#ardoraQuest").html("<img id='playSound' class='imaLeft' src='impiccato3_resources/media/' alt='Sound' align='left'>"+ "<p>" + questionW[indexG] + "</p>");
$("#playSound").bind("click", function (e) {var au="audio"+audioW[indexG];document.getElementById(au).play();});}
profG=parseInt($("#ardoraQuest").css("height").replace("px", ""));
$("#ardoraImage").html("");if (imageW[indexG].localeCompare("")!=0){$("#ardoraImage").html("<img src='"+dirMedia+imageW[indexG]+"'/>");}
profG=profG+50;
}
function randomSort(){
var iW=[];for (i = 0; i < words.length; i++) {if (words[i].localeCompare("")!=0){iW.push(words[i]);wordsG.push("");imageW.push("");questionW.push("");audioW.push("");}}
for (i = 0; i < iW.length; i++) {var ind = Math.floor(Math.random()*iW.length);while (wordsG[ind].localeCompare("")!=0){
ind++;if (ind==iW.length){ind=0;}}wordsG[ind]=iW[i];imageW[ind]=imaW[i];questionW[ind]=queW[i];audioW[ind]=auW[i];}
}
function calcMaxWidth(){for (i = 0; i < wordsG.length; i++) {var actualSize=0;actualSize=$.trim(aforWords(wordsG[i])).length*(48+9);
if (actualSize>actMaxWidth){actMaxWidth=actualSize}}$("#ardoraAct").css("width",actMaxWidth+20+"px");
var canWidth=$("#ardoraAct").css("width").replace("px","");
var canHeight=$("#ardoraAct").css("height").replace("px","");$("#ardoraActCanvas").attr({"width": (parseInt(canWidth)+20).toString(),"height": canHeight});}
function paintbGame() {var iW = [];for (i = 0; i < $.trim(aforWords(wordsG[indexG])).length; i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
iW.push(""); }}for (i = 0; i < $.trim(aforWords(wordsG[indexG])).length; i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
var ind = Math.floor(Math.random() * iW.length);while (iW[ind].localeCompare("") != 0) {ind++;
if (ind == iW.length) {ind = 0;}}iW[ind]=$.trim(aforWords(wordsG[indexG])).substr(i,1);}}
var newHtml="<ul id='sortable'>";for (i = 0; i < $.trim(aforWords(wordsG[indexG])).length; i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
newHtml=newHtml+"<li id='cellG" + i.toString() + "' class='bGame'><p>"+iW[i]+"</p></li>";}}
newHtml=newHtml+"</ul>";$("#ardoraActSort").html(newHtml);$( "#sortable" ).sortable({revert: true});$( "ul, li" ).disableSelection();
calcMaxWidth();
$(".bGame").mouseenter(function () {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;$(this).css("background", "-webkit-gradient(linear, left top, left bottom, from(" + color1 + "), to(" + color2 + "))");
$(this).css("background", "-webkit-linear-gradient(" + color1 + ", " + color2 + ")");$(this).css("background", "-moz-linear-gradient(top, " + color1 + ", " + color2 + ")");$(this).css("background", "-ms-linear-gradient(" + color1 + ", " + color2 + ")");
$(this).css("background", "-o-linear-gradient(" + color1 + ", " + color2 + ")");$(this).css("background", "linear-gradient(" + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.Alpha(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");
});$(".bGame").mouseleave(function (){$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});}
function showButtonNext(){var canvas = document.getElementById("ardoraActCanvas");document.getElementById("ardoraActCanvas").style.zIndex = 5;document.getElementById("ardoraActCanvas").style["visibility"] = "visible";
canvas.width = canvas.width;var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.50;contexto.fillStyle = colorBack;
contexto.fillRect(0, 0, canvas.width, canvas.height);contexto.font = "14px " + fMenssage;
var metricsW = contexto.measureText(textBNext).width;var x = canvas.width - metricsW -50 ;var y = canvas.height-14-40;
contexto.beginPath();contexto.globalAlpha = 1;contexto.lineWidth = 2;contexto.fillStyle = colorButton;contexto.strokeStyle = colorSele;
roundedRect(contexto, x, y, metricsW+45,14+20, 5, colorButton);contexto.shadowColor = "black";contexto.shadowBlur = 15;
contexto.shadowOffsetX=4;contexto.shadowOffsetY=4;contexto.stroke();contexto.beginPath();contexto.textAlign = "left";contexto.fillStyle = colorText;
contexto.fillText(textBNext,x+10,y+14+10);contexto.lineWidth=5;contexto.stroke();contexto.fill();
$("#ardoraActCanvas").bind("click", function (e) {$("#ardoraActCanvas").unbind();document.getElementById("ardoraActCanvas").style.zIndex=0;
document.getElementById("ardoraActCanvas").style["visibility"] = "hidden";paintQuest();paintbGame();
$(".bGame").css("backgroundColor", colorButton);$(".bGame").css("color", colorBack);});
}
function isCorrect(){
var ans=""; $("ul li").each(function(ind,e) {ans=ans+$(e).text();});var correct=false;if (ans.localeCompare(aforWords(wordsG[indexG]))==0){
score=score+scoreInc;timeAct=timeAct+timeBon;successes++;correct=true;}
if (correct){indexG++;if (indexG==wordsG.length){showMessage("Ok");}else{
showButtonNext();}}
else{attempts++;score=score-scoreDec;if (tiAttempts){if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}
}else{showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var i=0;$("ul li").each(function (ind, e) {$(e).html("<p>" + aforWords(wordsG[indexG]).substr(i, 1) + "</p>");i++;});
}
function paintBack(){}
function aforWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
