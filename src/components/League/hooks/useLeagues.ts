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
