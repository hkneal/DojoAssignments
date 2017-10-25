import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarcodeComponentComponent } from './barcode-component/barcode-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
