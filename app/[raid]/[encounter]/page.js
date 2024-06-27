import raids from '@/app/api/raids.json';
import Map from '@/app/components/map/Map';

export async function generateMetadata({ params }) {
  const { raid, encounter } = params;
  const filteredRaid = raids.raids.find((r) => r.link === raid);
  const filteredEncounter = filteredRaid.encounters.find(
    (e) => e.link === encounter
  );
  return {
    title: filteredEncounter.name + ' map',
    description:
      'Shareable map of the ' +
      filteredEncounter.name +
      ' encounter from ' +
      filteredRaid.name,
    openGraph: {
      title: filteredEncounter.name + ' map',
      description:
        'Shareable map of the ' +
        filteredEncounter.name +
        ' encounter from ' +
        filteredRaid.name,
    },
  };
}
export default function EncounterPage({ params }) {
  const { raid, encounter } = params;
  const filteredRaid = raids.raids.find((r) => r.link === raid);
  const filteredEncounter = filteredRaid.encounters.find(
    (e) => e.link === encounter
  );
  const map = filteredEncounter.map;

  return (
    <>
      {map === '' ? (
        <div>
          The {filteredEncounter.name} encounter map is still in development{' '}
        </div>
      ) : (
        <Map src={map} alt={filteredEncounter.name} />
      )}
    </>
  );
}
