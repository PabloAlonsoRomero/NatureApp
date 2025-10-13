import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { Place } from '../../core/models/place.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail.component',
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.css',
  standalone: false
})
export class PlaceDetailComponent implements OnInit {

  place : Place | null = null;
  
  constructor(
    private placeService : PlaceService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.placeService.getPlaceById(id).subscribe(place => {
        this.place = place;
        console.log(place)
      })
  }

}
