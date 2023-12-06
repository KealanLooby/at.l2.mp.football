import {Injectable} from '@angular/core';
import {StandingsResp} from "../models/standings";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FixtureResp} from "../models/fixtures";

@Injectable({
  providedIn: 'root'
})
export class ApiSportsService {

  private API_KEY = 'fdb0c02fb81bc0e42ac84cb43f996b16';
  private BASE_URL = 'https://v3.football.api-sports.io/';
  private STANDINGS = 'standings';
  private FIXTURES = 'fixtures';

  constructor(private http: HttpClient) {
  }

  //https://v3.football.api-sports.io/standings?league=39&season=2023
  public getStandings(league: string, season: string): Observable<StandingsResp> {
    // const url = `${this.BASE_URL}${this.STANDINGS}?league=${league}&season=${season}`;
    //
    // const headers = new HttpHeaders({
    //   'x-rapidapi-host': 'v3.football.api-sports.io',
    //   'x-rapidapi-key': this.API_KEY
    // });
    //
    // return this.http.get<StandingsResp>(url, {headers: headers}).pipe(
    //   map(resp => resp.response[0].league.standings[0])
    // );
    return this.http.get<StandingsResp>('/assets/api.resp.for.dev/standings.json');
  }


  // https://v3.football.api-sports.io/fixtures?league=39&season=2023&team=42&next=10
  public getFixtures(league: string, season: string): Observable<FixtureResp> {
    //const url = `${this.BASE_URL}${this.FIXTURES}?league=${league}&season=${season}`;
    return this.http.get<FixtureResp>('/assets/api.resp.for.dev/fixtures.json');
  }


}
