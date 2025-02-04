import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-washing-machine',
  imports: [RouterLink],
  templateUrl: './washing-machine.component.html',
  styleUrl: './washing-machine.component.css'
})
export class WashingMachineComponent {
  onClick() {
    alert('No Information found, Go Back');
  }
}
