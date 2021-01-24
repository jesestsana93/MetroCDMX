$(function () {
    var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].substring(0, 4)
    var pathImg = '';
    var path = '';

    linea1();
    linea2();

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
                    <a href="" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/gomezfarias.png" alt="gomezfarias"
                            class="img-fluid">
                        <span class="linea1">Gómez Farias</span>
                    </a>
                </li>
                <li>
                    <a href="" class="tooltipEstacion">
                        <img src="../../images/la-red/linea01/zaragoza.png" alt="zaragoza"
                            class="img-fluid">
                        <span class="linea1">Zaragoza</span>
                    </a>
                </li>
                <li>
                    <a href="" class="tooltipEstacion">
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

    /*****************************************************************************
                                LINEA 4
    ******************************************************************************/

    /*****************************************************************************
                                LINEA 5
    ******************************************************************************/

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