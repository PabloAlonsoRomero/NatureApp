import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { PlaceComponent } from "./place.component/place.component";
import { LugaresTablaComponent } from "./lugares-tabla.component/lugares-tabla.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: "admin",
    component: AdminLayout,
    children: [
      { path: "nature", component: PlaceComponent },
      { path: "listaPlaces", component: LugaresTablaComponent },
      { path: "", pathMatch: "full", redirectTo: "nature" }
    ]
  }
]