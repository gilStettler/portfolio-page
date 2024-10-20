import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [FooterComponent, NavigationBarComponent],
  template: `
  <app-navigation-bar></app-navigation-bar>
  <div class="container"></div>
  <app-footer></app-footer>

  `,
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {

}
