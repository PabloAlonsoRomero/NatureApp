import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages.routes';
import { PlaceComponent } from './place.component/place.component';
import { PlaceService } from '../core/services/place.service';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { SideBarComponent } from '../shared/components/side-bar.component/side-bar.component';
import { LugaresTablaComponent } from './lugares-tabla.component/lugares-tabla.component';
import { PlaceDetailComponent } from './place-detail.component/place-detail.component';
import { TrailService } from '../core/services/trail.service';
import { TrailsListComponent } from './trails-list.component/trails-list.component';
const icons = Object.values(AllIcons);

@NgModule({
  declarations: [
    PlaceComponent,
    LugaresTablaComponent,
    PlaceDetailComponent,
    TrailsListComponent,
    AdminLayout
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    NzTableModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    NzCardModule,
    NzTagModule
  ],
  providers: [
    PlaceService,
    TrailService
  ],
  exports: [
    PlaceComponent,
    LugaresTablaComponent,
    PlaceDetailComponent,
    TrailsListComponent,
    AdminLayout
  ]
})
export class PagesModule {}