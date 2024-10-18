import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { QuoteService } from '../quote.service';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    TileComponent,
    CommonModule,
    NavigationBarComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="homecontainer">
      <div class="left-side">
        <div class="card">
          <div class="card-picture">
            <img src="foto_gilstettler.jpg" alt="Porträt von Gil Stettler" />
          </div>
          <h2>Gil Stettler</h2>
          <h3>Business IT Student & Application Manager</h3>
        </div>
      </div>
      <div class="right-side">
        <h1><span>HELLO</span> there!</h1>
        <div class="about-paragraph">
          <p>
            I, Gil Stettler, was born on 23 June 2000. The digital
            transformation offers us countless opportunities to better connect
            the world and create an inclusive, modern and sustainable tomorrow.
            I want to use my skills to support this change in a qualitative way.
            That's why I'm studying business informatics alongside my job as
            deputy application manager. I hope to use my skills to drive forward
            exciting and innovative projects.
          </p>
        </div>
      </div>
    </div>

    <app-navigation-bar></app-navigation-bar>
    <app-footer></app-footer>
  `,
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  quote: { q: string; a: string } = { q: '', a: '' }; 

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote() {
    this.quoteService.getRandomQuote().subscribe(
      (response: { q: string; a: string }[]) => {
        this.quote = response[0];
        console.log('Fetched quote:', response);
      },
      (error) => {
        console.error('Error fetching quote:', error);
      }
    );
  }
}
