import { Component, OnInit } from '@angular/core';
import { superhero_Leagues } from '../super';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent {
  searchText: string;
  SuperHeroLeague = superhero_Leagues;
}
