import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Descripción del proyecto 7'; /* Cambie el texto con la descripción de su proyecto */
}
