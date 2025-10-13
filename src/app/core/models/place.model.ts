import { Amenity } from "./amenity.model";
import { Photo } from "./photo.model";
import { Trail } from "./trail.model";

export interface Place {
  id : number;
  name : string;
  description : string;
  category : string;
  latitude : number;
  longitude : number;
  elevationMeters : number;
  accessible : boolean;
  entryFee : number;
  openingHours : string;
  trails : Trail[];
  photos : Photo[];
  amenities : Amenity[];
}

// Corresponde al modelo de PlaceDto del backend