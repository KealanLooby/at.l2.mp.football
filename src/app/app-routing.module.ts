import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FootballLeaguesComponent} from "./football-leagues/football-leagues.component";
import {FixturesComponent} from "./football-leagues/fixtures/fixtures.component";

const routes: Routes = [
  {
    path: '',
    component: FootballLeaguesComponent
  },
  {
    path: 'fixtures/:leagueId/:teamId/:season',
    component: FixturesComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
