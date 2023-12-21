import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClient } from '@angular/common/http';

//ALL COMPONENTS WILL BE DECLARED HERE IN THE app.module
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
