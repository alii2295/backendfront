import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { DetailleannonceComponent } from './annonce/detailleannonce/detailleannonce.component';
import { AjouterannonceComponent } from './annonce/ajouterannonce/ajouterannonce.component';
import { SupprimerannonceComponent } from './annonce/supprimerannonce/supprimerannonce.component';
import { ModifierannonceComponent } from './annonce/modifierannonce/modifierannonce.component';
import {HttpClientModule} from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { ModifieruserComponent } from './user/modifieruser/modifieruser.component';

//decorateur (annotation en spring boot)
@NgModule({
  // commpont declaration
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    DetailleannonceComponent,
    AjouterannonceComponent,
    SupprimerannonceComponent,
    ModifierannonceComponent,
    LoginComponent,
    NotificationComponent,
    ModifieruserComponent
  ],
  //model(bibliotheque)
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  //declartion des service
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
