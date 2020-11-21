var fuente;
            var canales = [ /*LOCALES*/canal11,campustv,teleceiba,ten10,tdtvp,tsi,telecadena,canal5hn,cholusat,globotv,hondured,hch,mayatv,sitv,suyapatv,utv,id16,id17,id18,id19,id20,id21,id22,id23,id24,id25,id26,id27,id28,id29,id30,/*DEPORTES*/tudn,fsnews,redbulltv,tennistv,torotv,realmadrides,realmadriden,palmas,harley,worldoffreesports,beinxtra,raisports,mlbnetwork,onegolf,fightsports,fites,combatgo,ringofhonor,stadium,edgesports,surfnow,cdo,bayerntv,garagetv,mavtv,racingtv,/*NOTICIAS*/noticias24,rtes,abcnews,cbsnews,weather,newsmax,cbsn,dwes,cgntes,france24,telesur,telemax,cnnintl,/*MUSICA*/toplatino,urbanrevolution,mtves,telemusica,poptv,/*OTROS*/bemad,dccnetwork,jasmintv,vividtv,privetv,a3cine,cinear,
            ];
                function mifuncion(unclick){
                var i = unclick;
                var fuente = canales[i];
                document.getElementById("fuente").innerHTML = fuente;
       
        var playerInstance = jwplayer("aRzklaXf");
        playerInstance.setup({
        "file": fuente,
        "height":"360",
        "width":"480",
        stretching: "bestfit",
        "image": "#",
        "mediaid": "player",
        "mute": false,
        "autostart": false,
            "cast": {
                "appid": "player",
                "logo": "https://i.ibb.co/Tgk2YrC/Logow-1-1.png",
            },
       });
    }