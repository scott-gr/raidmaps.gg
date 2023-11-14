import raids from '@/app/api/raids.json';
import Map from '@/app/components/map/Map';

export default function EncounterPage({params}) {
  const {raid, encounter} = params;
  const filteredRaid = raids.raids.find(r => r.link === raid);
  const filteredEncounter = filteredRaid.encounters.find(e => e.name.toLowerCase() === encounter);
  const map = filteredEncounter.map;
  console.log("encounter:" + filteredEncounter)
  return (
    <>
      <Map src={map} alt={filteredEncounter.name}  />
    </>
  );
}
