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
                        <span class="linea1">Baulbuena</span>
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
                                LINEA 6
    ******************************************************************************/

    /*****************************************************************************
                                LINEA 7
    ******************************************************************************/

    /*****************************************************************************
                                LINEA 8
    ******************************************************************************/


    /*****************************************************************************
                                LINEA 9
    ******************************************************************************/

    /*****************************************************************************
                                LINEA A
    ******************************************************************************/

    /*****************************************************************************
                                LINEA B
    ******************************************************************************/

    /*****************************************************************************
                                LINEA 12
    ******************************************************************************/
});