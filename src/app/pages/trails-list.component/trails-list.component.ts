import { Component, OnInit } from '@angular/core';
import { Trail } from '../../core/models/trail.model';
import { TrailService } from '../../core/services/trail.service';

@Component({
  selector: 'app-trails-list',
  templateUrl: './trails-list.component.html',
  styleUrl: './trails-list.component.css',
  standalone: false
})
export class TrailsListComponent implements OnInit {
  constructor(
    private trailService : TrailService
  ) {}

  trails : Trail[] = [];

  ngOnInit(): void {
    this.trailService.getAllTrails().subscribe(trails => {
      console.log(trails);
      this.trails = trails;
    })
  }
}
