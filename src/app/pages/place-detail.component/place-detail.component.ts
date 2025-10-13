import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { Place } from '../../core/models/place.model';
import { ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-place-detail.component',
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.css',
  standalone: false
})
export class PlaceDetailComponent implements OnInit {

  place : Place | null = null;

  map! : mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";
  markers : mapboxgl.Marker[] = [];
  
  constructor(
    private placeService : PlaceService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeService.getPlaceById(id).subscribe(place => {
      this.place = place;
      setTimeout(() => {
        this.map = new mapboxgl.Map({
          accessToken: environment.MAPBOX_TOKEN,
          style: this.style,
          container: 'mini-map',
          center: [this.place!.longitude, this.place!.latitude],
          zoom: 10
        });
        new mapboxgl.Marker()
          .setLngLat([this.place!.longitude, this.place!.latitude])
          .addTo(this.map);
      }, 0);
    });
  }

}