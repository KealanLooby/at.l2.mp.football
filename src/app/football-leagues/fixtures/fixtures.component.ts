import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {ApiSportsService} from "../../services/api-sports.service";
import {Response} from "../../models/fixtures";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  teamId!: string;
  leagueId!: string;
  fixtures$!: Observable<Response[]>;

  constructor(private apiSportsService: ApiSportsService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.leagueId = this.route.snapshot.paramMap.get('leagueId') || '';
    this.teamId = this.route.snapshot.paramMap.get('teamId') || '';

    // call service , to get fixtures with id, back into obs , and show in table , add back button
    this.fixtures$ = this.apiSportsService.getFixtures(this.leagueId, this.teamId)
      .pipe(
        map(resp => resp.response)
      );
  }

  goBack() {
    this.location.back();
  }

}
