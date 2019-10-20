//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Inizia";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW1waWNjYXRvMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q0lORU1B","T1NQRURBTEU","QVVUT0JVUw","T0NVTElTVEE","REVOVElTVEE","SU5WRVJOTw","UEFMRVNUUkE","SU1QQVJBUkU","Rk9SQklDSQ","Rk9HTElF"];imaW=["","","","","","","","","",""];queW=["Se vuoi vedere un film puoi andare al...","Se stai male devi andare all'...","Per non camminare troppo puoi prendere l'...","Per controllare la vista si va dall'","Per curare i denti si va dal...","La stagione in cui fa molto freddo è l'...","Per fare ginnastica si va in...","A scuola si va per...","Per tagliare la carta si possono usare le...","In autunno dall'albero cadono le..."];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="impiccato3_resources/media/"; textBNext="Parola nuova";
