import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vente_voiture_front';
  logged = false;
  username:string |null=null;
  user: User | null = null; // Changement ici pour User au lieu de User[
  
  
  

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService,private userservice:UserService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.logged = isLoggedIn;

      });
    this.username=this.authService.getUserEmail();
    
    const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.userservice.getUser(id).subscribe(data => {
          if (data.length > 0) {
            this.user = data[0]; // Supposons que vous voulez le premier utilisateur
          }
          else {
            console.log('pas de user');
          } 
        });
      }
    
  }
  


  /*this.annonceService.getListeAnnonces().subscribe(data => {
    this.annonces = data;
    this.filteredAnnonces = data;
     });*/

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  

  profil(){
   
    
    this.router.navigate(['/modifieruser',this.authService.getToken().id]);
    
    

  }
}