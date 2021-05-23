import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero, superhero_Leagues } from '../super';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: string = 'Hello There, This is great';
  SuperHeroLeague = superhero_Leagues;
  searchText;
  title:string='Super Hero League'

  onQuote(quote: string) {
    alert(`Famous Quote : ${quote}`);
  }
}
