import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { PlaceComponent } from "./place.component/place.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: "admin",
    component: AdminLayout,
    children: [
      { path: "nature", component: PlaceComponent },
      { path: "", pathMatch: "full", redirectTo: "nature" }
    ]
  }
]