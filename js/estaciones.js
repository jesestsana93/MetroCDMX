$(function () {
    var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].substring(0, 4)
    var pathImg = '';
    var path = '';

    linea1();

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
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/chapultepec.png" alt="Chapultepec"
                        class="img-fluid">
                        <span class="linea1">Chapultepec</span> 
                    </a>
                </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/sevilla.png" alt="Sevilla" 
                        class="img-fluid">
                    <span class="linea1">Sevilla</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/insurgentes.png" alt="Insurgentes"
                        class="img-fluid">
                    <span class="linea1">Insurgentes</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/cuauhtemoc.png" alt="cuauhtemoc"
                        class="img-fluid">
                    <span class="linea1">Cuauhtémoc</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/balderas.png" alt="balderas"
                        class="img-fluid">
                    <span class="linea1">Balderas</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/saltodelagua.png" alt="saltodelagua"
                        class="img-fluid">
                    <span class="linea1">Salto del agua</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/isabelacatolica.png" alt="isabelacatolica"
                        class="img-fluid">
                    <span class="linea1">Isabel la catolica</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/pinosuarez.png" alt="pinosuarez"
                        class="img-fluid">
                    <span class="linea1">Pino Suárez</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/merced.png" alt="merced"
                        class="img-fluid">
                    <span class="linea1">La Merced</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/candelaria.png" alt="candelaria"
                        class="img-fluid">
                    <span class="linea1">Candelaria</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/sanlazaro.png" alt="sanlazaro"
                        class="img-fluid">
                    <span class="linea1">San Lázaro</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/moctezuma.png" alt="moctezuma"
                        class="img-fluid">
                    <span class="linea1">Moctezuma</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
                    <img src="../../images/la-red/linea01/balbuena.png" alt="balbuena"
                        class="img-fluid">
                    <span class="linea1">Baulbuena</span>
                </a>
            </li>
            <li>
                <a href="" class="tooltipEstacion">
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

});