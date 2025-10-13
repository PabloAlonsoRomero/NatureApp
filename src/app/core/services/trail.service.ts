import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trail } from '../models/trail.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  
  constructor(
    private httpClient: HttpClient
  ) {}

  getAllTrails() : Observable<Trail[]> {
    console.log("Trayendome los senderos")
    return this.httpClient.get<Trail[]>(`${environment.API_URL}/Trails`)
  }
}
