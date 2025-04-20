export interface HitsCounterResponse {
  count: number;
  lastUpdated: string;
}

export const mockHitsCounterResponse: HitsCounterResponse = {
  count: 42,
  lastUpdated: '2024-01-01T12:00:00Z'
}; 