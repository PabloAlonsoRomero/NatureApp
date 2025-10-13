import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";

export const ADMIN_ROUTES: Routes = [
  {
    path: "admin",
    component: AdminLayout,
    children: [
      { path: "", pathMatch: "full", redirectTo: "nature" }
    ]
  }
]