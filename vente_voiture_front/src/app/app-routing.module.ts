import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterannonceComponent } from './annonce/ajouterannonce/ajouterannonce.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailleannonceComponent } from './annonce/detailleannonce/detailleannonce.component';
import { ModifierannonceComponent } from './annonce/modifierannonce/modifierannonce.component';
import { SupprimerannonceComponent } from './annonce/supprimerannonce/supprimerannonce.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { AuthGuard } from './services/AuthGuard';
import { ModifieruserComponent } from './user/modifieruser/modifieruser.component';

const routes: Routes = [
  /*{path: 'ajouterannonce',component: AjouterannonceComponent, canActivate: [AuthGuard]},*/
  {path: 'inscription',component: InscriptionComponent},
  {path: 'ajouterannonce',component: AjouterannonceComponent},

 
  {path: 'detailleannonce/:id',component:DetailleannonceComponent},
  {path: 'modifierannonce/:id',component:ModifierannonceComponent},
  {path: 'supprimerannonce',component:SupprimerannonceComponent},
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'notification',component:NotificationComponent},
  { path: 'login', component: LoginComponent },
  {path: 'modifieruser/:id',component:ModifieruserComponent},
  
];
//{path: '/rihab',component: AjouterannonceComponent,pathMatch: 'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
