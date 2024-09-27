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
          <li><img src="home.svg" alt="home"></li>
          <li><img src="experience.svg" alt="experiences"></li>
          <li><img src="education.svg" alt="education"></li>
          <li><img src="skills.svg" alt="skills"></li>
          <li><img src="hobby.svg" alt="hobbies"></li>
          <li><img src="random.svg" alt="random"></li>
        </ul>
      </div>
    <nav>
  `,
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

}
