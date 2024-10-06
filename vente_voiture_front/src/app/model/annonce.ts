import { User } from "./user";

export interface Annonce {
    id: string,
    model: string,
    matricule: string,
    kilometrage: number,
    carburant: string,
    photo: string,
    userId: string, 
}
