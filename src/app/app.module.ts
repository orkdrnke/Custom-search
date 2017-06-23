import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchParams } from './search-params/searchParams';
import { ImageSearchService } from './search-params/imageSearch.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchParams
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ImageSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
