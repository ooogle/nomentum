function setGreet(){
 user = prompt("What would you like Nomentum to call you?",user);
       if (user != "" && user != null) {
           setCookie("username", user, 3000);
           document.getElementById("name").innerHTML=user+".";
           
       
}
}

 /*var randomNumber = Math.floor(Math.random() * 36);
*/
// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Seattle, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+','+weather.region+'</li>';
      
     
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/1949/${getRandomNum()}')";


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {if (window.CP.shouldStopExecution(2)){break;}
        var c = ca[i];
        while (c.charAt(0) == ' ') {if (window.CP.shouldStopExecution(1)){break;}
            c = c.substring(1);
        }
window.CP.exitedLoop(1);

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
window.CP.exitedLoop(2);

    return "";
}
var user;
var focuscookie;
function checkCookie() {
    user=getCookie("username");
    focuscookie= getCookie('focus');
    if (user != "") {
        document.getElementById('name').innerHTML=user+".";
    } else {
       user = prompt("What's your name?","Theo");
       if (user != "" && user != null) {
           setCookie("username", user, 3000);
          document.getElementById('name').innerHTML=user+".";
       }
    }

  if(focuscookie !="" && focuscookie != null && focuscookie != ' '){
    document.getElementById('focus').innerHTML='<h2>'+focuscookie+'</h2>';
    document.getElementById('whatsyourfocus').innerHTML='Today'
  }
        }
  



function createFocus(){
 var focus= document.getElementById("whatthefocusis").value;
  document.getElementById("focus").innerHTML="<h2>"+document.getElementById("whatthefocusis").value+"</h2>" 
setCookie('focus', focus, 1)
  
}
function start() {
  // your code here
 
  var d = new Date();
      var d = new Date(); // for now
      var  n = d.getHours(); // => 9
      var   b   = d.getMinutes();
b=b.toString();
   var l = b.length;  
  if(n == 13){
    n = 1;
     i= n+":"+b
    document.getElementById('period').innerHTML='afternoon'
  }
  if(n == 14){
    n = 2;
     i= n+":"+b
    document.getElementById('period').innerHTML='afternoon'
  }
  if(n == 15){
    n = 3;
     i= n+":"+b
    document.getElementById('period').innerHTML='afternoon'
  }
  if(n == 16){
    n = 4;
     i= n+":"+b
    document.getElementById('period').innerHTML='evening';
  }
  if(n == 17){
    n = 5;
     i= n+":"+b
    document.getElementById('period').innerHTML='evening'
  }
  if(n == 18){
    n = 6;
     i= n+":"+b
    document.getElementById('period').innerHTML='evening'
  }
  if(n == 19){
    n = 7;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 20){
    n = 8;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 21){
    n = 9;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 22){
    n = 10;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 23){
    n = 11;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 24){
    n = 12;
     i= n+":"+b
    document.getElementById('period').innerHTML='midnight'
  }
if(l == 1){
  i= n+":0"+b   ; 
}
else{
  i= n+":"+b   ;
} 
  if(n == 13){
    n = 1;
     i= n+":"+b
    document.getElementById('period').innerHTML='afternoon'
  }
  if(n == 14){
    n = 2;
     i= n+":"+b
    document.getElementById('period').innerHTML='afternoon'
  }
  if(n == 15){
    n = 3;
     i= n+":"+b
    document.getElementById('period').innerHTML='afternoon'
  }
  if(n == 16){
    n = 4;
     i= n+":"+b
    document.getElementById('period').innerHTML='evening';
  }
  if(n == 17){
    n = 5;
     i= n+":"+b
    document.getElementById('period').innerHTML='evening'
  }
  if(n == 18){
    n = 6;
     i= n+":"+b
    document.getElementById('period').innerHTML='evening'
  }
  if(n == 19){
    n = 7;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 20){
    n = 8;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 21){
    n = 9;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 22){
    n = 10;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 23){
    n = 11;
     i= n+":"+b
    document.getElementById('period').innerHTML='night'
  }
  if(n == 24){
    n = 12;
     i= n+":"+b
    document.getElementById('period').innerHTML='midnight'
  }
document.getElementById('time').innerHTML=i;
  
  
  setTimeout(start, 000);
}

// boot up the first call
start();
  //# sourceURL=pen.js
  
