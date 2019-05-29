import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import { StarComponent } from './product/product-list/star/star.component';
import {registerLocaleData} from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';
import { DefaultPipe } from './image.pipes';

registerLocaleData(localeEsCL,'es-CL')

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
