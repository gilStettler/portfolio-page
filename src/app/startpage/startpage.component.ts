import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuoteService } from '../quote.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <body>
      <section>
        <div class="introduction">
          <div class="myName">Hello, my name is Gil Stettler</div>
          <div class="iAm">
            I am
            <span class="rotatingText" [class.fade]="isFading">{{
              currentWord
            }}</span>
          </div>
          <button class="buttonLearnMore" routerLink="/homepage">
            Learn More!
          </button>
          <div *ngIf="quote && quote.quote" class="quote-section">
            <p class="quote-text">"{{ quote.quote }}"</p>
            <p class="quote-author">- {{ quote.author }}</p>
          </div>
        </div>
      </section>
    </body>
  `,
  styleUrl: './startpage.component.scss',
})
export class StartpageComponent implements OnInit {
  title = 'start';

  // Array für "Current Word"
  words: string[] = [
    'a Business IT Student',
    'a Gamer',
    'an Application Manager',
    'a Musician',
  ];
  // Initiales Wort
  currentWord: string = this.words[0];
  // Wort Index
  wordIndex: number = 0;
  // Kontrolle von Fading
  isFading: boolean = false;
  // Start der Funktion bei öffnen der Seite
  ngOnInit(): void {
    this.startRotatingsWords();
    this.fetchQuote();
  }
  // Funktion, wodurch das "Current Word" alle 3 Sekunden neu gesetzt wird.
  startRotatingsWords(): void {
    setInterval(() => {
      this.fadeOutAndChangeWord();
    }, 3000);
  }
  fadeOutAndChangeWord(): void {
    // Fading Trigger
    this.isFading = true;
    // Wait for fade out to complete (500ms) before changing the word
    setTimeout(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
      this.isFading = false;
    }, 500);
  }

  quote: { id: number; quote: string; author: string } = {
    id: 0,
    quote: '',
    author: '',
  };

  constructor(private quoteService: QuoteService) {}

  fetchQuote() {
    this.quoteService.getRandomQuote().subscribe(
      (response: { id: number; quote: string; author: string }) => {
        this.quote = response;
        console.log('Fetched quote:', response);
      },
      (error) => {
        console.error('Error fetching quote:', error);
      }
    );
  }
}
