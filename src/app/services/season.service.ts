import {Injectable} from '@angular/core';

/**
 *       All seasons are only 4-digit keys, so for a league whose season
 *       is 2018-2019 like the English Premier League (EPL),
 *       the 2018-2019 season in the API will be 2018.
 *
 *       Was going to use the api, and take last, but had to use date in the end.
 */
@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor() {
  }

  getCurrentSeason(): string {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    let season = currentYear;
    if (currentMonth >= 0 && currentMonth <= 6) {
      season = currentYear - 1;
    }
    return "" + season;
  }
}
