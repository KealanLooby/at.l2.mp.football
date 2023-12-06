export interface FixtureResp {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
  team: string;
  next: string;
}

export interface Response {
  fixture: Fixture;
  league: League;
  teams: Goals;
  goals: Goals;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: null | string;
  timezone: Timezone;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: null;
  second: null;
}

export interface Status {
  long: Long;
  short: Short;
  elapsed: null;
}

export type Long = "Not Started";

export type Short = "NS";

export type Timezone = "UTC";

export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface Goals {
  home: Away | null;
  away: Away | null;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
  winner: null;
}

export interface League {
  id: number;
  name: Name;
  country: Country;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export type Country = "England";

export type Name = "Premier League";

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}
