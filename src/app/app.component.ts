import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAMdXHzB1Azkgg4jgMl2dSLR57Jace4ViY",
      authDomain: "playerfinder-5c924.firebaseapp.com",
    });
  }

}
