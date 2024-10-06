import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajouterannonce',
  templateUrl: './ajouterannonce.component.html',
  styleUrls: ['./ajouterannonce.component.css']
})
export class AjouterannonceComponent {
  nouvelleAnnonce = {
    id: 0,
    model: '',
    matricule: '',
    kilometrage: 0,
    carburant: '',
    photo: '',
    userid: '',
  };

  selectedFile: File | null = null;

  constructor(private router: Router, private annonceService: AnnonceService, private authservice: AuthService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ajouterAnnonce(): void {
    const annonceData = {
      model: this.nouvelleAnnonce.model,
      matricule: this.nouvelleAnnonce.matricule,
      kilometrage: this.nouvelleAnnonce.kilometrage,
      carburant: this.nouvelleAnnonce.carburant,
      photo: this.selectedFile ? this.selectedFile.name : '',
      userid: this.authservice.getUserid(),
    };

    console.log(annonceData);

    // Check if selectedFile is not null before making the request
    if (this.selectedFile) {
      this.annonceService.createAnnonce(annonceData, this.selectedFile).subscribe(() => {
        this.router.navigate(['/accueil']);
      }, error => {
        console.error('Error creating annonce:', error);
      });
    } else {
      console.error('No file selected.');
      // Optionally show an alert or message to the user indicating that a file is required
    }
  }
}
