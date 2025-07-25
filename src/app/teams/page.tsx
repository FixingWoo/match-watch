import { Column, Flex, Text } from '@/components';
import { Meta } from '@/modules';

export async function generateMetadata() {
  return Meta.generate({
    title: 'Teams',
    description: 'Teams',
  });
}

export default function Teams() {
  return (
    <Column maxWidth={'m'}>
      <Flex fillWidth horizontal="center" paddingTop="48">
        <Text variant="display-strong-m">Coming Soon</Text>
      </Flex>
    </Column>
  );
}
