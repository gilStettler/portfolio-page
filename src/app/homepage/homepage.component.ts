import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { QuoteService } from '../quote.service';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    NavigationBarComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="homecontainer">
      <div class="left-side">
        <div class="card" (click)="toggleCard()">
          <div class="card-inner" [class.flipped]="flipped">
            <div class="card-front">
              <div class="card-picture">
                <img
                  src="foto_gilstettler.jpg"
                  alt="Porträt von Gil Stettler"
                />
              </div>
              <h2>Gil Stettler</h2>
              <h3>Business IT Student & Application Manager</h3>
              <p>Click for more infos</p>
            </div>
            <div class="card-back">
              <ul>
                <li>
                  <span class="bold">Mail:</span>
                  gil.stettler&#64;students.bfh.ch
                </li>
                <li><span class="bold">Date of Birth:</span> 23.06.2000</li>
                <li><span class="bold">Location:</span> Switzerland</li>
                <li><span class="bold">Nationality:</span> Swiss</li>
                <li><span class="bold">Gender:</span> Male</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <h2>
          I'm <span class="animated-text">G</span>il
          <span class="animated-text">S</span>tettler
        </h2>
        <h1>HELLO there!</h1>
        <div class="about-paragraph">
          <p>
            The digital transformation offers us countless opportunities to
            better connect the world and create an inclusive, modern and
            sustainable tomorrow. I want to use my skills to support this change
            in a qualitative way. That's why I'm studying business informatics
            alongside my job as deputy application manager. I hope to use my
            skills to drive forward exciting and innovative projects.
          </p>
        </div>
      </div>
    </div>

    <app-navigation-bar></app-navigation-bar>
    <app-footer></app-footer>
  `,
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  quote: { q: string; a: string } = { q: '', a: '' };

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.fetchQuote();
  }

  flipped = false;

  toggleCard() {
    this.flipped = !this.flipped;
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
