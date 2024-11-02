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
      <main>
        <img
          src="sky.png"
          alt="paralax-background"
          data-speedx="0.17"
          data-speedy="0.23"
          class=" bg-img"
        />
        <img
          src="clouds1.png"
          alt="clouds1-parallax"
          data-speedx="0.18"
          data-speedy="0.2"
          class="parallax clouds1"
        />
        <img
          src="clouds2.png"
          alt="clouds2-parallax"
          data-speedx="0.11"
          data-speedy="0.17"
          class="parallax clouds2"
        />
        <img
          src="mountains.png"
          alt="mountains-parallax"
          data-speedx="0.08"
          data-speedy="0.14"
          class="parallax mountains"
        />
        <div class="parallax text" data-speedx="0.05" data-speedy="0.11">
          <h1>Hey, I am Gil Stettler</h1>
          <h2>
            I am <span class="rotatingText" [class.fade]="isFading">{{ currentWord }}</span>
          </h2>
        </div>
        <img
          src="fog.png"
          alt="fog-parralax"
          data-speedx="0.05"
          data-speedy="0.11"
          class="parallax fog"
        />
        <img
          src="tree1.png"
          alt="tree1-parallax"
          data-speedx="0.02"
          data-speedy="0.08"
          class="parallax tree1"
        />
        <!--<img src="tree2.png" alt="tree2-parallax" class="parallax tree2">-->
        <img
          src="tree3.png"
          alt="tree3-parallax"
          data-speedx="0.009"
          data-speedy="0.05"
          class="parallax tree3"
        />
        <div class="acknowledgement"> Drawn by <a href="https://www.instagram.com/nekonadine/">&#64;NekoNadine</a></div>
        <button routerLink="/homepage" class="learnmore" data-speedx="0.05" data-speedy="0.11">Learn More</button>
      </main>
    </body>
  `,
  styleUrl: './startpage.component.scss',
})
export class StartpageComponent {
  constructor() {}

  // Parallax effect
  ngOnInit(): void {
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.startRotatingWords();
  }

  xValue: number = 0;
  yValue: number = 0;
  zValue: number = 0;

  handleMouseMove(e: MouseEvent): void {
    this.xValue = e.clientX - window.innerWidth / 2;
    this.yValue = e.clientY - window.innerHeight / 2;

    const parallax_el = document.querySelectorAll('.parallax');

    parallax_el.forEach((el) => {
      let speedx = parseFloat(el.getAttribute('data-speedx') || '0');
      let speedy = parseFloat(el.getAttribute('data-speedy') || '0');
      (el as HTMLElement).style.transform = `translateX(calc(-50% + ${
        this.xValue * speedx
      }px)) translateY(calc(-50% + ${this.yValue * speedy}px))`;
    });
  }

  // Wechselndes Wort
  words: string[] = [
    'a Business IT Student',
    'a Gamer',
    'an Application Manager',
    'a Musician',
  ];

  currentWord: string = this.words[0];
  wordIndex: number = 0;
  isFading: boolean = false;

  startRotatingWords(): void {
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
