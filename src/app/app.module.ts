import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardService } from './card.service';
import { HightlightDirective } from './highlight.directive';
import { FilterPipe } from './filter.pipe';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchHeroComponent } from './search-hero/search-hero.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'heroleague', component: HomeComponent },
      { path: 'heroleague/searchhero', component: SearchHeroComponent }
    ]),
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HomeComponent,
    ProductDetailsComponent,
    HightlightDirective,
    FilterPipe,
    SearchHeroComponent
  ],
  bootstrap: [AppComponent],
  providers: [CardService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
