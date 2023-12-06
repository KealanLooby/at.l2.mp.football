import {Component, OnInit} from '@angular/core';
import {Standing} from "../models/standings";
import {map, Observable} from "rxjs";
import {ApiSportsService} from "../services/api-sports.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-football-leagues',
  templateUrl: './football-leagues.component.html',
  styleUrls: ['./football-leagues.component.css']
})
export class FootballLeaguesComponent implements OnInit {

  standings$!: Observable<Standing[]>;
  leagueId!: number;

  constructor(private router: Router, private apiSportsService: ApiSportsService) {
  }


  ngOnInit(): void {

    // this.standings$ = this.apiSportsService.getStandings('39', '2023')
    //   .pipe(
    //     map(resp => resp.response[0].league.standings[0])
    //   );
    this.standings$ = this.apiSportsService.getStandings('39', '2023')
      .pipe(
        map(resp => {
          this.leagueId = resp.response[0].league.id;
          return resp.response[0].league.standings[0]
        })
      );

  }

  goToTeamFixtures(id: number) {
    console.log('to to fixtures');
    this.router.navigate(['/fixtures', this.leagueId, id]);
  }
}
