export interface Trail {
  Id : number;
  PlaceId : number;
  Name : string;
  DistanceKm : number;
  EstimatedTimeMinutes : number;
  Difficulty : string;
  Path : string;
  IsLoop : boolean;
}

// Corresponde al modelo de TrailDto del backend