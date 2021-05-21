import { Component } from '@angular/core';
import { superhero_Leagues } from './super';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  justice_league = superhero_Leagues[0];
  avenger_league = superhero_Leagues[1];
  LeaguesOfHeros = superhero_Leagues;

  onRequestQuote(quote: string) {
    alert(`${quote}`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
