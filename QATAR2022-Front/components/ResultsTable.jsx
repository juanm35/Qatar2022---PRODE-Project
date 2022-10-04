import ResultsTableRow from './ResultsTableRow'

function Group(props) {   
    return (
            <div className="m-auto bg-transparent/[0.6] rounded-xl py-12 w-4/5" >
                <br/>
                <div className="text-white"> {props.title} </div>
                <table id="" className="text-white w-full m-auto">
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th className="w-2/5">Wallet / Jugador</th>
                            <th className="">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                        <ResultsTableRow/>
                    </tbody>
                </table>
            </div>
    );
  }

export default Group;