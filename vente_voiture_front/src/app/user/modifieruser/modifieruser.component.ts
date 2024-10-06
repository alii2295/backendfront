import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.css']
})
export class ModifieruserComponent {
  user:User | undefined;
  users:User[]=[];
  ancienid:string='';
  constructor(private router:Router,private userservice:UserService,
    private authservice: AuthService ,private route:ActivatedRoute){}
 /* usermodifier: User = {
    id: '',
    nom: '',
    prenom: '',
    password: '',
    email: ''
  };*/


  getuser():void
  {
    /*const id = this.route.snapshot.paramMap.get('id');*/
    const idconnected=this.authservice.getToken().id;
    console.log('id connectec = ',idconnected);
    if (idconnected)
    {
      this.ancienid=idconnected;
      this.userservice.getUser(idconnected).subscribe(
        (users: User[])=>{
          if (users.length>0)
          {
            console.log('tableau des users = ' ,users);
            this.user= users[0]
          }
          else
          {
            console.error(`aucun user trouvé pour le id ${idconnected}`);
          }
        },
        error =>{
          console.error('Erreur lors de la récupération du user : ',error);
        }
      );


        
    }

  }
  ngOnInit():void
  {
    this.getuser();

  }
  modifieruser():void
  {
    const userData: User = {
      id: this.user?.id || '',
      nom: this.user?.nom || '',
      prenom: this.user?.prenom || '',
      password: this.user?.password || '',
      email: this.user?.email || '',
      annonces:[],


    };
    console.log(userData);
    console.log(this.users);
    this.userservice.updateUser(userData,this.ancienid).subscribe(()=>{
      this.router.navigate(['/accueil']);
    },error =>{
      console.error('error creating user: ',error);
    }
    
    );
  }

  /*
  const annonceData: Annonce = {
      id: this.annonce?.id || '', // Assurez-vous que `id` est défini correctement
      model: this.annonce?.model || '', // Assurez-vous que `model` est défini
      matricule: this.annonce?.matricule || '', // Assurez-vous que `matricule` est défini
      kilometrage: this.annonce?.kilometrage ?? 0, // Assurez-vous que `kilometrage` est défini
      carburant: this.annonce?.carburant || '', // Assurez-vous que `carburant` est défini
      photo: this.selectedFile ? this.selectedFile.name : this.annonce?.photo || '',
    };
  
    console.log(annonceData);
    console.log(this.annonces);
    

  
    this.annonceService.updateAnnonce(annonceData,this.ancienid).subscribe(() => {
      this.router.navigate(['/accueil']);
    }, error => {
      console.error('Error creating annonce:', error);
    });


  */



}
