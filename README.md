# AtL2MpFootball

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Repo

https://github.com/KealanLooby/at.l2.mp.football

serving at url

## Serve on GitHub Pages

1/ Install github pages deployment tool globablly

      npm install -g angular-cli-ghpages

2/ Build App

      ng build --configuration production --base-href "https://[username].github.io/[repo-name]/"
      
      usage : 

      ng build --configuration production --base-href "https://KealanLooby.github.io/at.l2.mp.football/"

3/ Push (Note : check folder name in dist foler)

      ngh --dir=dist/[project-name]

      usage :
    
      ngh --dir=dist/at-l2-mp-football

4/ Go to Repo in github.com, and settings, and pages, and link 'Your site is live at'

## Check API's out in Postman

Create account to get api key , using Season/year from now

1/ League Ids

      England/Premier League = 39
      Spain/La Liga = 140
      Germany/Bundesliga = 78
      France/Ligue 1 = 61
      Italy/Serie A = 71

2/ League Table

      https://v3.football.api-sports.io/standings?league=39&season=2023
      headers =
        x-rapidapi-host:v3.football.api-sports.io
        x-rapidapi-key: 

3/ Team Fixtures

      https://v3.football.api-sports.io/fixtures?league=39&season=2023&team=42&next=10
      headers =
        x-rapidapi-host:v3.football.api-sports.io
        x-rapidapi-key: 

## Prep

Add Bootstrap

    npm install bootstrap

Add bootstrap styles

    "node_modules/bootstrap/dist/css/bootstrap.min.css",

Add Flexbox Layout

    npm install @angular/flex-layout @angular/cdk

## Progress/Audit

1/ Create directories, components, service

2/ Add models using, postman response and https://app.quicktype.io/

3/ Basic mechanics working, Use the postman responses for the moment
