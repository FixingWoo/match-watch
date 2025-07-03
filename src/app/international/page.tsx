import { Column, Flex, Text } from '@/components';
import { Meta } from '@/modules';

export async function generateMetadata() {
  return Meta.generate({
    title: 'International',
    description: 'International',
  });
}

export default function Work() {
  return (
    <Column maxWidth={'m'}>
      <Flex fillWidth horizontal="center" paddingTop="48">
        <Text variant="display-strong-m">Coming Soon</Text>
      </Flex>
    </Column>
  );
}
