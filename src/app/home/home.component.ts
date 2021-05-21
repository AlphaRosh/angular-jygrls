import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: string = 'Hello There, This is great';
  @Input() LeaguesOfHeroes;
  @Output() quote = new EventEmitter<string>();

  onQuote(quote: string){
    this.quote.emit(quote)
  }
}
