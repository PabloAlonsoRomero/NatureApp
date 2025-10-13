import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import { PlaceService } from '../../core/services/place.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrl: './place.component.css',
  standalone: false
})
export class PlaceComponent implements OnInit{

  map! : mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";
  markers : mapboxgl.Marker[] = [];

  constructor(
    private placeService : PlaceService
  ) { }

  ngOnInit(): void {
      
    this.map = new mapboxgl.Map({
      accessToken : environment.MAPBOX_TOKEN,
      style : this.style,
      container : "map",
      center : [-98.657, 19.22],
      zoom : 15
    });

    this.placeService.getAllPlaces().subscribe((placeResponse) => {
      console.log(placeResponse);
      placeResponse.forEach(place => {
        const marker = new mapboxgl.Marker()
          .setLngLat([place.longitude, place.latitude])
          .addTo(this.map);
        this.markers.push(marker);
      })
    })
  }
}
