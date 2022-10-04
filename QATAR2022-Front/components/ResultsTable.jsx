import ResultsTableRow from './ResultsTableRow'

function Group(props) {   
    return (
            <div className="m-auto bg-transparent/[0.6] rounded-xl py-12 w-11/12 md:w-4/5 lg:w-3/5" >
                <table id="" className="text-white w-full m-auto table-fixed">
                    <thead className='w-1/2'>
                        <tr className='w-full'>
                            <th className="w-1/5">Pos</th>
                            <th className="w-3/5">Wallet / Jugador</th>
                            <th className="w-1/5">Pts</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
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