import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navwrapper">
      <div class="navtext">
        <ul>
          <li data-tooltip="Home" routerLink="/homepage"><img src="home.svg" alt="home"></li>
          <li data-tooltip="Experiences" routerLink="/experiences"><img src="experience.svg" alt="experiences"></li>
          <li data-tooltip="Education"><img src="education.svg" alt="education"></li>
          <li data-tooltip="Skills"><img src="skills.svg" alt="skills"></li>
          <li data-tooltip="Hobbies"><img src="hobby.svg" alt="hobbies"></li>
          <li data-tooltip="Who Knows?"><img src="random.svg" alt="random"></li>
        </ul>
      </div>
    <nav>
  `,
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

}
