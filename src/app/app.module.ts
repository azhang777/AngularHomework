import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

//ALL COMPONENTS WILL BE DECLARED HERE IN THE app.module
@NgModule({ 
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
