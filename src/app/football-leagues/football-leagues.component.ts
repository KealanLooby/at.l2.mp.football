import {Component, OnInit} from '@angular/core';
import {Standing} from "../models/standings";
import {map, Observable} from "rxjs";
import {ApiSportsService} from "../services/api-sports.service";
import {Router} from "@angular/router";
import {SeasonService} from "../services/season.service";


@Component({
  selector: 'app-football-leagues',
  templateUrl: './football-leagues.component.html',
  styleUrls: ['./football-leagues.component.css']
})
export class FootballLeaguesComponent implements OnInit {

  standings$!: Observable<Standing[]>;
  leagueId!: number;
  season!: string;

  constructor(private router: Router,
              private apiSportsService: ApiSportsService,
              private seasonService: SeasonService) {
  }

  ngOnInit(): void {
    this.season = this.seasonService.getCurrentSeason();
    this.standings$ = this.getStandings('39', this.season);
  }

  onCountryClick(leagueId: string) {
    this.standings$ = this.getStandings(leagueId, this.season)
  }

  goToTeamFixtures(id: number) {
    this.router.navigate(['/fixtures', this.leagueId, id, this.season]);
  }

  private getStandings(leagueId: string, season: string) {
    return this.apiSportsService.getStandings(leagueId, season)
      .pipe(
        map(resp => {
          this.leagueId = resp.response[0].league.id;
          return resp.response[0].league.standings[0]
        })
      );
  }
}
