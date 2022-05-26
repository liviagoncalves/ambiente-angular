import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MarcaTextoDirective } from './directives/marca-texto.directive';
import {PeopleService} from "./shared/services/people.service";
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListPeopleComponent,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
