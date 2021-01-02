$(function () {
    /*-------------------------------------------------------------------
        1. FUNCIONES PARA EL MENU EN DISPOSITIVOS MOVILES
    --------------------------------------------------------------------*/
    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].substring(0, 4)
    var pathImg = '';
    var path = '';
    header();
    footer();

    /*-------------------------------------------------------------------
        X. HEADER DEL SITIO
    --------------------------------------------------------------------*/
    function header() {
        console.log(pageName)
        if (pageName == 'line' || pageName == 'conf' || pageName == 'carr' || pageName == 'cron' || pageName == 'parq') {
            pathImg = '../images';
            path = '../';
        } else {
            pathImg = 'images';
        }
        $('header').append(`
        <nav id="menu-navegacion" class="navbar navbar-dark bg-primary navbar-expand-md">
        <div class="container">
            <!--LOGOTIPO DEL SITIO-->
            <a href="`+path+`index.html" class="navbar-brand logo">
                <img src="`+pathImg+`/logo_metro.png" alt="Logo STC Metro" class="img-fluid">
            </a>
            <!--BOTON DEL MENU RESPONSIVE-->
            <button type="button" class="navbar-toggler d-md-none" data-toggle="collapse"
                data-target="#menu-principal" aria-controls="menu-principal" arial-expanded="false"
                arial-label="Desplegar menu de navegacion">
                <span class="boton-menu"></span>
            </button>
            <!--BARRA DE NAVEGACION-->
            <div class="collapse navbar-collapse" id="menu-principal">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="`+path+`index.html" class="nav-link">Inicio</a></li>
                    <li class="nav-item"><a href="" class="nav-link">Nosotros</a></li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" id="redMetro" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">La red
                        </a>
                        <div class="dropdown-menu" aria-labelledby="redMetro">
                            <a href="#" class="dropdown-item">Mapa de la red</a>
                            <a href="`+path+`lineas/linea-1.html" class="dropdown-item">Línea 1</a>
                            <a href="`+path+`la-red/linea-2.html" class="dropdown-item">Línea 2</a>
                            <a href="`+path+`la-red/linea-3.html" class="dropdown-item">Línea 3</a>
                            <a href="`+path+`la-red/linea-4.html" class="dropdown-item">Línea 4</a>
                            <a href="`+path+`la-red/linea-5.html" class="dropdown-item">Línea 5</a>
                            <a href="`+path+`la-red/linea-6.html" class="dropdown-item">Línea 6</a>
                            <a href="`+path+`la-red/linea-7.html" class="dropdown-item">Línea 7</a>
                            <a href="`+path+`la-red/linea-8.html" class="dropdown-item">Línea 8</a>
                            <a href="`+path+`la-red/linea-9.html" class="dropdown-item">Línea 9</a>
                            <a href="`+path+`la-red/linea-A.html" class="dropdown-item">Línea A</a>
                            <a href="`+path+`la-red/linea-B.html" class="dropdown-item">Línea B</a>
                            <a href="`+path+`la-red/linea-12.html" class="dropdown-item">Línea 12</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" id="cultura" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cultura</a>
                        <div class="dropdown-menu" aria-labelledby="cultura">
                            <a href="" class="dropdown-item">Museo del metro</a>
                            <a href="" class="dropdown-item">Galería fotográfica</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" id="operacion" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Operación</a>
                        <div class="dropdown-menu" aria-labelledby="operacion">
                            <a href="`+path+`operacion/parque-vehicular.html" class="dropdown-item">Parque vehicular</a>
                            <a href="`+path+`operacion/carro-neumatico-y-ferreo.html" class="dropdown-item">Carro neumático y férreo</a>
                            <a href="`+path+`operacion/conformacion-de-un-tren.html" class="dropdown-item">Conformación de un tren</a>
                            <a href="`+path+`operacion/cronologia.html" class="dropdown-item">Cronología del metro</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" id="metro" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Metro</a>
                        <div class="dropdown-menu" aria-labelledby="metro">
                            <a href="" class="dropdown-item">Colección de tarjetas</a>
                            <a href="" class="dropdown-item">Modelos a escala</a>
                            <a href="" class="dropdown-item">Libros</a>
                            <a href="" class="dropdown-item">Infografías</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        `);
    };

    /*-------------------------------------------------------------------
        X. FOOTER DEL SITIO
    --------------------------------------------------------------------*/
    function footer() {
        $('footer').append(`  
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h3>Atención ciudadana</h3>
                    <ul>
                        <li>Dirección: Avenida Balderas 58
                            Colonia Centro , Delegación Cuauhtémoc C.P. 06010, Ciudad de México</li>
                        <li><i class="fas fa-phone-alt mr-2"></i>5627 4741</li>
                        <li><i class="far fa-envelope mr-2"></i> unidad_de_orientacion@metro.cdmx.gob.mx</li>
                    </ul>

                    <h3>Horario de servicio</h3>
                    <ul>
                        <li><b>Días laborales</b> de 5:00 a 24 :00 horas.</li>
                        <li><b>Sábados</b> de 6:00 a 24:00 horas.</li>
                        <li><b>Domingos</b> y días festivos de 7:00 a 24:00 horas.</li>
                        <li><b>Costo del boleto:</b> $5</li>
                        <li><b>Acceso gratuito a</b> adultos mayores, personas con discapacidad, niños menores de 5 años,
                            jóvenes del INJUVE y policías uniformados.</li>
                    </ul>                    
                </div>
                <div class="col-12 col-md-6">
                    <h3>Sitios relacionados</h3>
                    <ul>
                        <li><a href="https://www.cdmx.gob.mx/" target="_blank">Gobierno CDMX</a></li>
                        <li><a href="http://www.semovi.cdmx.gob.mx/" target="_blank">Secretaría de Movilidad
                                (SEMOVI)</a></li>
                        <li><a href="https://www.ste.cdmx.gob.mx/" target="_blank">Servicio de transportes eléctricos de
                                la CDMX</a></li>
                        <li><a href="https://www.metrobus.cdmx.gob.mx/" target="_blank">Metrobus</a></li>
                        <li><a href="#" target="_blank">Cablebus</a></li>
                        <li><a href="https://www.ecobici.cdmx.gob.mx/" target="_blank">Ecobici</a></li>
                        <li><a href="https://www.rtp.cdmx.gob.mx/" target="_blank">RTP</a></li>
                        <li><a href="https://www.aicm.com.mx/" target="_blank">Aeropuerto Internacional de la CDMX</a>
                        </li>
                        <li><a href="https://www.lineauno.pe/" target="_blank">Metro de Perú</a></li>
                        <li><a href="https://www.metrovias.com.ar/" target="_blank">Metro de Argentina</a></li>
                        <li><a href="https://www.metro.cl/" target="_blank">Metro de Chile</a></li>
                        <li><a href="https://www.metromadrid.es/es" target="_blank">Metro de Madrid</a></li>
                    </ul>

                    <h3 class="mt-3">Redes sociales</h3>
                    <ul class="d-flex justify-content-around">
                        <li><a href="https://www.facebook.com/MetroCDMX" target="_blank"><i
                                    class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/MetroCDMX" target="_blank"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/metrocdmx/" target="_blank"><i
                                    class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/user/METROGDF" target="_blank"><i
                                    class="fab fa-youtube"></i></a></li>
                        <li><a href="https://soundcloud.com/audiometro-stc" target="_blank"><i
                                    class="fab fa-soundcloud"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        `);
    };

});