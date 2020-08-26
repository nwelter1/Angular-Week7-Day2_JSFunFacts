import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { AuthorComponent } from './author/author.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MaphlComponent } from './maphl/maphl.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    AuthorComponent,
    CallbacksComponent,
    MaphlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
