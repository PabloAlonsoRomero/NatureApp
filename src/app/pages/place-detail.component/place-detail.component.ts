import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class PlaceDetailComponent implements OnInit, AfterViewChecked {
  @ViewChild('miniMap', { static: false}) miniMapRef! : ElementRef;
  place : Place | null = null;
  map! : mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";
  markers : mapboxgl.Marker[] = [];
  mapInitialized = false;
  
  constructor(
    private placeService : PlaceService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeService.getPlaceById(id).subscribe(place => {
      this.place = place;
    });
  }

  ngAfterViewChecked(): void {
    if (this.place && this.miniMapRef && !this.mapInitialized) {
      this.mapInitialized = true;
      this.map = new mapboxgl.Map({
        accessToken: environment.MAPBOX_TOKEN,
        style: this.style,
        container: this.miniMapRef.nativeElement,
        center: [this.place.longitude, this.place.latitude],
        zoom: 13
      });
      new mapboxgl.Marker()
        .setLngLat([this.place.longitude, this.place.latitude])
        .addTo(this.map);
    }
  }
}