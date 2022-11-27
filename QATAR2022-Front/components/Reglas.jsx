function ReglasComponent(props) {

    return (
            <div className="bg-qatarSilver w-11/12 sm:w-4/5 mx-auto rounded-md xl:px-16">
              <div className="pt-8 pb-2 px-6 md:px-8 text-qatarRed text-4xl flex flex-col items-center"><strong>Crypto PRODE</strong><em>Qatar 2022</em></div>
              <div className="pt-2 pb-2 px-6 md:px-8 text-black indent-6 text-center text-sm md:text-base"><em>Bienvenidos al Crypto PRODE - Qatar 2022, una aplicación web desarrollada por fede y juan con el único fin de divertirse, unificando los gloriosos mundos de las cripto y el fulbo. </em></div>
              <div className="pt-2 pb-0 px-6 md:px-8 text-qatarRed text-center"><strong><em>Red y Smart Contract</em></strong></div>
              <div className="pt-2 pb-2 px-6 md:px-8 text-black indent-6 text-sm md:text-base text-center lg:text-left">La aplicación esta montada sobre la red de polygon, donde el smart contract de la aplicación recibe la apuesta base en la moneda designada DAI, recibe los resultados pronosticados de cada participante, calcula los puntajes de cada jugar y al finalizar la competencia, pone a disposición los premios a los ganadores para ser reclamados.</div>
              <div className="pt-2 pb-0 px-6 md:px-8 text-qatarRed text-center"><strong><em>Requerimientos</em></strong></div>
              <div className="pt-2 pb-2 px-6 md:px-8 text-black indent-6 text-sm md:text-base text-center lg:text-left">Para participar necesitas tener una wallet de MetaMask (preferentemente), Rainbow, Coinbase Wallet o WalletConnect, y saber hacer una transacción básica en la red de polygon. Vas a necesitar contar con 1 MATIC (token nativo de polygon) aprox en tu wallet para pagar el gas de las transacciones en la red.</div>
              <div className="pt-2 pb-2 px-6 md:px-8 text-qatarRed text-2xl text-center md:text-left"><strong>Mecánica de Juego</strong></div>
              <div className="pt-2 md:pb-2 px-6 md:px-8 text-black indent-6 text-md text-sm md:text-base">1. Enviá tu address a fede o Juan para que te registren.</div>
              <div className="pt-2 md:pb-2 px-6 md:px-8 text-black indent-6 text-md text-sm md:text-base">2. Conectá tu wallet a la red de polygon desde la página de <strong>Mi Prode</strong>.</div>   
              <div className="pt-2 md:pb-2 px-6 md:px-8 text-black indent-6 text-md text-sm md:text-base">3. Si no tenes MATIC, fondea la wallet con aprox 1 Matic (0.93 usd aprox.). Podes enviar desde algún exchange o a desde otra red a través de algún bridge.</div>
              <div className="pt-2 md:pb-2 px-6 md:px-8 text-black indent-6 text-md text-sm md:text-base">4. Una vez conectado y con fondos, aprobá el token DAI para poder enviar tu inscripción desde la página de <strong>Mi Prode</strong>.</div>
              <div className="pt-2 md:pb-2 px-6 md:px-8 text-black indent-6 text-md text-sm md:text-base">5. Una vez aprobado el token envía al smart contracto la apuesta única para participar de <strong>15 DAI</strong> a través de la página de <strong>Mi Prode</strong>.</div>    
              <div className="pt-2 md:pb-2 px-6 md:px-8 text-black indent-6 text-sm md:text-base">6. Una vez conectado, aprobado el token y hecho el depósito, vas a poder visualizar las tarjetas para realizar tus pronósticos! Completa la boleta y envia tus resultados. Listo, ya estas atroden! </div>
              <div className="pt-2 px-8 text-black indent-6 text-sm md:text-base">Podes enviar tus resultado cuantas veces quieras, pero tené en cuenta que &#128226;:</div>
              <ul className="list-disc list-inside pl-8">
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> A menos de 30 minutos del inicio del partido los resultados ya no serán tomados como válidos. &#128680;</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> Al enviar resultados, todos los partidos que se hayan pronosticado se registraran, sobreescribiendo los resultados anteriores si los hubiese y siempre y cuando se cumpla el punto anterior.&#128680;</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> No se tomará como válido pronosticos de mas de 14 goles por equipo (Ej. no son válidos los siguientes resultados: 15-15 o 16-1 o 3-17).&#128680;</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> No se tomará como válido pronosticos que dejen uno de los dos equipos sin completar el score (Ej. no son válidos los siguientes resultados: 2- o -1 o 5-).&#128680;</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> Se puede dejar partidos enteros vacíos! Al enviar resultados, aquellos partidos no completados o no válidos no seran tomados en cuenta, dejando como válido el resultado registrado anteriormente si lo hubiese.</li>              
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> Si ya enviaste resultados anteriormente, vas a poder ver tus pronósticos en la misma boleta, en el mismo casillero, en un color gris.</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> Al cargar resultados nuevos, los mismos los vas a poder distinguir en un color rojo oscuro. </li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> Para la <strong>segunda fase</strong>, se considera el resultado a pronosticar el del <strong>partido completo hasta los penales</strong> (90 min o 120 min si hubiese tiempo extra). Los penales no suman ni restan puntos ni se pronostican. &#128680;</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base"> Los pronósticos para primera y segunda fase se envía en boletas separadas como se ve en la página de <strong>Mi Prode</strong>. Aún así, los puntajes de ambas fases suman en una única tabla general para definir a los ganadores al finalizar el mundial completo. Se sugiere esperar a conocer a los equipos para enviar la boleta de la segunda fase.</li>
              </ul>
              <div className="pt-2 px-8 text-black indent-6 text-sm md:text-base">7. Una vez finalizado el mundial, el smart contract se encargará de calular los premios a los ganadores y los pondrá a disposición de los mismos para ser reclamados.</div>
              <div className="pt-2 px-8 text-black indent-6 text-sm md:text-base">8. En la paǵina <strong>Info</strong> se puede consultar fixture y resultados reales del Mundial!</div>
              <div className="pt-2 pb-2 px-8 text-qatarRed text-2xl text-center md:text-left"><strong>Puntajes</strong></div>
              <div className="pt-2 px-8 text-black indent-6 text-sm md:text-base">El puntaje máximo posible a sumar por cada partido es de <strong>30 Pts</strong>, desglosado de la siguiente forma:</div>
              <ul className="list-disc list-inside pl-4">
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">Acertar el ganador-perdedor o si es empate suma <strong>16 Pts</strong>.</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">Acertar la diferencia de gol del partido suma <strong>4 Pts</strong> extra. (Si el resultado es empate, solo se suman estos 4 puntos si se acierta el resultado exacto)</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">Acertar la cantidad de goles del equipo local suma <strong>5 Pts</strong> extra. (Se puede sumar independientemente de haber acertado el ganador-perdedor o la diferencia de gol)</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">Acertar la cantidad de goles del equipo visitante suma <strong>5 Pts</strong> extra. (Se puede sumar independientemente de haber acertado el ganador-perdedor o la diferencia de gol)</li>
              </ul>
              <div className="pt-2 px-8 text-black indent-6 text-sm md:text-base">En la página de <strong>Posiciones</strong> se podrá ver la tabla de posiciones con todos puntajes de los participantes registrados.</div>
              <div className="pt-8 pb-2 px-8 text-qatarRed text-2xl text-center md:text-left"><strong>Premios</strong></div>
              <div className="indent-6 md:pb-2 px-8 text-black text-sm md:text-base">Del monto total recaudado por el protocolo, los premios se distribuiran de la siguiente manera:</div>
              <ul className="list-decimal list-inside pl-8 pb-4">
                <li className="pt-2 md:pb-2 px-8 text-black text-sm md:text-base text-center md:text-left">Primer Puesto: <strong>60%</strong>&#127942;.</li>
                <li className="pt-2 md:pb-2 px-8 text-black text-sm md:text-base text-center md:text-left">Segundo Puesto: <strong>30%</strong>&#129352;.</li>
                <li className="pt-2 md:pb-2 px-8 text-black text-sm md:text-base text-center md:text-left">Tercer Puesto: <strong>10%</strong>&#129353;.</li>
              </ul>
              <div className="indent-6 md:pb-2 px-8 text-black text-sm md:text-base">En caso de empate en alguna de las posiciones, los premios se reparten en partes iguales absorbiendo los porcentajes de las posiciones inferiores. Algunos ejemplos:</div>

              <ul className="list-disc list-inside pl-4 pb-4">
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">Triple empate en la 1era posición: se reparten el 100% del premio en partes iguales.</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">1 solo primer puesto + doble empate en el segundo puesto: el 1ero se lleva el 60%, los segundos se reparten en partes iguales el 40% (30% + 10%) restante.</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">Doble empate en el primer puesto + doble empate en el segundo puesto: los primeros se reparten en partes iguales el 90% (60% + 30%), y los segundos se reparten en partes iguales el 10% restante.</li>
                <li className="pt-2 md:pb-2 px-4 lg:px-12 text-black text-sm md:text-base">1 solo primer puesto + 1 solo segundo puesto + triple empate en el 3er puesto: el primero se lleva su 60%, el segundo su 30%, y los terceros se reparten en partes iguales el restante 10%.</li>
              </ul>
            </div>
    );
  }

export default ReglasComponent;
