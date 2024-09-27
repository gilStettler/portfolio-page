import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TileComponent, CommonModule],
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
      <p>{{ quote.q }}</p>
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
