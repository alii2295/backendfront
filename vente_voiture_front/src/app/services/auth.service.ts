import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/user';
  private loggedInUser: User | null = null;
  
  // Utilisation d'un BehaviorSubject pour gérer l'état de connexion
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());



  constructor(private http: HttpClient) {}

  signup(user: User): Observable<User> {
    
      
    
    return this.http.post<User>(`${this.apiUrl}/ajouter`, user);
  }

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => users.length > 0 ? users[0] : null),
      tap(user => {
        if (user) {
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
          this.loggedIn.next(true);  // Met à jour l'état de connexion à 'true'
        } else {
          this.loggedInUser = null;
          this.loggedIn.next(false); // Met à jour l'état de connexion à 'false'
        }
      })
    );
  }

  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user');
    this.loggedIn.next(false);  
  }

  
  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }



  private isLoggedIn(): boolean {
    return this.loggedInUser !== null || !!localStorage.getItem('user');
  }
  getToken():any {
    const token = localStorage.getItem('user');
    if(token) {
      return JSON.parse(token);
    }
    return null;
  
  }
    /*getToken(): any {
      const tokenString = localStorage.getItem('userToken');
      if (tokenString) {
        try {
          // Essaie de parser le token en JSON
          return JSON.parse(tokenString);
        } catch (error) {
          // Gestion des erreurs lors du parsing
          console.error('Erreur lors du parsing du token depuis localStorage:', error);
          return null;
        }
      }
      return null;
    }*/
  getUserEmail(): string | null {
    const token =this.getToken();
    return token? token.email : null;
    /*const token = this.getToken();
    return token && token.email ? token.email : null;*/
  }
  getUserid():string | null {
    const token=this.getToken();
    return token? token.id : null;
  }
}
