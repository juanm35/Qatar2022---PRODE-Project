import ResultsTableRow from './ResultsTableRow'
import { useAccount} from 'wagmi';

function Group(props) {   
    const account = useAccount()

    const firsts = props.scores.filter((element) => element.score === props.scores[0].score)
    const numberOfFirsts = firsts.length

    const scoresNoFirsts = props.scores.filter((element) => element.score !== props.scores[0].score)
    const seconds = scoresNoFirsts.filter((element) => element.score === scoresNoFirsts[0].score)
    const numberOfSeconds = seconds.length

    const scoresNoFirstNoSeconds = scoresNoFirsts.filter((element) => element.score !== scoresNoFirsts[0].score)
    const thirds = scoresNoFirstNoSeconds.filter((element) => element.score === scoresNoFirstNoSeconds[0].score)
    const numberOfThirds = thirds.length

    return (
            <div className="m-auto bg-transparent/[0.6] rounded-xl py-12 w-11/12 md:w-4/5 lg:w-3/5" >
                <div className='text-white text-3xl md:text-4xl w-full text-center pb-8'>{props.title}</div>
                <table id="" className="text-white w-full m-auto table-fixed">
                    <thead className='w-1/2'>
                        <tr className='w-full'>
                            <th className="w-1/5">Pos</th>
                            <th className="w-3/5">Wallet / Jugador</th>
                            <th className="w-1/5">Pts</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                    { props.scores.map((score,index) => <ResultsTableRow key={`index${index}-${score.address}`} address={score.address} score={score.score} index={index} currentPlayer={account.address === score.address} price={index<numberOfFirsts? "First" : numberOfFirsts<3 && index<(numberOfSeconds + numberOfFirsts)? "Second" : (numberOfFirsts + numberOfSeconds)<3 && index<(numberOfFirsts + numberOfSeconds + numberOfThirds)? "Third" : "No price"}/>)}
                    </tbody>
                </table>
            </div>
    );
  }

export default Group;