import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { ActivatedRoute } from '@angular/router';
//import { Router } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detailleannonce',
  templateUrl: './detailleannonce.component.html',
  styleUrls: ['./detailleannonce.component.css']
})
/*export class DetailleannonceComponent implements OnInit {

  annonce : Annonce|undefined//initialisation ; // Assurez-vous que le type correspond à votre modèle d'annonce

  constructor(
    private route: ActivatedRoute,
    private annoncesService: AnnonceService
  ) { }
//ngoninit : import les données en ouvrant la page, en le mettant , il importe qu'avec un bouton ...
  ngOnInit(): void {
    this.getannonce();
  }
  getannonce():void
   {const id=Number(this.route.snapshot.paramMap.get('id'));
    this.annoncesService.getAnnonce(id).subscribe(annonce=>this.annonce=annonce)

   }
}*/
export class DetailleannonceComponent implements OnInit {

  annonce: Annonce | undefined; // Assurez-vous que le type correspond à votre modèle d'annonce
  annonces:Annonce[]=[];
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private annoncesService: AnnonceService
  ) { }

  ngOnInit(): void {
    this.getAnnonce();
  }

  /*getAnnonce(): void {
    const matricule = (this.route.snapshot.paramMap.get('matricule')!);
    this.annoncesService.getAnnonceByMatricule(matricule).subscribe(
      (annonce: Annonce[]) => {
        this.annonce = annonce[];
      },
      error => {
        console.error('Erreur lors de la récupération de l\'annonce : ', error);
        // Gérer l'erreur (affichage d'un message d'erreur, etc.)
      }
    );
  }*/
    getAnnonce(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.annoncesService.getAnnonce(id).subscribe(
          (annonces: Annonce[]) => {
            if (annonces.length > 0) {
              this.annonce = annonces[0]; // Supposons que vous récupérez un seul élément par matricule
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
    supprimer(id: string):void 
      {
        this.annoncesService.deleteAnnonce(id).subscribe(()=>[this.annonces=this.annonces.filter(Annonce=>Annonce.id!==id)]);
        this.router.navigate(['/accueil']);
      }
   
    }



