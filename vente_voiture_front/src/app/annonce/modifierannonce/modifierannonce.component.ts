import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { HttpErrorResponse } from '@angular/common/http';
import { AnnonceService } from 'src/app/services/annonce.service';
import { generate } from 'rxjs';




@Component({
  selector: 'app-modifierannonce',
  templateUrl: './modifierannonce.component.html',
  styleUrls: ['./modifierannonce.component.css']
})
export class ModifierannonceComponent {


  annonce: Annonce | undefined;
  annonces:Annonce[]=[];
  ancienid:string='';
/*
  nouvelleAnnonce = {
    id: 0,
    model: '',
    matricule: '',
    kilometrage: 0,
    carburant: '',
    photo: ''
  };*///instance de la base de données , initialisation de table ,obligatoire avant d'accèder au table de base de données
  selectedFile: File | null = null;

  constructor(private router: Router, private annonceService: AnnonceService,private route: ActivatedRoute,) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.getAnnonce();
  }
  getAnnonce(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ancienid=id;
      this.annonceService.getAnnonce(id).subscribe(
        (annonces: Annonce[]) => {
          if (annonces.length > 0) {
            this.annonce = annonces[0];
           // Supposons que vous récupérez un seul élément par matricule
          } else {
            console.error(`Aucune annonce trouvée pour le matricule ${id}`);
          }
        },
        error => {
          console.error('Erreur lors de la récupération de l\'annonce : ', error);
          // Gérer l'erreur (affichage d'un message d'erreur, etc.)
        }
      );
    }
  }

 /* modifierAnnonce():void
  {
  if (this.nouvelleAnnonce.matricule)
  {
    this.annonceService.updateAnnonce(this.nouvelleAnnonce).subscribe(() => {
    this.router.navigate(['/accueil']);
    }, error => {
      console.error('Error creating annonce:', error);
    });
  }


  }*/
  modifierAnnonce(): void {
    /*const annonceData = {
      id:0,
      model: this.annonce?.model,
      matricule: this.annonce?.matricule,
      kilometrage: this.annonce?.kilometrage,
      carburant: this.annonce?.carburant,
      photo: this.selectedFile ? this.selectedFile.name : ''
    };*/
    const annonceData: Annonce = {
      id: this.annonce?.id || '', // Assurez-vous que `id` est défini correctement
      model: this.annonce?.model || '', // Assurez-vous que `model` est défini
      matricule: this.annonce?.matricule || '', // Assurez-vous que `matricule` est défini
      kilometrage: this.annonce?.kilometrage ?? 0, // Assurez-vous que `kilometrage` est défini
      carburant: this.annonce?.carburant || '', // Assurez-vous que `carburant` est défini
      photo: this.selectedFile ? this.selectedFile.name : this.annonce?.photo || '',
      userId:this.annonce?.id || '',
    };
  
    console.log(annonceData);
    console.log(this.annonces);
    

  
    this.annonceService.updateAnnonce(annonceData,this.ancienid).subscribe(() => {
      this.router.navigate(['/accueil']);
    }, error => {
      console.error('Error creating annonce:', error);
    });

  

    /*
    

  modifierAnnonce(): void {
    this.annonceService.updateAnnonce(this.nouvelleAnnonce,this.nouvelleAnnonce.matricule).subscribe({
      next: () => {
        this.router.navigate(['/accueil']);
      },
      error: (err) => {
        console.error('Error updating annonce:', err);
        // Vous pouvez aussi ajouter un message d'erreur pour l'utilisateur ici
      }
    });
  }*/
}




  
  }
  

  


