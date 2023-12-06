import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLeaguesComponent } from './football-leagues.component';

describe('FootballLeaguesComponent', () => {
  let component: FootballLeaguesComponent;
  let fixture: ComponentFixture<FootballLeaguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballLeaguesComponent]
    });
    fixture = TestBed.createComponent(FootballLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
