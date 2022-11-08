import GroupTable from '../components/GroupTable'
import GroupFixture from '../components/GroupFixture'

export default function Group(props) {  
  return (
        <div className=''>
          <GroupTable title={props.group} countriesData={props.countriesData}/>
          <GroupFixture fixtureData={props.fixtureData} countriesData={props.countriesData}/>
        </div>
  )
}