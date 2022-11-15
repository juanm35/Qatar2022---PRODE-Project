function ReglasComponent(props) {

    return (
            <div className="bg-qatarSilver w-11/12 sm:w-4/5 mx-auto rounded-md">
              <div className="pt-8 pb-2 px-8 text-qatarRed text-4xl"><strong>Crypto PRODE - Qatar 2022</strong></div>
              <div className="pt-2 pb-2 px-8 text-black indent-6">Bienvenidos al Crypto PRODE - Qatar 2022, una aplicación web desarrollada por fede y juan con el único fin de divertirse, unificando los gloriosos mundos de las cripto y el fulbo. </div>
              <div className="pt-2 pb-0 px-8 text-qatarRed indent-6"><em>Red y Smart Contract</em></div>
              <div className="pt-2 pb-2 px-8 text-black indent-6">La aplicación esta montada sobre la red de polygon, donde el smart contract de la aplicación recibe la apuesta base en la moneda designada DAI, recibe los resultados pronosticados de cada participante, calcula los puntajes de cada jugar y al finalizar la competencia, pone a disposición los premios a los ganadores para ser reclamados.</div>
              <div className="pt-2 pb-0 px-8 text-qatarRed indent-6"><em>Requerimientos</em></div>
              <div className="pt-2 pb-2 px-8 text-black indent-6">Para participar necesitas tener una wallet de MetaMask (preferentemente), Rainbow, Coinbase Wallet o WalletConnect, y saber hacer una transacción básica en la red de polygon. Vas a necesitar contar con 1 MATIC (token nativo de polygon) aprox en tu wallet para pagar el gas de las transacciones en la red.</div>
              <div className="pt-2 pb-2 px-8 text-qatarRed text-2xl"><strong>Mecánica de Juego</strong></div>
              <div className="pt-2 pb-2 px-8 text-black indent-6 text-md">1. Enviá tu address a fede o Juan para que te registren.</div>
              <div className="pt-2 pb-2 px-8 text-black indent-6 text-md">2. Conectá tu wallet a la red de polygon desde la página de <strong>Mi Prode</strong>.</div>   
              <div className="pt-2 pb-2 px-8 text-black indent-6 text-md">3. Si no tenes MATIC, fondea la wallet con aprox 1 Matic (0.93 usd aprox.). Podes enviar desde algún exchange o a desde otra red a través de algún bridge.</div>
              <div className="pt-2 pb-2 px-8 text-black indent-6 text-md">4. Una vez conectado y con fondos, aprobá el token DAI para poder enviar tu inscripción desde la página de <strong>Mi Prode</strong>.</div>
              <div className="pt-2 pb-2 px-8 text-black indent-6 text-md">5. Una vez aprobado el token envía al smart contracto la apuesta única para participar de <strong>15 DAI</strong> a través de la página de <strong>Mi Prode</strong>.</div>    
              <div className="pt-2 pb-2 px-8 text-black indent-6">6. Una vez conectado, aprobado el token y hecho el depósito, vas a poder visualizar las tarjetas para realizar tus pronósticos! Completa la boleta y envia tus resultados. Listo, ya estas atroden! </div>
              <div className="pt-2 px-8 text-black indent-6">Podes enviar tus resultado cuantas veces quieras, pero tené en cuenta que &#128226;:</div>
              <ul className="list-disc list-inside pl-8">
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> A menos de 30 minutos del inicio del partido los resultados ya no serán tomados como válidos. &#128680;</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> Al enviar resultados, todos los partidos que se hayan pronosticado se registraran, sobreescribiendo los resultados anteriores si los hubiese y siempre y cuando se cumpla el punto anterior.&#128680;</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> Se puede dejar resultados vacíos! Al enviar resultados, aquellos partidos no completados no seran tomados en cuenta, dejando como válido el resultado registrado anteriormente si lo hubiese.&#128680;</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> Si ya enviaste resultados anteriormente, vas a poder ver tus pronósticos en la misma boleta, en el mismo casillero, en un color gris. &#11035;</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> Al cargar resultados nuevos, los mismos los vas a poder distinguir en un color rojo oscuro. &#128308;</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> Los pronósticos para primera y segunda fase se envía en boletas separadas como se ve en la página de <strong>Mi Prode</strong>. Aún así, los puntajes de ambas fases suman en una única tabla general para definir a los ganadores al finalizar el mundial completo. Se sugiere esperar a conocer a los equipos para enviar la boleta de la segunda fase.</li>
              </ul>
              <div className="pt-2 px-8 text-black indent-6">7. Una vez finalizado el mundial, el smart contract se encargará de calular los premios a los ganadores y los pondrá a disposición de los mismos para ser reclamados.</div>
              <div className="pt-2 px-8 text-black indent-6">8. En la paǵina <strong>Info</strong> se puede consultar fixture y resultados reales del Mundial!</div>
              <div className="pt-2 pb-2 px-8 text-qatarRed text-2xl"><strong>Puntajes</strong></div>
              <div className="pt-2 px-8 text-black indent-6">El puntaje máximo posible a sumar por cada partido es de <strong>30 Pts</strong>, desglosado de la siguiente forma:</div>
              <ul className="list-disc list-inside pl-4">
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black">Acertar el ganador-perdedor o si es empate suma <strong>16 Pts</strong>.</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black">Acertar la diferencia de gol del partido suma <strong>4 Pts</strong> extra.</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black">Acertar la cantidad de goles del equipo local suma <strong>5 Pts</strong> extra. (Se puede sumar independientemente de haber acertado el ganador-perdedor o la diferencia de gol)</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black">Acertar la cantidad de goles del equipo visitante suma <strong>5 Pts</strong> extra. (Se puede sumar independientemente de haber acertado el ganador-perdedor o la diferencia de gol)</li>
              </ul>
              <div className="pt-2 px-8 text-black indent-6">En la página de <strong>Posiciones</strong> se podrá ver la tabla de posiciones con todos puntajes de los participantes registrados.</div>
              <div className="pt-8 pb-4 px-8 text-qatarRed text-2xl"><strong>Premios</strong></div>
              <div className="pl-12 pb-2 px-8 text-black">Del monto total recaudado por el protocolo, los premios se distribuiran de la siguiente manera:</div>
              <ul className="list-decimal list-inside pl-8 pb-4">
                <li className="pt-2 pb-2 px-8 text-black">Primer Puesto: <strong>50%</strong>&#127942;.</li>
                <li className="pt-2 pb-2 px-8 text-black">Segundo Puesto: <strong>35%</strong>&#129352;.</li>
                <li className="pt-2 pb-2 px-8 text-black">Tercer Puesto: <strong>15%</strong>&#129353;.</li>
              </ul>
            </div>
    );
  }

export default ReglasComponent;