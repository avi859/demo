import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UxPipe } from '../appPipes/ux.pipe';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule , RouterLink , RouterOutlet],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(){

  }
  value:string='This is the custom pipe';
  // nameArr=[
  //   'Alecia',
  //   'Doarthy',
  //   'Hanata',
  //   'Naruto',
  //   'One-piece',
  //   'Uchiha'
  // ]

}
