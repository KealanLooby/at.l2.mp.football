import {Injectable} from '@angular/core';
import {StandingsResp} from "../models/standings";
import {Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FixtureResp} from "../models/fixtures";

@Injectable({
  providedIn: 'root'
})
export class ApiSportsService {

  private readonly CACHE_TIMEOUT = 1800000;
  private API_KEY = 'fdb0c02fb81bc0e42ac84cb43f996b16';
  headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': this.API_KEY
  });
  private BASE_URL = 'https://v3.football.api-sports.io/';
  private STANDINGS = 'standings';
  private FIXTURES = 'fixtures';
  private SEASON = 'fixtures';
  private cacheStandings = new Map<string, StandingsResp>();
  private cacheFixtures = new Map<string, FixtureResp>();

  constructor(private http: HttpClient) {
  }

  public getStandings(league: string, season: string): Observable<StandingsResp> {
    const url = `${this.BASE_URL}${this.STANDINGS}?league=${league}&season=${season}`;
    const cachedData = this.cacheStandings.get(url);
    if (cachedData) {
      return of(cachedData);
    }
    return this.http.get<StandingsResp>(url, {headers: this.headers}).pipe(
      tap(data => {
        this.cacheStandings.set(url, data);
        setTimeout(() => this.cacheStandings.delete(url), this.CACHE_TIMEOUT);
      })
    );
  }

  public getFixtures(league: string, teamId: string, season: string): Observable<FixtureResp> {
    const url = `${this.BASE_URL}${this.FIXTURES}?league=${league}&season=${season}&team=${teamId}&last=10`;
    const cachedData = this.cacheFixtures.get(url);
    if (cachedData) {
      return of(cachedData);
    }
    return this.http.get<FixtureResp>(url, {headers: this.headers}).pipe(
      tap(data => {
        this.cacheFixtures.set(url, data);
        setTimeout(() => this.cacheFixtures.delete(url), this.CACHE_TIMEOUT);
      })
    );
  }


}
