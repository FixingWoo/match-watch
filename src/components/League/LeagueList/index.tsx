'use client';

import Image from 'next/image';

import { Flex, Text, Grid, Line } from '@/components';
import { useTopLeagues } from '../hooks';

const LeagueList = () => {
  const { data: leagues, isLoading, error } = useTopLeagues();

  if (isLoading) {
    return (
      <Flex>
        <Text>로딩 중...</Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex>
        <Text>에러가 발생했습니다.</Text>
      </Flex>
    );
  }

  console.log(leagues);

  return (
    <Grid fillWidth columns="4" mobileColumns="1" gap="12">
      {leagues?.map((league) => (
        <Flex
          key={league.league.id}
          horizontal="center"
          direction="column"
          gap="20"
          background="neutral-weak"
          paddingY="32"
          cursor="pointer"
          radius="xs"
          height={14}
          position="relative"
        >
          <Image
            src={league.league.logo}
            alt={league.league.name}
            width={50}
            height={70}
          />
          <Text>{league.league.name}</Text>
          <Line fillWidth fullWidth background="neutral-strong" />
          <Text variant="body-default-xs" color="neutral-medium">
            {league.country.name} / {league.country.code}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

export { LeagueList };
