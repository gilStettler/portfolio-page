import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
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
      <div class="rightside">testext</div>
    </div>
  `,
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
