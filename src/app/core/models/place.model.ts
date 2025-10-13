import { Amenity } from "./amenity.model";
import { Photo } from "./photo.model";
import { Trail } from "./trail.model";

export interface Place {
  Id : number;
  Name : string;
  Description : string;
  Category : string;
  Latitude : number;
  Longitude : number;
  ElevationMeters : number;
  Accesible : boolean;
  EntryFee : number;
  OpeningHours : string;
  Trails : Trail[];
  Photos : Photo[];
  Amenities : Amenity[];
}

// Corresponde al modelo de PlaceDto del backend