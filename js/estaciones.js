$(function () {
    var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].substring(0, 4)
    var pathImg = '';
    var path = '';

    linea1();
    linea2();
    linea3();
    linea4();
    linea5();
    linea6();
    linea7();
    linea8();
    linea9();
    lineaA();
    lineaB();
    linea12();

    /*****************************************************************************
                                LINEA 1
    ******************************************************************************/
    function linea1() {
        $('#linea-1').append(`
            <ul>
                <li>
                    <a href="estacionObservatorio.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/observatorio.png" alt="Observatorio"
                            class="img-fluid">
                        <span class="linea1">Observatorio</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTacubaya.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/tacubaya.png" alt="Tacubaya"
                            class="img-fluid">
                        <span class="linea1">Tacubaya</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionJuanacatlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/juanacatlan.png" alt="Juanacatlan"
                            class="img-fluid">
                        <span class="linea1">Juanacatlan</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionChapultepec.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/chapultepec.png" alt="Chapultepec"
                            class="img-fluid">
                            <span class="linea1">Chapultepec</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionSevilla.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/sevilla.png" alt="Sevilla" 
                            class="img-fluid">
                        <span class="linea1">Sevilla</span>
                    </a>
                </li>
                <li>
                    <a href="estacionInsurgentes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/insurgentes.png" alt="Insurgentes"
                            class="img-fluid">
                        <span class="linea1">Insurgentes</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCuauhtemoc.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/cuauhtemoc.png" alt="cuauhtemoc"
                            class="img-fluid">
                        <span class="linea1">Cuauhtémoc</span>
                    </a>
                </li>
                <li>
                    <a href="estacionBalderas.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/balderas.png" alt="balderas"
                            class="img-fluid">
                        <span class="linea1">Balderas</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSaltodelagua.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/saltodelagua.png" alt="saltodelagua"
                            class="img-fluid">
                        <span class="linea1">Salto del agua</span>
                    </a>
                </li>
                <li>
                    <a href="estacionIsabel-la-catolica.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/isabelacatolica.png" alt="isabelacatolica"
                            class="img-fluid">
                        <span class="linea1">Isabel la catolica</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPinoSuarez.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/pinosuarez.png" alt="pinosuarez"
                            class="img-fluid">
                        <span class="linea1">Pino Suárez</span>
                    </a>
                </li>
                <li>
                    <a href="estacionMerced.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/merced.png" alt="merced"
                            class="img-fluid">
                        <span class="linea1">La Merced</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCandelaria.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/candelaria.png" alt="candelaria"
                            class="img-fluid">
                        <span class="linea1">Candelaria</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSanLazaro.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/sanlazaro.png" alt="sanlazaro"
                            class="img-fluid">
                        <span class="linea1">San Lázaro</span>
                    </a>
                </li>
                <li>
                    <a href="estacionMoctezuma.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/moctezuma.png" alt="moctezuma"
                            class="img-fluid">
                        <span class="linea1">Moctezuma</span>
                    </a>
                </li>
                <li>
                    <a href="estacionBalbuena.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/balbuena.png" alt="balbuena"
                            class="img-fluid">
                        <span class="linea1">Balbuena</span>
                    </a>
                </li>
                <li>
                    <a href="estacionBoulevardPuertoAereo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/boulevarptoaereo.png"
                            alt="boulevarptoaereo" class="img-fluid">
                        <span class="linea1">Boulevard</span>
                    </a>
                </li>
                <li>
                    <a href="estacionGomezFarias.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/gomezfarias.png" alt="gomezfarias"
                            class="img-fluid">
                        <span class="linea1">Gómez Farias</span>
                    </a>
                </li>
                <li>
                    <a href="estacionZaragoza.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/zaragoza.png" alt="zaragoza"
                            class="img-fluid">
                        <span class="linea1">Zaragoza</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPantitlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/pantitlan.png" alt="pantitlan" class="img-fluid">
                        <span class="linea1">Pantitlán</span>
                    </a>
                </li>
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 2
    ******************************************************************************/
    function linea2() {
        $('#linea-2').append(`
            <ul>
                <li>
                    <a href="estacionTasquena.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/tasquena.png" alt="tasquena"
                            class="img-fluid">
                        <span class="linea2">Tasqueña</span>
                    </a>
                </li>
                <li>
                    <a href="estacionGeneralAnaya.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/general_anaya.png" alt="General Anaya"
                            class="img-fluid">
                        <span class="linea2">General Anaya</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionErmita.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/ermita.png" alt="Ermita"
                            class="img-fluid">
                        <span class="linea2">Ermita</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionPortales.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/portales.png" alt="Portales"
                            class="img-fluid">
                            <span class="linea2">Portales</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionNativitas.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/nativitas.png" alt="Nativitas" 
                            class="img-fluid">
                        <span class="linea2">Nativitas</span>
                    </a>
                </li>
                <li>
                    <a href="estacionVilladeCortes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/villa_de_cortes.png" alt="VilladeCortes"
                            class="img-fluid">
                        <span class="linea2">Villa de Cortés</span>
                    </a>
                </li>
                <li>
                    <a href="estacionXola.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/xola.png" alt="Xola"
                            class="img-fluid">
                        <span class="linea2">Xola</span>
                    </a>
                </li>
                <li>
                    <a href="estacionViaducto.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/viaducto.png" alt="Viaducto"
                            class="img-fluid">
                        <span class="linea2">Viaducto</span>
                    </a>
                </li>
                <li>
                    <a href="estacionChabacano.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/chabacano.png" alt="Chabacano"
                            class="img-fluid">
                        <span class="linea2">Chabacano</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSanAntonioAbad.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/san_antonio_abad.png" alt="SanAntonioAbad"
                            class="img-fluid">
                        <span class="linea2">San Antonio Abad</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPinoSuarez.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/pino_suarez.png" alt="pinosuarez"
                            class="img-fluid">
                        <span class="linea2">Pino Suárez</span>
                    </a>
                </li>
                <li>
                    <a href="estacionZocalo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/zocalo.png" alt="zocalo"
                            class="img-fluid">
                        <span class="linea2">Zócalo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionAllende.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/allende.png" alt="Allende"
                            class="img-fluid">
                        <span class="linea2">Allende</span>
                    </a>
                </li>
                <li>
                    <a href="estacionBellasArtes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/bellas_artes.png" alt="BellasArtes"
                            class="img-fluid">
                        <span class="linea2">Bellas Artes</span>
                    </a>
                </li>
                <li>
                    <a href="estacionHidalgo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/hidalgo.png" alt="Hidalgo"
                            class="img-fluid">
                        <span class="linea2">Hidalgo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionRevolucion.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/revolucion.png" alt="Revolucion"
                            class="img-fluid">
                        <span class="linea2">Revolución</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSanCosme.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/san_cosme.png"
                            alt="San Cosme" class="img-fluid">
                        <span class="linea2">San Cosme</span>
                    </a>
                </li>
                <li>
                    <a href="estacionNormal.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/normal.png" alt="Normal"
                            class="img-fluid">
                        <span class="linea2">Normal</span>
                    </a>
                </li>
                <li>
                    <a href="estacionColegioMilitar.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/colegio_militar.png" alt="Colegio Militar"
                            class="img-fluid">
                        <span class="linea2">Colegio Militar</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPopotla.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/popotla.png" alt="Popotla"
                            class="img-fluid">
                        <span class="linea2">Popotla</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCuitlahuac.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/cuitlahuac.png" alt="Cuitlahuac" class="img-fluid">
                        <span class="linea2">Cuitláhuac</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTacuba.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/tacuba.png" alt="Tacuba" class="img-fluid">
                        <span class="linea2">Tacuba</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPanteones.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/panteones.png" alt="Panteones" class="img-fluid">
                        <span class="linea2">Panteones</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCuatroCaminos.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea02/cuatro_caminos.png" alt="Cuatro caminos" class="img-fluid">
                        <span class="linea2">Cuatro caminos</span>
                    </a>
                </li>
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 3
    ******************************************************************************/
    function linea3() {
        $('#linea-3').append(`
            <ul>
                <li>
                    <a href="estacionUniversidad.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/universidad.png" alt="Universidad"
                            class="img-fluid">
                        <span class="linea3">Universidad</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCopilco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/copilco.png" alt="Copilco"
                            class="img-fluid">
                        <span class="linea3">Copilco</span> 
                    </a>
                </li>
                <li>
                    <a href="estacion-Miguel-Angel-de-Quevedo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/miguel_angel_de_quevedo.png" alt="Miguel Angel de Quevedo"
                            class="img-fluid">
                        <span class="linea3">M.A.Quevedo</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionViveros.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/viveros_derechos_humanos.png" alt="Viveros"
                            class="img-fluid">
                            <span class="linea3">Víveros</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionCoyoacan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/coyoacan.png" alt="Coyoacan" 
                            class="img-fluid">
                        <span class="linea3">Coyoacán</span>
                    </a>
                </li>
                <li>
                    <a href="estacionZapata.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/zapata.png" alt="Zapata"
                            class="img-fluid">
                        <span class="linea3">Zapata</span>
                    </a>
                </li>
                <li>
                    <a href="estacionDivisiondelNorte.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/division_del_norte.png" alt="DivisiondelNorte"
                            class="img-fluid">
                        <span class="linea3">División del norte</span>
                    </a>
                </li>
                <li>
                    <a href="estacionEugenia.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/eugenia.png" alt="Eugenia"
                            class="img-fluid">
                        <span class="linea3">Eugenia</span>
                    </a>
                </li>
                <li>
                    <a href="estacionEtiopia.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/etiopia.png" alt="Etiopia"
                            class="img-fluid">
                        <span class="linea3">Etiopía</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCentroMedico.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/centro_medico.png" alt="CentroMedico"
                            class="img-fluid">
                        <span class="linea3">Centro médico</span>
                    </a>
                </li>
                <li>
                    <a href="estacionHospitalGeneral.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/hospital_general.png" alt="HospitalGeneral"
                            class="img-fluid">
                        <span class="linea3">Hospital General</span>
                    </a>
                </li>
                <li>
                    <a href="estacionNinosHeroes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/poderjudical.png" alt="NinosHeroes"
                            class="img-fluid">
                        <span class="linea3">Niños héroes</span>
                    </a>
                </li>
                <li>
                    <a href="estacionBalderas.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/balderas.png" alt="Balderas"
                            class="img-fluid">
                        <span class="linea3">Balderas</span>
                    </a>
                </li>
                <li>
                    <a href="estacionJuarez.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/juarez.png" alt="Juarez"
                            class="img-fluid">
                        <span class="linea3">Juárez</span>
                    </a>
                </li>
                <li>
                    <a href="estacionHidalgo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/hidalgo.png" alt="Hidalgo"
                            class="img-fluid">
                        <span class="linea3">Hidalgo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionGuerrero.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/guerrero.png" alt="Guerrero"
                            class="img-fluid">
                        <span class="linea3">Guerrero</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTlatelolco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/tlatelolco.png"
                            alt="Tlatelolco" class="img-fluid">
                        <span class="linea3">Tlatelolco</span>
                    </a>
                </li>
                <li>
                    <a href="estacionLaraza.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/la_raza.png" alt="Laraza"
                            class="img-fluid">
                        <span class="linea3">La raza</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPotrero.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/potrero.png" alt="Potrero"
                            class="img-fluid">
                        <span class="linea3">Potrero</span>
                    </a>
                </li>
                <li>
                    <a href="estacionDeportivo18demarzo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/deportivo_18_de_marzo.png" alt="Deportivo18demarzo"
                            class="img-fluid">
                        <span class="linea3">Dptvo.18 de marzo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionIndiosVerdes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea03/indios_verdes.png" alt="IndiosVerdes" 
                        class="img-fluid">
                        <span class="linea3">Indios verdes</span>
                    </a>
                </li>
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 4
    ******************************************************************************/
    function linea4() {
        $('#linea-4').append(`
            <ul>
                <li>
                    <a href="estacionMartinCarrera.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/martin_carrera.png" alt="MartinCarrera"
                            class="img-fluid">
                        <span class="linea4">Martín Carrera</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTalisman.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/talisman.png" alt="Talisman"
                            class="img-fluid">
                        <span class="linea4">Talisman</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionBondojito.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/bondojito.png" alt="Bondojito"
                            class="img-fluid">
                        <span class="linea4">Bondojito</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionConsulado.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/consulado.png" alt="Consulado"
                            class="img-fluid">
                            <span class="linea4">Consulado</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionCanaldelnorte.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/canal_del_norte.png" alt="Canaldelnorte" 
                            class="img-fluid">
                        <span class="linea4">Canal del norte</span>
                    </a>
                </li>
                <li>
                    <a href="estacionMorelos.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/morelos.png" alt="Morelos"
                            class="img-fluid">
                        <span class="linea4">Morelos</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCandelaria.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/candelaria.png" alt="Candelaria"
                            class="img-fluid">
                        <span class="linea4">Candelaria</span>
                    </a>
                </li>
                <li>
                    <a href="estacionFrayServando.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/fray_servando.png" alt="FrayServando"
                            class="img-fluid">
                        <span class="linea4">Fray Servando</span>
                    </a>
                </li>
                <li>
                    <a href="estacionJamaica.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/jamaica.png" alt="Jamaica"
                            class="img-fluid">
                        <span class="linea4">Jamaica</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSantaAnita.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea04/santa_anita.png" alt="Santa Anita"
                            class="img-fluid">
                        <span class="linea4">Santa Anita</span>
                    </a>
                </li>           
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 5
    ******************************************************************************/
    function linea5() {
        $('#linea-5').append(`
            <ul>
                <li>
                    <a href="estacionPantitlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/pantitlan.png" alt="Pantitlan"
                            class="img-fluid">
                        <span class="linea5">Pantitlán</span>
                    </a>
                </li>
                <li>
                    <a href="estacionHangares.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/hangares.png" alt="Hangares"
                            class="img-fluid">
                        <span class="linea5">Hangares</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionTerminalAerea.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/terminal_aerea.png" alt="TerminalAerea"
                            class="img-fluid">
                        <span class="linea5">Terminal Aérea</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionOceania.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/oceania.png" alt="Oceania"
                            class="img-fluid">
                            <span class="linea5">Oceanía</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionAragon.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/aragon.png" alt="Aragon" 
                            class="img-fluid">
                        <span class="linea5">Aragón</span>
                    </a>
                </li>
                <li>
                    <a href="estacionEduardoMolina.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/eduardo_molina.png" alt="EduardoMolina"
                            class="img-fluid">
                        <span class="linea5">Eduardo Molina</span>
                    </a>
                </li>
                <li>
                    <a href="estacionConsulado.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/consulado.png" alt="Consulado"
                            class="img-fluid">
                        <span class="linea5">Consulado</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionValleGomez.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/valle_gomez.png" alt="ValleGomez"
                            class="img-fluid">
                        <span class="linea5">Valle Gómez</span>
                    </a>
                </li>
                <li>
                    <a href="estacionMisterios.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/misterios.png" alt="Misterios"
                            class="img-fluid">
                        <span class="linea5">Misterios</span>
                    </a>
                </li>
                <li>
                    <a href="estacionLaraza.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/la_raza.png" alt="Laraza"
                            class="img-fluid">
                        <span class="linea5">La raza</span>
                    </a>
                </li>        
                <li>
                    <a href="estacionAutobusesdelnorte.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/autobuses_del_norte.png" alt="Autobusesdelnorte"
                            class="img-fluid">
                        <span class="linea5">Autobuses del norte</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionInstitutodelpetroleo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/instituto_del_petroleo.png" alt="Institutodelpetroleo"
                            class="img-fluid">
                        <span class="linea5">Instituto del petróleo</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionPolitecnico.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea05/politecnico.png" alt="Politecnico"
                            class="img-fluid">
                        <span class="linea5">Politécnico</span>
                    </a>
                </li>      
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 6
    ******************************************************************************/
    function linea6() {
        $('#linea-6').append(`
            <ul>
                <li>
                    <a href="estacionElRosario.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/el_rosario.png" alt="ElRosario"
                            class="img-fluid">
                        <span class="linea6">El Rosario</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTezozomoc.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/tezozomoc.png" alt="Tezozomoc"
                            class="img-fluid">
                        <span class="linea6">Tezozomoc</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionAzcapotzalco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/azcapotzalco.png" alt="Azcapotzalco"
                            class="img-fluid">
                        <span class="linea6">Azcapotzalco</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionFerreria.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/ferreria.png" alt="Ferrería"
                            class="img-fluid">
                            <span class="linea6">Ferrería</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionNorte45.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/norte_45.png" alt="Norte45" 
                            class="img-fluid">
                        <span class="linea6">Norte 45</span>
                    </a>
                </li>
                <li>
                    <a href="estacionVallejo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/vallejo.png" alt="Vallejo"
                            class="img-fluid">
                        <span class="linea6">Vallejo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionInstitutodelpetroleo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/instituto_del_petroleo.png" alt="Institutodelpetroleo"
                            class="img-fluid">
                        <span class="linea6">Instituto del petróleo</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionLindavista.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/lindavista.png" alt="Lindavista"
                            class="img-fluid">
                        <span class="linea6">Lindavista</span>
                    </a>
                </li>
                <li>
                    <a href="estacionDeportivo18demarzo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/deportivo_18_de_marzo.png" alt="Deportivo18demarzo"
                            class="img-fluid">
                        <span class="linea6">Deptvo 18 de marzo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionLaVilla-Basilica.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/la_villa_basilica.png" alt="LaVilla-Basilica"
                            class="img-fluid">
                        <span class="linea6">La Villa-Basílica</span>
                    </a>
                </li>        
                <li>
                    <a href="estacionMartinCarrera.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea06/martin_carrera.png" alt="MartinCarrera"
                            class="img-fluid">
                        <span class="linea6">Martín Carrera</span>
                    </a>
                </li> 
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 7
    ******************************************************************************/
    function linea7() {
        $('#linea-7').append(`
            <ul>
                <li>
                    <a href="estacionElRosario.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/el_rosario.png" alt="ElRosario"
                            class="img-fluid">
                        <span class="linea7">El Rosario</span>
                    </a>
                </li>
                <li>
                    <a href="estacionAquilesSerdan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/aquiles_serdan.png" alt="AquilesSerdan"
                            class="img-fluid">
                        <span class="linea7">Aquiles Serdán</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionCamarones.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/camarones.png" alt="Camarones"
                            class="img-fluid">
                        <span class="linea7">Camarones</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionRefineria.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/refineria.png" alt="Refineria"
                            class="img-fluid">
                            <span class="linea7">Refinería</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionTacuba.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/tacuba.png" alt="Tacuba" 
                            class="img-fluid">
                        <span class="linea7">Tacuba</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSanJoaquin.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/san_joaquin.png" alt="SanJoaquin"
                            class="img-fluid">
                        <span class="linea7">San Joaquín</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPolanco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/polanco.png" alt="Polanco"
                            class="img-fluid">
                        <span class="linea7">Polanco</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionAuditorio.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/auditorio.png" alt="Auditorio"
                            class="img-fluid">
                        <span class="linea7">Auditorio</span>
                    </a>
                </li>
                <li>
                    <a href="estacionConstituyentes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/constituyentes.png" alt="Constituyentes"
                            class="img-fluid">
                        <span class="linea7">Constituyentes</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTacubaya.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/tacubaya.png" alt="Tacubaya"
                            class="img-fluid">
                        <span class="linea7">Tacubaya</span>
                    </a>
                </li>        
                <li>
                    <a href="estacionSanPedrodelosPinos.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/san_pedro_de_los_pinos.png" alt="SanPedrodelosPinos"
                            class="img-fluid">
                        <span class="linea7">San Pedro de los Pinos</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionSanAntonio.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/san_antonio.png" alt="SanAntonio"
                            class="img-fluid">
                        <span class="linea7">San Antonio</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionMixcoac.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/mixcoac.png" alt="Mixcoac"
                            class="img-fluid">
                        <span class="linea7">Mixcoac</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionBarrancadelmuerto.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea07/barranca_del_muerto.png" alt="Barrancadelmuerto"
                            class="img-fluid">
                        <span class="linea7">Barranca del muerto</span>
                    </a>
                </li>    
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 8
    ******************************************************************************/
    function linea8() {
        $('#linea-8').append(`
            <ul>
                <li>
                    <a href="estacionConstitucionde1917.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/constitucion_de_1917.png" alt="Constitucionde1917"
                            class="img-fluid">
                        <span class="linea8">Constitución de 1917</span>
                    </a>
                </li>
                <li>
                    <a href="estacionUAM-I.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/uam.png" alt="UAM-I"
                            class="img-fluid">
                        <span class="linea8">UAM-I</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionCerrodelaEstrella.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/cerro_de_la_estrella.png" alt="CerrodelaEstrella"
                            class="img-fluid">
                        <span class="linea8">Cerro de la Estrella</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionIztapalapa.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/iztapalapa.png" alt="Iztapalapa"
                            class="img-fluid">
                            <span class="linea8">Iztapalapa</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionAtlalilco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/atlalilco.png" alt="Atlalilco" 
                            class="img-fluid">
                        <span class="linea8">Atlalilco</span>
                    </a>
                </li>
                <li>
                    <a href="estacionEscuadron201.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/escuadron_201.png" alt="Escuadron201"
                            class="img-fluid">
                        <span class="linea8">Escuadrón 201</span>
                    </a>
                </li>
                <li>
                    <a href="estacionAculco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/aculco.png" alt="Aculco"
                            class="img-fluid">
                        <span class="linea8">Aculco</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionApatlaco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/apatlaco.png" alt="Apatlaco"
                            class="img-fluid">
                        <span class="linea8">Apatlaco</span>
                    </a>
                </li>
                <li>
                    <a href="estacionIztacalco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/iztacalco.png" alt="Iztacalco"
                            class="img-fluid">
                        <span class="linea8">Iztacalco</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCoyuya.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/coyuya.png" alt="Coyuya"
                            class="img-fluid">
                        <span class="linea8">Coyuya</span>
                    </a>
                </li>        
                <li>
                    <a href="estacionSantaAnita.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/santa_anita.png" alt="Santa Anita"
                            class="img-fluid">
                        <span class="linea8">Santa Anita</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionLaViga.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/la_viga.png" alt="LaViga"
                            class="img-fluid">
                        <span class="linea8">La Viga</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionChabacano.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/chabacano.png" alt="Chabacano"
                            class="img-fluid">
                        <span class="linea8">Chabacano</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionObrera.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/obrera.png" alt="Obrera"
                            class="img-fluid">
                        <span class="linea8">Obrera</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionDoctores.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/doctores.png" alt="Doctores"
                            class="img-fluid">
                        <span class="linea8">Doctores</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionSaltodelAgua.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/salto_del_agua.png" alt="SaltodelAgua"
                            class="img-fluid">
                        <span class="linea8">Salto del Agua</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionSanJuandeLetran.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/san_juan_de_letran.png" alt="SanJuandeLetran"
                            class="img-fluid">
                        <span class="linea8">San Juan de Letrán</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionBellasArtes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/bellas_artes.png" alt="Bellas Artes"
                            class="img-fluid">
                        <span class="linea8">Bellas Artes</span>
                    </a>
                </li>    
                <li>
                    <a href="estacionGaribaldi.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea08/garibaldi_lagunilla.png" alt="Garibaldi"
                            class="img-fluid">
                        <span class="linea8">Garibaldi</span>
                    </a>
                </li>  
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 9
    ******************************************************************************/
    function linea9() {
        $('#linea-9').append(`
            <ul>
                <li>
                    <a href="estacionPantitlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/pantitlan.png" alt="Pantitlan"
                            class="img-fluid">
                        <span class="linea9">Pantitlán</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPuebla.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/puebla.png" alt="Puebla"
                            class="img-fluid">
                        <span class="linea9">Puebla</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionCiudadDeportiva.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/ciudad_deportiva.png" alt="CiudadDeportiva"
                            class="img-fluid">
                        <span class="linea9">Ciudad Deportiva</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionVelodromo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/velodromo.png" alt="Velódromo"
                            class="img-fluid">
                            <span class="linea9">Velódromo</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionMixiuhca.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/mixihuca.png" alt="Mixiuhca" 
                            class="img-fluid">
                        <span class="linea9">Mixiuhca</span>
                    </a>
                </li>
                <li>
                    <a href="estacionJamaica.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/jamaica.png" alt="Jamaica"
                            class="img-fluid">
                        <span class="linea9">Jamaica</span>
                    </a>
                </li>
                <li>
                    <a href="estacionChabacano.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/chabacano.png" alt="Chabacano"
                            class="img-fluid">
                        <span class="linea9">Chabacano</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionLazaroCardenas.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/lazaro_cardenas.png" alt="Lázaro Cárdenas"
                            class="img-fluid">
                        <span class="linea9">Lázaro Cárdenas</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCentroMedico.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/centro_medico.png" alt="CentroMedico"
                            class="img-fluid">
                        <span class="linea9">Centro Médico</span>
                    </a>
                </li>
                <li>
                    <a href="estacionChilpancingo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/chilpancingo.png" alt="Chilpancingo"
                            class="img-fluid">
                        <span class="linea9">Chilpancingo</span>
                    </a>
                </li>        
                <li>
                    <a href="estacionPatriotismo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/patriotismo.png" alt="Patriotismo"
                            class="img-fluid">
                        <span class="linea9">Patriotismo</span>
                    </a>
                </li>   
                <li>
                    <a href="estacionTacubaya.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea09/tacubaya.png" alt="Tacubaya"
                            class="img-fluid">
                        <span class="linea9">Tacubaya</span>
                    </a>
                </li>  
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA A
    ******************************************************************************/
    function lineaA() {
        $('#linea-A').append(`
            <ul>
                <li>
                    <a href="estacionPantitlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/pantitlan.png" alt="Pantitlan"
                            class="img-fluid">
                        <span class="lineaA">Pantitlán</span>
                    </a>
                </li>
                <li>
                    <a href="estacionAgricolaOriental.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/agricola_oriental.png" alt="AgricolaOriental"
                            class="img-fluid">
                        <span class="lineaA">Agrícola Oriental</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionCanaldeSanJuan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/canal_de_san_juan.png" alt="CanaldeSanJuan"
                            class="img-fluid">
                        <span class="lineaA">Canal de San Juan</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionTepalcates.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/tepalcates.png" alt="Tepalcates"
                            class="img-fluid">
                            <span class="lineaA">Tepalcates</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionGuelatao.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/guelatao.png" alt="Guelatao" 
                            class="img-fluid">
                        <span class="lineaA">Guelatao</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPenonViejo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/penon_viejo.png" alt="PenonViejo"
                            class="img-fluid">
                        <span class="lineaA">Peñón Viejo</span>
                    </a>
                </li>
                <li>
                    <a href="estacionAcatitla.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/acatitla.png" alt="Acatitla"
                            class="img-fluid">
                        <span class="lineaA">Acatitla</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionSantaMarta.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/santa_marta.png" alt="SantaMarta"
                            class="img-fluid">
                        <span class="lineaA">Santa Marta</span>
                    </a>
                </li>
                <li>
                    <a href="estacionLosReyes.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/los_reyes.png" alt="LosReyes"
                            class="img-fluid">
                        <span class="lineaA">Los Reyes</span>
                    </a>
                </li>
                <li>
                    <a href="estacionLaPaz.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaA/la_paz.png" alt="LaPaz"
                            class="img-fluid">
                        <span class="lineaA">La Paz</span>
                    </a>
                </li>  
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA B
    ******************************************************************************/
    function lineaB() {
        $('#linea-B').append(`
            <ul>
                <li>
                    <a href="estacionCiudadAzteca.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/ciudad_azteca.png" alt="CiudadAzteca"
                            class="img-fluid">
                        <span class="lineaB">Ciudad Azteca</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPlazaAragon.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/plaza_aragon.png" alt="PlazaAragon"
                            class="img-fluid">
                        <span class="lineaB">Plaza Aragón</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionOlimpica.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/olimpica.png" alt="Olimpica"
                            class="img-fluid">
                        <span class="lineaB">Olímpica</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionEcatepec.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/ecatepec.png" alt="Ecatepec"
                            class="img-fluid">
                            <span class="lineaB">Ecatepec</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionMuzquiz.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/muzquiz.png" alt="Muzquiz" 
                            class="img-fluid">
                        <span class="lineaB">Múzquiz</span>
                    </a>
                </li>
                <li>
                    <a href="estacionRiodelosRemedios.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/rio_de_los_remedios.png" alt="RiodelosRemedios"
                            class="img-fluid">
                        <span class="lineaB">Río de los Remedios</span>
                    </a>
                </li>
                <li>
                    <a href="estacionImpulsora.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/impulsora.png" alt="Impulsora"
                            class="img-fluid">
                        <span class="lineaB">Impulsora</span>
                    </a>
                </li>                
                <li>
                    <a href="estacionNezahualcoyotl.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/nezahualcoyotl.png" alt="Nezahualcoyotl"
                            class="img-fluid">
                        <span class="lineaB">Nezahualcóyotl</span>
                    </a>
                </li>
                <li>
                    <a href="estacionVilladeAragon.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/villa_de_aragon.png" alt="VilladeAragon"
                            class="img-fluid">
                        <span class="lineaB">Villa de Aragón</span>
                    </a>
                </li>
                <li>
                    <a href="estacionBosquedeAragon.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/bosque_de_aragon.png" alt="BosquedeAragon"
                            class="img-fluid">
                        <span class="lineaB">Bosque de Aragón</span>
                    </a>
                </li>  
                <li>
                    <a href="estacionDeportivoOceania.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/deportivo_oceania.png" alt="Deportivo Oceania"
                            class="img-fluid">
                        <span class="lineaB">Deportivo Oceanía</span>
                    </a>
                </li>  
                <li>
                    <a href="estacionOceania.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/oceania.png" alt="Oceania"
                            class="img-fluid">
                        <span class="lineaB">Oceanía</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionRomeroRubio.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/romero_rubio.png" alt="RomeroRubio"
                            class="img-fluid">
                        <span class="lineaB">Romero Rubio</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionRicardoFloresMagon.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/ricardo_flores_magon.png" alt="RicardoFloresMagon"
                            class="img-fluid">
                        <span class="lineaB">R. Flores Magón</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionSanLazaro.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/san_lazaro.png" alt="SanLazaro"
                            class="img-fluid">
                        <span class="lineaB">San Lázaro</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionMorelos.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/morelos.png" alt="Morelos"
                            class="img-fluid">
                        <span class="lineaB">Morelos</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionTepito.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/tepito.png" alt="Tepito"
                            class="img-fluid">
                        <span class="lineaB">Tepito</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionLagunilla.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/lagunilla.png" alt="Lagunilla"
                            class="img-fluid">
                        <span class="lineaB">Lagunilla</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionGaribaldi.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/garibaldi.png" alt="Garibaldi"
                            class="img-fluid">
                        <span class="lineaB">Garibaldi</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionGuerrero.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/guerrero.png" alt="Guerrero"
                            class="img-fluid">
                        <span class="lineaB">Guerrero</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionBuenavista.html" class="tooltipEstacion">
                        <img src="../../images/la-red/lineaB/buenavista.png" alt="Buenavista"
                            class="img-fluid">
                        <span class="lineaB">Buenavista</span>
                    </a>
                </li> 
            </ul>
        `);
    };

    /*****************************************************************************
                                LINEA 12
    ******************************************************************************/
    function linea12() {
        $('#linea-12').append(`
            <ul>
                <li>
                    <a href="estacionTlahuac.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/tlahuac.png" alt="Tlahuac"
                            class="img-fluid">
                        <span class="linea12">Tláhuac</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTlaltenco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/tlaltenco.png" alt="Tlaltenco"
                            class="img-fluid">
                        <span class="linea12">Tlaltenco</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionZapotitlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/zapotitlan.png" alt="Zapotitlan"
                            class="img-fluid">
                        <span class="linea12">Zapotitlán</span> 
                    </a>
                </li>
                <li>
                    <a href="estacionNopalera.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/nopalera.png" alt="Nopalera"
                            class="img-fluid">
                            <span class="linea12">Nopalera</span> 
                        </a>
                    </li>
                <li>
                    <a href="estacionOlivos.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/olivos.png" alt="Olivos" 
                            class="img-fluid">
                        <span class="linea12">Olivos</span>
                    </a>
                </li>
                <li>
                    <a href="estacionTezonco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/tezonco.png" alt="Tezonco"
                            class="img-fluid">
                        <span class="linea12">Tezonco</span>
                    </a>
                </li>
                <li>
                    <a href="estacionPeriferico-Oriente.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/periferico_oriente.png" alt="Periferico-Oriente"
                            class="img-fluid">
                        <span class="linea12">Periférico Oriente</span>
                    </a>
                </li>
                <li>
                    <a href="estacionCalle11.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/calle_11.png" alt="Calle11"
                            class="img-fluid">
                        <span class="linea12">Calle 11</span>
                    </a>
                </li>              
                <li>
                    <a href="estacionLomasEstrella.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/lomas_estrella.png" alt="LomasEstrella"
                            class="img-fluid">
                        <span class="linea12">Lomas Estrella</span>
                    </a>
                </li>
                <li>
                    <a href="estacionSanAndresTomatlan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/san_andres_tomatlan.png" alt="SanAndresTomatlan"
                            class="img-fluid">
                        <span class="linea12">San Andrés Tomatlán</span>
                    </a>
                </li>  
                <li>
                    <a href="estacionCulhuacan.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/culhuacan.png" alt="Culhuacan"
                            class="img-fluid">
                        <span class="linea12">Culhuacán</span>
                    </a>
                </li>  
                <li>
                    <a href="estacionAtlalilco.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/atlalilco.png" alt="Atlalilco"
                            class="img-fluid">
                        <span class="linea12">Atlalilco</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionMexicaltzingo.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/mexicaltzingo.png" alt="Mexicaltzingo"
                            class="img-fluid">
                        <span class="linea12">Mexicaltzingo</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionErmita.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/ermita.png" alt="Ermita"
                            class="img-fluid">
                        <span class="linea12">Ermita</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionEjeCentral.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/eje_central.png" alt="EjeCentral"
                            class="img-fluid">
                        <span class="linea12">Eje Central</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionParquedelosVenados.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/parque_de_los_venados.png" alt="ParquedelosVenados"
                            class="img-fluid">
                        <span class="linea12">Parque de los Venados</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionZapata.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/zapata.png" alt="Zapata"
                            class="img-fluid">
                        <span class="linea12">Zapata</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionHospital20deNoviembre.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/hospital_20_de_noviembre.png" alt="Hospital20deNoviembre"
                            class="img-fluid">
                        <span class="linea12">Hospital 20 de Nov</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionInsurgentesSur.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/insurgentes_sur.png" alt="Insurgentes Sur"
                            class="img-fluid">
                        <span class="linea12">Insurgentes Sur</span>
                    </a>
                </li> 
                <li>
                    <a href="estacionMixcoac.html" class="tooltipEstacion">
                        <img src="../../images/la-red/linea12/mixcoac.png" alt="Mixcoac"
                            class="img-fluid">
                        <span class="linea12">Mixcoac</span>
                    </a>
                </li> 
            </ul>
        `);
    };  

});