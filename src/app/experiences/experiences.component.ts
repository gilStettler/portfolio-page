import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [FooterComponent, NavigationBarComponent],
  template: `
    <app-navigation-bar></app-navigation-bar>
    <app-footer></app-footer>
  `,
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

}
