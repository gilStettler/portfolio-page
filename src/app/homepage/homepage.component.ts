import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { QuoteService } from '../quote.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    TileComponent,
    CommonModule,
    NavigationBarComponent,
    FooterComponent,
  ],
  template: `
  <div class="container">
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
        <h1>About Me</h1>
        <p>
          My name is <span class="color-transition">Gil Stettler</span>. I am 24 years old (born 23 June 2000). I am
          currently studying <span class="color-transition">business informatics</span> while working part-time as a
          <span class="color-transition">deputy application manager</span> at the Swiss Accreditation Service (SAS).
          <br /><br />
          At the SAS, I am responsible for ensuring that our application
          continues to meet the needs of the users and the conditions. However,
          prior to this job, I was able to gain a wide range of other work
          experience. At the State Secretariat for Migration (SEM) and the Swiss
          Accreditation Service, I was able to gain a lot of experience as an
          administrator. I am able to <span class="color-transition">adapt to different teams</span> and situations
          and always use my skills to add value. My ability to learn quickly and
          my qualitative way of working have always been of great help to me.
          <br /><br />
          I am interested in software projects that support organisations in
          their <span class="color-transition">digital transformation</span>. Software must always enable the user to
          create value and have great usability. I would like to use my skills
          in such projects. Be it as a requirements engineer, project manager,
          UI/UX designer, product owner or scrum master. Want to know more about
          me? Then I invite you to have a look at my portfolio!
        </p>
        <!--<app-tile label="Experience" color="#6dc5d1"></app-tile>
        <app-tile label="Education" color="#fde49E"></app-tile>
        <app-tile label="Skills" color="#DD761C"></app-tile>
        <app-tile label="Hobbies" color="#DD761C"></app-tile>
        <app-tile label="Random" color="#6dc5d1"></app-tile>-->
      </div>
      <!--<p>{{ quote.q }}</p>-->
    </div>
    <app-navigation-bar></app-navigation-bar>
    <app-footer></app-footer>
  </div>
  `,
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  quote: { q: string; a: string; h: string } = { q: '', a: '', h: '' }; // Initialize with an empty quote

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote() {
    this.quoteService.getRandomQuote().subscribe(
      (response: { q: string; a: string; h: string }[]) => {
        this.quote = response[0];
      },
      (error) => {
        console.error('Error fetching quote:', error);
      }
    );
  }
}
