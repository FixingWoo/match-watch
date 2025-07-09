import axios from 'axios';
import { TOP_LEAGUE_IDS } from '@/constants';

const API_BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
  },
});

apiClient.interceptors.request.use((config) => {
  if (!API_KEY) {
    console.warn('API-Football 키가 설정되지 않았습니다.');
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      console.error('API 요청 한도를 초과했습니다. ');
    }
    return Promise.reject(error);
  }
);

export const footballApi = {
  // 리그 목록 조회
  async getLeagues(country?: string): Promise<League[]> {
    const params: Record<string, string> = {};
    if (country) params.country = country;

    const response = await apiClient.get<ApiResponse<League>>('/leagues', {
      params,
    });

    const leagues = response.data.response;
    return leagues;
  },

  // TOP 리그 조회
  async getTopLeagues(): Promise<League[]> {
    const allLeagues = await this.getLeagues();

    const filteredLeagues = allLeagues.filter((league) =>
      TOP_LEAGUE_IDS.includes(league.league.id)
    );

    return filteredLeagues;
  },
};

export default footballApi;
