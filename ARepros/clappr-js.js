var demo;
     var miarreglo = [
         "https://weather-lh.akamaihd.net/i/twc_1@92006/master.m3u8", "www.nike.com", "www.otra.com"];
     function mifuncion(unclick){
     var i = unclick;
     var demo = miarreglo[i];
     document.getElementById("demo").innerHTML = demo;