import FixtureCard from './FixtureCard'

function GroupFixture(props) {

      const roundNumber1 = props.fixtureData.filter((match) => match.RoundNumber === 1);
      const roundNumber2 = props.fixtureData.filter((match) => match.RoundNumber === 2);
      const roundNumber3 = props.fixtureData.filter((match) => match.RoundNumber === 3);

    return (
        <div className="m-8 sm:mx-16 md:mx-6 lg:mx-10 xl:mx-20 grid grid-cols-1 gap-2">
            <div className="">
                <FixtureCard title="Fecha 1" roundMatches={roundNumber1} countriesData={props.countriesData}/>
            </div>
            <div className="">
                <FixtureCard title="Fecha 2" roundMatches={roundNumber2} countriesData={props.countriesData}/>
            </div>
            <div className="">
                <FixtureCard title="Fecha 3" roundMatches={roundNumber3} countriesData={props.countriesData}/>
            </div>
        </div>
    );
  }

export default GroupFixture;