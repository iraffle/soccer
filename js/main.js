let headerFutbol = `
<!--HEADER-->
            <header id="header" style="background-color: #fff;" data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
			<div class="uk-container">
				<nav id="navbar" data-uk-navbar="mode: click;">
				<!--TEMP-HIDE--
					<div class="uk-navbar-left nav-overlay uk-visible@m">
						<ul class="uk-navbar-nav">
							<li class="uk-active"><a class="nav-text" href="http://slowdsports.com/soccer/">Fútbol</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/basket/">Baloncesto</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/box/">Boxeo</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/football/">NFL</a></li>
						</ul>
					</div>
					<!--TEMP-HIDE-->
					<div class="uk-navbar-center nav-overlay">
						<a class="uk-navbar-item uk-logo nav-logo" href="http://slowdsports.com" title="Logo"><img src="https://i.ibb.co/PNytkmd/logob-1.png" alt="Logo"></a>
					</div>
					<!--TEMP-HIDE--
					<div class="uk-navbar-right nav-overlay uk-visible@m">
                    <ul class="uk-navbar-nav nav-right-custom">
                        <li><a class="nav-text" href="http://slowdsports.com/tennis/">Tenis</a></li>
                        <li><a class="nav-text" href="http://slowdsports.com/tv/">TV</a></li>
                        <li><a class="nav-text" href="http://slowdsports.com/contacto/">Contacto</a>
                        <li><a class="nav-text" href="http://slowdsports.com/dmca/">DMCA</a></li>
                    </ul>
                    
                    </div>
                    <!--TEMP-HIDE-->
                    <div class="uk-navbar-right nav-overlay">
                    
						<div class="uk-navbar-item">
						
							<a class="uk-visible@s" style="margin-right: 4px" href="#" data-uk-icon=""></a>
							<a class="uk-visible@s" style="margin-right: 4px" href="https://www.buymeacoffee.com/slowdsports" target="_blank" data-uk-icon="credit-card"></a>
							<a class="uk-visible@s" style="margin-right: 4px" href="https://t.me/slowdsports" target="_blank" data-uk-icon="question"></a>
							<a class="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a>
							
						</div>
						
					</div>
					<div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
						<div class="uk-navbar-item uk-width-expand">
							<form class="uk-search uk-search-navbar uk-width-1-1">
								<input class="uk-search-input" type="search" placeholder="Search...">
							</form>
						</div>
						<a class="uk-navbar-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
					</div>
				</nav>
			</div>
		</header>
		<!--/HEADER-->
`;
for(const ele of document.getElementsByClassName("header-futbol")){ele.innerHTML=(headerFutbol)};

let socialJoin = `
<!--SOCIAL-->
    <center>
        <p>
        <span>//</span>
        Join:
        <a href="#" class="uk-icon-link"><i style="margin-right: 8px;" class="fab fa-twitter"></i></a>
        <a href="http://slowdsports.com/whatsapp.html" class="uk-icon-link"><i style="margin-right: 8px;" class="fab fa-whatsapp"></i></a>
        <a href="https://t.me/slowdsports" class="uk-icon-link"><i style="margin-right: 8px;" class="fa fa-paper-plane"></i></a>
        <span>//</span>
        </p>
    </center>
  <!--/SOCIAL-->
`;
for(const ele of document.getElementsByClassName("social-join")){ele.innerHTML=(socialJoin)};

let filterCompeticionFutbol = `
        <p>Filtra por competición:</p>
        <div uk-sticky="sel-target: cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
            <div class="uk-navbar-left">

                <ul class="uk-subnav uk-subnav-pill">
            <!-- MLB -->
            <li><a href="#mlb" uk-scroll><img alt="MLB" class="competition mlb" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>

            <!-- END Competitions -->       
            </ul>  

            </div>
            </nav>
        </div>
`;
for(const ele of document.getElementsByClassName("filter-competicion-futbol")){ele.innerHTML=(filterCompeticionFutbol)};

