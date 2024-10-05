import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navwrapper">
      <button class="hamburger" (click)="toggleMenu()">&#9776;</button>
      <div class="navtext" [ngClass]="{ open: menuOpen }">
        <ul>
          <li routerLink="/homepage">Home</li>
          <li routerLink="/experiences">Experiences</li>
          <li routerLink="/education">Education</li>
          <li routerLink="/skills">Skills</li>
          <li>Hobbies</li>
          <li>Random</li>
        </ul>
      </div>
    </nav>
  `,
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
