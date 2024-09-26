import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [RouterModule],
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
        </div>
      </section>
    </body>
  `,
  styleUrl: './startpage.component.scss',
})
export class StartpageComponent {
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
}