let scheduleCaption = `
<caption>Semana - XX</caption>
`;
for(const ele of document.getElementsByClassName("schedule-caption")){ele.innerHTML=(scheduleCaption)};

let offcanvas = `
<!-- OFFCANVAS -->
		<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
				<button class="uk-offcanvas-close uk-close" type="button" data-uk-close></button>
				<ul class="uk-nav uk-nav-default">
                <!--TEMP-HIDE--
				    <li class="uk-nav-header">Categories</li>
				    
					<li><a class="nav-text" href="http://slowdsports.com/soccer/">
                    <img src="https://image.flaticon.com/icons/svg/3099/3099380.svg" width="12px" alt=""> Fútbol</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/basket/">
                    <img src="https://image.flaticon.com/icons/svg/3076/3076850.svg" width="12px" alt=""> Baloncesto</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/box/">
                    <img src="https://image.flaticon.com/icons/svg/889/889515.svg" width="12px" alt=""> Boxeo</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/football/">
                    <img src="https://image.flaticon.com/icons/svg/1508/1508171.svg" width="12px" alt=""> NFL</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/tennis/">
                    <img src="https://image.flaticon.com/icons/svg/2906/2906838.svg" width="12px" alt=""> Tenis</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/tv/">
                    <img src="https://image.flaticon.com/icons/svg/3075/3075918.svg" width="12px" alt=""> TV</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/dmca/">
                    <img src="https://image.flaticon.com/icons/svg/3288/3288394.svg" width="12px" alt=""> DMCA</a></li>
                   <!--TEMP-HIDE--> 
					<li class="uk-nav-header">Síguenos en Redes</li>
					
					<li class="uk-nav-divider"></li>
					
					<li><a href="https:/t.me/slowdsports"><span class="uk-margin-small-right"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Telegram_alternative_logo.svg/1200px-Telegram_alternative_logo.svg.png" width="15px" alt=""></span>Telegram</a></li>
				</ul>
				<h3>Acerca de</h3>
				<p>SlowD Sports: Vea deportes en vivo y televisión en línea, entretenimiento en streaming de los principales canales de televisión como ABC, CBS, ESPN, ESPN2, NBC, Animal Planet, AXN, BBC, ITV, CNN, CW, Discovery Channel, ESPN USA, Eurosport, FOX, FS1 , FX, HBO, MTV, National Geographic, SHOWTIME, Sky Sports, SPIKE, USA Network, TBS, TNT y mucho más. Vea deportes en vivo como UFC, Boxeo, Baloncesto, NBA, Béisbol, MLB, Fútbol americano, NFL, Tenis ATP y WTA, Premier League, Hockey, NHL, Fútbol americano universitario, Baloncesto universitario, NCCA, Golf, PGA, Motorsport, NASCAR, Fórmula 1 , Cricket aquí en transmisión en vivo. ¡Siempre encuentre transmisiones y transmisiones en vivo de trabajo para cualquier deporte que le guste! Siempre hacemos nuestro mejor esfuerzo para ofrecerte las mejores transmisiones en HD para ver deportes en vivo en línea. Disfrute de la transmisión de deportes y televisión en vivo.
                SlowD Sports no aloja, carga ni controla ninguna transmisión o archivo multimedia. Todas las transmisiones y videos que se encuentran aquí son compartidos por fanáticos de los deportes de todo el mundo y están disponibles a través de sitios como Twitch, Ustream, etc. Simplemente ayudamos a facilitar la búsqueda de transmisiones y videos, y no somos responsables de ninguna infracción. para ello, póngase en contacto con los propietarios / hosters de archivos multimedia correspondientes. Para reclamos, sugerencias o consultas contáctenos en slowdsports@gmail.com o lea más sobre nuestras políticas de DMCA en: <a href="dmca/">Artículo sobre DMCA.</a></p>
			</div>
		</div>
		<!-- /OFFCANVAS -->
`;
for(const ele of document.getElementsByClassName("offcanvas")){ele.innerHTML=(offcanvas)};