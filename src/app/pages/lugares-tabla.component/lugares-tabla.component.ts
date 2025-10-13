import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { Place } from '../../core/models/place.model';

@Component({
  selector: 'app-lugares-tabla',
  templateUrl: './lugares-tabla.component.html',
  styleUrl: './lugares-tabla.component.css',
  standalone: false
})
export class LugaresTablaComponent implements OnInit {

  constructor(
    private placeService : PlaceService
  ) {}

  places : Place[] = [];

  ngOnInit(): void {
    this.placeService.getAllPlaces().subscribe(places => {
      console.log(places);
      this.places = places;
    })
  }

  showModal(place : Place) {
    console.log(place);
  }
}
