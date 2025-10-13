import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PagesModule } from '../../../pages/pages-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [NzMenuModule, NzIconModule, PagesModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
