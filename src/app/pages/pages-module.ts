import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule
  ],
  providers: [

  ],
  exports: [

  ]
})
export class PagesModule {}