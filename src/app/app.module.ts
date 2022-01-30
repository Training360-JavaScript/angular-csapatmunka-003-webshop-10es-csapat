import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
<<<<<<< HEAD
import { ProductCardsComponent } from './common/product-cards/product-cards.component';
import { ProductListComponent } from './common/product-list/product-list.component';
=======
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
>>>>>>> 126b76fc8c8ad50dccd9444b9c85c67ec5b6b605

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
<<<<<<< HEAD
    ProductCardsComponent,
    ProductListComponent
=======
    ProductCardComponent,
    FilterPipe
>>>>>>> 126b76fc8c8ad50dccd9444b9c85c67ec5b6b605
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
