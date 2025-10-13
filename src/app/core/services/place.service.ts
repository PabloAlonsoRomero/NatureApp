import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  
  constructor(
    private httpClient: HttpClient
  ) {}

  // RXJS
  getAllPlaces() : Observable<Place[]> {
    console.log("Trayendome los lugares")
    const result = this.httpClient.get<Place[]>(`${environment.API_URL}/Places`)
    console.log(result)
    return result;
  }
}
