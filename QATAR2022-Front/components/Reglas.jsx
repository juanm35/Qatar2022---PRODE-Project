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
              <div className="pt-2 pb-2 px-8 text-black indent-6 text-md">La tarifa base para participar es de <strong>15 DAI</strong>. La misma va a ser solicitada la primera vez que se intente enviar resultados.</div>
              <div className="pt-2 pb-2 px-8 text-black indent-6">Para enviar tus resultados pronosticados, en la página de Mi Prode, vas a poder conectar tu wallet. Una vez connectado vas a ver las tarjetas de todos los partidos para completar. Cuando estes listo clickea en enviar y listo, ya estas participando!</div>
              <div className="pt-2 px-8 text-black indent-6">Podes enviar tus resultado cuantas veces quieras! Tené en cuenta que:</div>
              <ul className="list-disc list-inside pl-8">
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> Solo serán tomados como válidos, aquellos resultados de partidos que aún estén a 30 minutos o más del comienzo del partido a la hora de enviarlos.</li>
                <li className="pt-2 pb-2 px-4 lg:px-12 text-black"> El costo del gas de cada envío corre por cuenta propia.</li>
              </ul>
              <div className="pt-2 px-8 text-black indent-6">Una vez finalizado el último partido, el protocolo reparte los premios a los jugadores con mejores puntajes.</div>
              <div className="pt-2 pb-2 px-8 text-qatarRed text-2xl"><strong>Puntajes</strong></div>
              <ul className="list-disc list-inside pl-4">
                <li className="pt-2 pb-2 px-8 text-black">Acertar el ganador-perdedor-empate suma <strong>x Pts</strong>.</li>
                <li className="pt-2 pb-2 px-8 text-black">Acertar el resultado exacto del partido suma <strong>x Pts</strong>.</li>
              </ul>
              <div className="pt-8 pb-4 px-8 text-qatarRed text-2xl"><strong>Premios</strong></div>
              <div className="pl-12 pb-2 px-8 text-black">Del monto total recaudado por el protocolo, los premios se distribuiran de la siguiente manera:</div>
              <ul className="list-decimal list-inside pl-8 pb-4">
                <li className="pt-2 pb-2 px-8 text-black">Primer Puesto: <strong>x %</strong>.</li>
                <li className="pt-2 pb-2 px-8 text-black">Segundo Puesto: <strong>x %</strong>.</li>
                <li className="pt-2 pb-2 px-8 text-black">Tercer Puesto: <strong>x %</strong>.</li>
              </ul>
            </div>
    );
  }

export default ReglasComponent;