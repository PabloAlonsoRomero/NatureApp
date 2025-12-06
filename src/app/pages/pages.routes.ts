import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { PlaceComponent } from "./place.component/place.component";
import { LugaresTablaComponent } from "./lugares-tabla.component/lugares-tabla.component";
import { PlaceDetailComponent } from "./place-detail.component/place-detail.component";
import { TrailsListComponent } from "./trails-list.component/trails-list.component";
import { PlaceDetailIa } from "./place-detail-ia/place-detail-ia";

export const ADMIN_ROUTES: Routes = [
  {
    path: "admin",
    component: AdminLayout,
    children: [
      { path: "nature", component: PlaceComponent },
      { path: "listaPlaces", component: LugaresTablaComponent },
      { path: "place/:id", component: PlaceDetailComponent },
      { path: "trails", component: TrailsListComponent },
      { path: "place/:id/resumen", component: PlaceDetailIa },
      { path: "", pathMatch: "full", redirectTo: "nature" }
    ]
  }
]