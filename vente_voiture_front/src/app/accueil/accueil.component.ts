import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../model/annonce';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  annonces: Annonce[] = [];
  searchQuery:string='';
  filteredAnnonces: Annonce[] = [];
  username:String = '';
  password:String ='';
  isAdmin= true;
  useremail:string | null=null;


  constructor(private router: Router, private annonceService: AnnonceService,private authService: AuthService) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.annonceService.getListeAnnonces().subscribe(data => {
    this.annonces = data;
    this.filteredAnnonces = data;
     });
     const token = this.authService.getToken();
     console.log('Token utilisateur:', token);
     this.useremail=this.authService.getUserEmail();
      if (this.useremail === "ali@gmail.com")
      {
        this.isAdmin=true;
      }
      else
      {
        this.isAdmin=false;
      }
      console.log('isadmin = ',this.isAdmin);
      console.log('email connecté = ' , this.useremail);
    
  }

  redirectToDetails(id: string) {
    this.router.navigate(['/detailleannonce', id]);
  }

  supprimer(id: string):void 
  {
    this.annonceService.deleteAnnonce(id).subscribe(()=>[this.annonces=this.annonces.filter(Annonce=>Annonce.id!==id)]);
    this.router.navigate(['/accueil']);
  }
  edit(id:string):void
  {
    this.router.navigate(['/modifierannonce', id]);
  }
  /*onSearch():void{
    if(this.searchQuery.trim())
    {
      this.annonceService.searchAnnonces(this.searchQuery).subscribe(

        (results:Annonce[])=>{
          this.annonces=results;
        },
        error=> {
          console.error('error lors de la recherche :',error);
        }
      )
    }
  }*/
 /*
    getAnnonces(): void {
      this.annonceService.getAnnonce(model).subscribe(
        (annonces: Annonce[]) => {
          this.annonces = annonces;
          this.filteredAnnonces = annonces; // Initialisation avec toutes les annonces
        },
        error => {
          console.error('Erreur lors de la récupération des annonces : ', error);
        }
      );
    }*/

    onSearch(): void {
      if (this.searchQuery) {
        this.filteredAnnonces = this.annonces.filter(annonce =>
          annonce.model.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredAnnonces = this.annonces; // Réinitialiser la liste si la recherche est vide
      }
    }
    onLogin():void{
      

    }
  


  
    
  }
  
  
  

