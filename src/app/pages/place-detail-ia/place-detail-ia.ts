import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl'
import { Place } from '../../core/models/place.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-place-detail-ia',
  templateUrl: './place-detail-ia.html',
  styleUrl: './place-detail-ia.css',
  standalone: false
})
export class PlaceDetailIa implements OnInit, AfterViewChecked {
  @ViewChild('miniMap', { static: false}) miniMapRef! : ElementRef;
  place : Place | null = null;
  resume : string = '';
  map! : mapboxgl.Map;
  isLoading = true;
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
      this.placeService.resumePlace(place.name).subscribe({
        next: (res) => {
          this.resume = Array.isArray(res.resume) ? res.resume[0] : '';
          console.log("Place summary:", this.resume);
          this.isLoading = false;
          setTimeout(() => this.initMap(), 0);
        },
        error: (err) => {
          console.error("Error fetching place summary:", err);
        }
      })
    });
    
  }

  initMap() {
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
