import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./housing-location.component.html`,
  styleUrls: ['./housing-location.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
