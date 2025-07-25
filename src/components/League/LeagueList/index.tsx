'use client';

import { useRouter } from 'next/navigation';

import { Flex, Text, Grid, Line, Logo } from '@/components';
import { useTopLeagues } from '../hooks';

import styles from './style.module.scss';

const LeagueList = () => {
  const { data: leagues, isLoading, error } = useTopLeagues();
  const router = useRouter();

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

  return (
    <Grid fillWidth columns="4" mobileColumns="1" gap="12">
      {leagues?.map((league) => (
        <Flex
          className={styles.card}
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
          onClick={() => router.push(`/leagues/${league.league.id}`)}
        >
          <Flex horizontal="center" vertical="center" height={70} fillWidth>
            <Logo
              src={league.league.logo}
              alt={league.league.name}
              width={50}
              height={70}
              objectFit="contain"
            />
          </Flex>
          <Text variant="body-default-m" color="neutral-on-background-strong">
            {league.league.name}
          </Text>

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
