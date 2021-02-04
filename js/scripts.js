$(function () {

    var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].substring(0, 4)
    var pathImg = '';
    var path = '';
    header();
    menulineas();
    footer();
    reloj();

    /*-------------------------------------------------------------------
        1. HEADER DEL SITIO
    --------------------------------------------------------------------*/
    function header() {
        console.log(pageName)
        if (pageName == 'line' || pageName == 'mapa' || pageName == 'muse' || pageName == 'conf' || pageName == 'carr' || pageName == 'cron' || pageName == 'parq') {
            pathImg = '../images';
            path = '../';
        } else if (pageName == 'esta') {
            pathImg = '../../images';
            path = '../../';
        } else {
            pathImg = 'images';
        }
        $('header').append(`
            <nav id="menu-navegacion" class="navbar navbar-dark bg-primary navbar-expand-lg">
                <div class="container">
                    <!--LOGOTIPO DEL SITIO-->
                    <a href="` + path + `index.html" class="navbar-brand ">
                        <img src="` + pathImg + `/logo_gobCDMX.png" alt="Logo GOBCDMX" class="img-fluid logoCDMX">
                    </a>
                    <a href="` + path + `index.html" class="navbar-brand ">
                        <img src="` + pathImg + `/logo_metro.png" alt="Logo STC Metro" class="img-fluid logoMetro">
                    </a>                    
                    <!--BOTON DEL MENU RESPONSIVE-->
                    <button type="button" class="navbar-toggler d-lg-none" data-toggle="collapse"
                        data-target="#menu-principal" aria-controls="menu-principal" arial-expanded="false"
                        arial-label="Desplegar menu de navegacion">
                        <span class="boton-menu"></span>
                    </button>
                    <!--BARRA DE NAVEGACION-->
                    <div class="collapse navbar-collapse" id="menu-principal">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item"><a href="` + path + `index.html" class="nav-link">Inicio</a></li>
                            <li class="nav-item"><a href="` + path + `nosotros.html" class="nav-link">Nosotros</a></li>
                            <li class="nav-item dropdown">
                                <a href="" class="nav-link dropdown-toggle" id="redMetro" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">La red
                                </a>
                                <div class="dropdown-menu" aria-labelledby="redMetro">
                                    <a href="` + path + `la-red/mapa-de-la-red.html" class="dropdown-item">Mapa de la red</a>
                                    <a href="` + path + `la-red/linea-1.html" class="dropdown-item">Línea 1</a>
                                    <a href="` + path + `la-red/linea-2.html" class="dropdown-item">Línea 2</a>
                                    <a href="` + path + `la-red/linea-3.html" class="dropdown-item">Línea 3</a>
                                    <a href="` + path + `la-red/linea-4.html" class="dropdown-item">Línea 4</a>
                                    <a href="` + path + `la-red/linea-5.html" class="dropdown-item">Línea 5</a>
                                    <a href="` + path + `la-red/linea-6.html" class="dropdown-item">Línea 6</a>
                                    <a href="` + path + `la-red/linea-7.html" class="dropdown-item">Línea 7</a>
                                    <a href="` + path + `la-red/linea-8.html" class="dropdown-item">Línea 8</a>
                                    <a href="` + path + `la-red/linea-9.html" class="dropdown-item">Línea 9</a>
                                    <a href="` + path + `la-red/linea-A.html" class="dropdown-item">Línea A</a>
                                    <a href="` + path + `la-red/linea-B.html" class="dropdown-item">Línea B</a>
                                    <a href="` + path + `la-red/linea-12.html" class="dropdown-item">Línea 12</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="" class="nav-link dropdown-toggle" id="cultura" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cultura</a>
                                <div class="dropdown-menu" aria-labelledby="cultura">
                                    <a href="` + path + `cultura/museo-del-metro.html" class="dropdown-item">Museo del metro</a>
                                    <a href="" class="dropdown-item">Galería fotográfica</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="" class="nav-link dropdown-toggle" id="operacion" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Operación</a>
                                <div class="dropdown-menu" aria-labelledby="operacion">
                                    <a href="` + path + `operacion/parque-vehicular.html" class="dropdown-item">Parque vehicular</a>
                                    <a href="` + path + `operacion/carro-neumatico-y-ferreo.html" class="dropdown-item">Carro neumático y férreo</a>
                                    <a href="` + path + `operacion/conformacion-de-un-tren.html" class="dropdown-item">Conformación de un tren</a>
                                    <a href="` + path + `operacion/cronologia.html" class="dropdown-item">Cronología del metro</a>
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
            <div id="reloj">
                <div class="fecha mr-3">
                    <span id="diaSemana" class="diaSemana"></span>, 
                    <span id="dia" class="dia"></span>-<span id="mes" class="mes"></span>-<span id="anio" class="anio"></span>
                </div>
                <div class="hora">
                    <span id="horas" class="horas"></span> :
                    <span id="minutos" class="minutos"></span> :
                    <span id="segundos" class="segundos"></span>
                </div>
            </div>
        `);
    };

    /*-------------------------------------------------------------------
        2. SUBMENU ENTRE LAS LINEAS DEL METRO
    --------------------------------------------------------------------*/
    function menulineas() {
        if (pageName == 'esta') {
            path = '../';
        } else {
            path = '';
        }

        $('#menulineas').append(` 
        <div class="container mt-5">
            <div class="row mt-5 text-center">
                <div class="col-3 col-sm-2 col-lg-1 linea1 mt-4 p-3 p-lg-1">
                    <a href="` + path + `linea-1.html" class="tooltipDireccion">
                        <p class="linea">Línea 1</p>
                        <span class="linea1">Observatorio-Pantitlán</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea2 mt-4 p-3 p-lg-1">
                    <a href="` + path + `linea-2.html" class="tooltipDireccion">
                        <p class="linea">Línea 2</p>
                        <span class="linea2">Tasqueña-Cuatro Caminos</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea3 mt-4 p-3 p-lg-1">
                    <a href="` + path + `linea-3.html" class="tooltipDireccion">
                        <p class="linea">Línea 3</p>
                        <span class="linea3">Universidad-Indios verdes</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea4 mt-4 p-3 p-lg-1">
                    <a href="` + path + `linea-4.html" class="tooltipDireccion">
                        <p class="linea">Línea 4</p>
                        <span class="linea4">Martín Carrera- Santa Anita</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea5 mt-sm-4 p-3 p-lg-1">
                    <a href="` + path + `linea-5.html" class="tooltipDireccion">
                        <p class="linea">Línea 5</p>
                        <span class="linea5">Pantitlán-Politécnico</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea6 mt-sm-4 p-3 p-lg-1">
                    <a href="` + path + `linea-6.html" class="tooltipDireccion">
                        <p class="linea">Línea 6</p>
                        <span class="linea6">El Rosario-Martín Carrera</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea7 mt-lg-4 p-3 p-lg-1">
                    <a href="` + path + `linea-7.html" class="tooltipDireccion">
                    <p class="linea">Línea 7</p>
                    <span class="linea7">El Rosario-Barranca del muerto</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea8 mt-lg-4 p-3 p-lg-1">
                    <a href="` + path + `linea-8.html" class="tooltipDireccion">
                        <p class="linea">Línea 8</p>
                        <span class="linea8">Constitución-Garibaldi</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea9 mt-lg-4 p-3 p-lg-1">
                    <a href="` + path + `linea-9.html" class="tooltipDireccion">
                        <p class="linea">Línea 9</p>
                        <span class="linea9">Tacubaya-Pantitlán</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 lineaA mt-lg-4 p-3 p-lg-1">
                    <a href="` + path + `linea-A.html" class="tooltipDireccion">
                        <p class="linea">Línea A</p>
                        <span class="lineaA">Pantitlán-La Paz</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 lineaB mt-lg-4 p-3 p-lg-1">
                    <a href="` + path + `linea-B.html" class="tooltipDireccion">
                        <p class="linea">Línea B</p>
                        <span class="lineaB">Ciudad azteca-Garibaldi</span>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-lg-1 linea12 mt-lg-4 p-3 p-lg-1">
                    <a href="` + path + `linea-12.html" class="tooltipDireccion">
                        <p class="linea">Línea 12</p>
                        <span class="linea12">Mixcoac-Tláhuac</span>
                    </a>
                </div>
            </div>
        </div>
        `);
    };
    /*-------------------------------------------------------------------
        3. FOOTER DEL SITIO
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
                    </div><!--col-->                    
                    <div class="col-12 text-white">
                        <hr>
                        <p>Esta página no pretende sustituir ni reemplazar a la original. Esta página
                        se hizo para fines educativos como proyecto personal sin fines de lucro. Lo que se trata de hacer 
                        es mostrar la importancia que tiene este sistema de transporte en la CDMX. La información
                        puesta, los íconos, entre otras cosas son propiedad intelectual del Sistema de Transporte Colectivo 
                        Metro, por lo cual queda prohibida su reproducción parcial o total.
                        </p>
                        <p class="text-center">Copyright &copy; 2021 JESA | Desarrollador Web CDMX. Todos los derechos reservados.</p> 
                    </div>
                <div><!--row-->                           
            </div><!--container-->
        `);
    };

    /*-------------------------------------------------------------------
        4. FUNCIONES PARA EL MENU EN DISPOSITIVOS MOVILES
    --------------------------------------------------------------------*/
    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        
    });

    /*-------------------------------------------------------------------
        5. Reloj de la pagina
    --------------------------------------------------------------------*/
    function reloj() {
        var fecha = new Date(); //Actualizar fecha.
        var horas = fecha.getHours(); //hora actual
        var minutos = fecha.getMinutes(); //minuto actual
        var segundos = fecha.getSeconds(); //segundo actual
        var diaSemana = fecha.getDay(); //nombre del dia de la semana actual
        var dia = fecha.getDay(); //numero de dia actual
        var mes = fecha.getMonth(); //mes actual
        var anio = fecha.getFullYear(); //año actual

        const diasSemana = [
            'Dom',
            'Lun',
            'Mar',
            'Mié',
            'Jue',
            'Vie',
            'Sáb'
        ];

        document.getElementById('diaSemana').textContent = diasSemana[diaSemana];
        document.getElementById('dia').textContent = dia;

        const meses = [
            'ene',
            'feb',
            'mar',
            'abr',
            'may',
            'jun',
            'jul',
            'ago',
            'sep',
            'oct',
            'nov',
            'dic'
        ];
     
        document.getElementById('mes').textContent = meses[mes];
        document.getElementById('anio').textContent = anio;

        document.getElementById('horas').textContent = horas;

        if (horas < 10) { //dos cifras para la hora
            horas = "0" + horas;
        }
        if (minutos < 10) { //dos cifras para el minuto
            minutos = "0" + minutos;
        }
        if (segundos < 10) { //dos cifras para el segundo
            segundos = "0" + segundos;
        }
        //devolver los datos:
        document.getElementById('minutos').textContent = minutos;
        document.getElementById('segundos').textContent = segundos; 
    };   
    setInterval(reloj, 1000); //iniciar temporizador

    /*-----------------------------------------------------------
    6. CONFIGURACION DE SLICK PARA LA PARTE DEL BANNER
    ------------------------------------------------------------*/
    $('#banner').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000        
    });
    
    /*-----------------------------------------------------------
       7. INICIANDO VENOBOX PARA EL VIDEO DEL INDEX
    -------------------------------------------------------------*/
    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(17, 187, 0, 0.4)',
        border: '5px',
        closeColor: '#fff',
        overlayColor: 'rgba(247, 146, 57, 0.83)',
        spinner: 'three-bounce'
    });

});