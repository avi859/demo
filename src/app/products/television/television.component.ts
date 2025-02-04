import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-television',
  imports: [RouterLink],
  templateUrl: './television.component.html',
  styleUrl: './television.component.css'
})
export class TelevisionComponent {
  onClick() {
    alert('No Information found, Go Back');
  }
}
