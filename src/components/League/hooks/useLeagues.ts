import { useQuery } from '@tanstack/react-query';
import { footballApi } from '@/services/api';

// TOP 리그 목록 조회 훅
export const useTopLeagues = () => {
  return useQuery({
    queryKey: ['topLeagues'],
    queryFn: () => footballApi.getTopLeagues(),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
  });
};

export const useLeague = (leagueId: number) => {
  return useQuery({
    queryKey: ['league', leagueId],
    queryFn: () => footballApi.getLeague(leagueId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
  });
};

// 시즌별 리그 데이터 조회 훅
export const useLeagueBySeason = (leagueId: number, season: number) => {
  return useQuery({
    queryKey: ['league', leagueId, season],
    queryFn: () => footballApi.getLeagueBySeason(leagueId, season),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
    enabled: !!leagueId && !!season, // leagueId와 season이 있을 때만 실행
  });
};
