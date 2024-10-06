import { Annonce } from "./annonce";


export interface User {
    id:string,
    nom:string,
    prenom:string,
    password:string,
    email:string,
    annonces:Annonce[];

}