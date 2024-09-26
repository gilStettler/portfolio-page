import { Component } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TileComponent],
  template: `
    <div class="homecontent">
      <div class="leftside">
        <div class="portrait-wrapper">
          <img
            class="portrait"
            src="/foto_gilstettler.jpg"
            alt="Porträt_von_Gil_Stettler"
          />
        </div>
      </div>
      <div class="rightside">
        <app-tile label="Experience" color="#6dc5d1"></app-tile>
        <app-tile label="Education" color="#fde49E"></app-tile>
        <app-tile label="Skills" color="#DD761C"></app-tile>
        <app-tile label="Hobbies" color="#DD761C"></app-tile>
        <app-tile label="Random" color="#6dc5d1"></app-tile>
      </div>
    </div>
  `,
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
