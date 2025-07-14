import { Column, Flex, LeagueList } from '@/components';
import { Meta } from '@/modules';

export async function generateMetadata() {
  return Meta.generate({
    title: 'Leagues',
    description: 'Leagues',
  });
}

export default function Leagues() {
  return (
    <Column maxWidth={'m'}>
      <Flex fillWidth horizontal="center" paddingTop="48">
        <LeagueList />
      </Flex>
    </Column>
  );
}
