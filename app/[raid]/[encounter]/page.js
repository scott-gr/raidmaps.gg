import raids from '@/app/api/raids.json';

export default function EncounterPage({params}) {

  const {raid, encounter} = params;
  const filteredRaid = raids.raids.find(r => r.link === raid);
  const filteredEncounter = filteredRaid.encounters.find(e => e.name.toLowerCase() === encounter);
  return <><h1>{filteredEncounter.name}</h1></>;
}
