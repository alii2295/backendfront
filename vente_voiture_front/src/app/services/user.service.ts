import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl = 'http://localhost:8080/User';


  constructor(private http: HttpClient) { }
  createUser(User:any):Observable<User>{
    return this.http.post<User>(`${this.baseurl}ajouter`,User);
  }
  getListUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseurl);
  }
  getUser(id:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.baseurl}?id=${id}`);
  }
  /*getUser(id:string):Observable<User[]>{
    return this.http.get<User[]>(this.baseurl);
  }*/
  /*getAnnonce(id: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseurl}?id=${id}`);
  }*/
  updateUser(user:User,id:string):Observable<User>{
    return this.http.put<User>(`${this.baseurl}/${id}`,user)

  }

  deleteUser(id:string):Observable<void>{
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }
 
  

}
