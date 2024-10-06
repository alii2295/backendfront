import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  verif_login() {
    this.authService.login(this.email, this.password).subscribe(user => {
      if (user) {
        
        
        console.log('Connecté avec succès');
        this.router.navigate(['/accueil']);
        
        
        
        
        
      } else {
        this.errorMessage = 'Mot de passe ou email incorrect';
      }
    });
    

}

}