import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./shared/components/side-bar.component/side-bar.component";
import { PagesModule } from './pages/pages-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PagesModule, SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nature-app');
}
