export interface SearchResult {
  name: string;
  lat: number;
  lon: number;
  state: string;
  country: string;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: String;
}
