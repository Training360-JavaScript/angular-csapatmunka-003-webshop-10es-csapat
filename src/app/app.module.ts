import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { CategoryComponent } from './page/category/category.component';
import { ProductCardsComponent } from './common/product-cards/product-cards.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { SorterPipe } from './pipe/sorter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    CategoryComponent,
    ProductCardsComponent,
    ProductListComponent,
    ProductCardComponent,
    FilterPipe,
    DataEditorComponent,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
