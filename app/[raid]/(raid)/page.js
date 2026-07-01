import Card from '@/app/components/card/TitleCard';
import raids from '@/app/api/raids.json';

export function lowerCase(string) {
  return string.toLowerCase();
}

export async function generateMetadata({ params }) {
  const { raid } = await params;
  const filteredRaid = raids.raids.find((r) => r.link === raid);

  return {
    title: filteredRaid.name + ' maps',
    description:
      'Simple, shareable maps for the ' + filteredRaid.name + ' raid',
    openGraph: {
      title: filteredRaid.name + ' maps',
      description:
        'Simple, shareable maps for the ' + filteredRaid.name + ' raid',
    },
  };
}

export default async function RaidPage({ params }) {
  const { raid } = await params;
  const filteredRaid = raids.raids.find((r) => r.link === raid);

  if (!filteredRaid) {
    return <div>Raid not found</div>;
  }

  const encounterList = filteredRaid.encounters.map((encounter) => {
    return (
      <Card
        key={encounter.name}
        text={encounter.name}
        link={raid + '/' + encounter.link}
      ></Card>
    );
  });

  return <>{encounterList}</>;
}
