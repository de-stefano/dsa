//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
paintBoard();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function randomSort(){
}
function silenceAll() {if (tiAudio) {$("audio").each(function (ind, e) {$(e)[0].pause();$(e)[0].currentTime = 0;});tiAudio=false;}}
function paintBoard(){var newHtml="";for (i=0;i<diSent.length;i++){if (diSent[i]){if (i==indexGame){
newHtml=newHtml+'<audio class="repAu" id="audio1" controls>';
if (auMp3[indexGame]){newHtml=newHtml+'<source src="'+scrMedia+auMp3[indexGame]+'" type="audio/mp3">'}
if (auOgg[indexGame]){newHtml=newHtml+'<source src="'+scrMedia+auOgg[indexGame]+'" type="audio/ogg">'}
newHtml=newHtml+"</audio>";
newHtml=newHtml+"<div id='textDict' contenteditable='true' spellcheck='false'><br><br></div>";
}else{if (i<indexGame){newHtml=newHtml+"<p class='textR'>"+ditadoWords(diSent[i]).trim().replace(/\\/g, "")+"</p>";
}}}}newHtml=newHtml+"<canvas id='ardoraActCanvas' width='2px' height='2px'></canvas>";
$("#ardoraAct").html(newHtml);
var canWidth=$("#ardoraAct").css("width").replace("px","");var canHeight=$("#ardoraAct").css("height").replace("px","");$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight})
$("#playSound").css("cursor","pointer");$("#textDict").css("borderColor",colorSele);$("#playSound").click(function () {
silenceAll();document.getElementById("audio"+(indexGame+1).toString()).play();tiAudio = true;});}
function isCorrect(){
var ori=ditadoWords(diSent[indexGame]).trim();ori=ori.replace(/\\/g, "");ori=ori.substring(0,c[indexGame]);if (ori.localeCompare($("#textDict").text().trim())==0){score=score+scoreInc;
timeAct=timeAct+timeBon;successes++;indexGame++;while (indexGame<diSent.length && diSent[indexGame].localeCompare("")==0){indexGame++;}
if (indexGame==diSent.length){paintBoard();showMessage("Ok");}else{paintBoard();}}else{
var ans=$("#textDict").text().trim();var res="";
for (i=0;i<ori.length;i++) {if (ori.substring(i,i+1).localeCompare(ans.substring(i,i+1))!=0){
res=res+"<font color=#FF0000>"+ans.substring(i,i+1)+"</font>";}else{res=res+ans.substring(i,i+1);}}
$("#textDict").html(res);
attempts++;score=score-scoreDec;if (tiAttempts){if (attempts>attemptsMax){showMessage("Attempts");}else{showMessage("Error");}}else{showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function ditadoWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
