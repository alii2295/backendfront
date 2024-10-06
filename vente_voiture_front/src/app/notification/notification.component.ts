/*import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {
  notificationMessage:string='user connecté';
  private timeoutId: any;
  
  constructor(private notificationservice:NotificationService)
  {

  }
  ngOnInit() {
    
    this.notificationservice.notification$.subscribe(message => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.notificationMessage = message;
      // Afficher la notification pendant quelques secondes puis la vider
      this.timeoutId=setTimeout(() => {
        this.notificationMessage = 'hors sujet';
      }, 5000); // Afficher la notification pendant 5 secondes
    });
  }
  ngOnDestroy() {
    // Cleanup timeout when component is destroyed
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    
    }
  }
  


}*/
/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notificationMessage: string = 'user connecté';
  private timeoutId: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notification$.subscribe(message => {
      // Clear previous timeout if any
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      
      this.notificationMessage = message;

      // Afficher la notification pendant quelques secondes puis la vider
      this.timeoutId = setTimeout(() => {
        this.notificationMessage = 'hors sujet';
      }, 1000); // Afficher la notification pendant 1 seconde
    });
  }

  ngOnDestroy() {
    // Cleanup timeout when component is destroyed
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}*/
/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notificationMessage: string = 'user connecté';
  private timeoutId: any;
  private subscription: Subscription = new Subscription();
  timer: number = 0; // Compteur en secondes
  private intervalId: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.subscription.add(
      this.notificationService.notification$.subscribe(message => {
        this.updateNotification(message);
        // Démarrer le compteur lorsque le composant est initialisé
         this.startTimer();
      })
    );
  }
  

 

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    // Nettoyer l'intervalle lorsque le composant est détruit
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  private startTimer(): void {
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000); // Met à jour le compteur toutes les secondes
  }

  private updateNotification(message: string): void {
    // Clear the previous timeout if any
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // Update the message
    this.notificationMessage = '';

    // Set timeout to clear the message after 1 second
    this.timeoutId = setTimeout(() => {
      this.notificationMessage = '';
    }, 3); // Duration for showing the notification
  }
}*/
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  timer: number = 0; // Compteur en secondes
  private intervalId: any;

  ngOnInit() {
    // Démarrer le compteur lorsque le composant est initialisé
    this.startTimer();
  }

  ngOnDestroy() {
    // Nettoyer l'intervalle lorsque le composant est détruit
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startTimer(): void {
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000); // Met à jour le compteur toutes les secondes
  }
}
