import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoutesModule } from './routes-module/routes-module';
import { MainSectionComponent } from './layout/main-section/main-section.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RoutesModule,
    HeaderComponent,
    FooterComponent,
    MainSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-sample';
}
