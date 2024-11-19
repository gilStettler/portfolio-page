import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { CatsService } from '../cats.service';
import { DogsService } from '../dogs.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [FooterComponent, NavigationBarComponent, CommonModule, FormsModule],
  template: `
    <app-navigation-bar></app-navigation-bar>
    <div class="container">
      <div class="hobby">
        <div class="hobby-color1">
          <h2>Playing Drums</h2>
          <p>
            I have been playing all kinds of percussion instruments since 2010,
            but my passion are the drums. I play in the Musikgesellschaft
            Schüpbach, but I also help out in other clubs when the opportunity
            arises. While I primarily play brass band music in the club, I
            prefer to play metal in my private life. Some of my favorite songs
            are
            <a href="https://www.youtube.com/watch?v=YcccCtqbUpU"
              >Reckoning by LANDMVRKS</a
            >,
            <a href="https://www.youtube.com/watch?v=qSeiG6qMhaI"
              >Second and Sebring by Of Mice & Men</a
            >
            and
            <a href="https://www.youtube.com/watch?v=JglOS8TRFp4"
              >Pain Remains I by Lorna Shore </a
            >. If you are not into heavy music I also recommend
            <a href="https://www.youtube.com/watch?v=KBd7V4RFJoQ"
              >Euphoria by Viera Blech</a
            >. Oh by the way, on the right side there is a virtual drumset to
            check out!
          </p>
        </div>
        <div class="hobby-color2">
          <button (click)="playSound(5)">
            high tom <br />
            <small>t</small>
          </button>
          <button (click)="playSound(6)">
            mid tom <br />
            <small>z</small>
          </button>
          <button (click)="playSound(7)">
            low tom <br />
            <small>u</small>
          </button>
          <button (click)="playSound(8)">
            crash <br />
            <small>i</small>
          </button>
          <button (click)="playSound(4)">
            ride <br />
            <small>h</small>
          </button>
          <button (click)="playSound(3)">
            snare <br />
            <small>f</small>
          </button>
          <button (click)="playSound(1)">
            hihat <br />
            <small>j</small>
          </button>
          <button (click)="playSound(2)">
            open hihat <br />
            <small>k</small>
          </button>
          <button #kickbutton (click)="playSound(0)">
            kick <br />
            <small>space</small>
          </button>
        </div>
      </div>
      <div class="hobby">
        <div class="hobby-color3">
          <h2>Gaming</h2>
          <p>
            My passion for gaming was awakened at a young age. My first console,
            or rather handheld, was the Gameboy Advance and my first game was
            Banjo-Kazooie: Grunty's Revenge. Nowadays, I prefer to play on the
            PC and am a big fan of classic role-playing games (CRPGs), which I
            can really immerse myself in.
          </p>
        </div>
        <div class="hobby-color4">
          <h2>Reading</h2>
          <p>
            I've enjoyed reading since I was young. My favorites are fantasy and
            horror books. However, I recently became interested in sci-fi after
            I started reading the Foundation trilogy by Isaac Asimov. Incredible
            books, highly recommend.
          </p>
        </div>
      </div>
      <div class="hobby">
        <div class="hobby-color5">
          <h2>Petting cats</h2>
          <p>
            I have three cats. Their names are Yuna, Chili and Arwen. Petting
            them is nice. Why? Because cats are damn cute... much cuter than
            dogs. You can generate a random cat or dog image below and try to
            guess the animal.
          </p>
          <button (click)="fetchRandomAnimal()">Generate Cat or Dog</button>
        </div>
        <div class="hobby-color6">
          <div *ngIf="animalUrl" class="guess-container">
            <input
              type="text"
              [(ngModel)]="userGuess"
              placeholder="Type 'cat or 'dog'"
              class="guess-input"
            />
            <button (click)="submitGuess()" class="submit-button">
              Submit Guess
            </button>
          </div>
          <button *ngIf="animalUrl" (click)="revealImage()">Reduce Blur</button>
          <img
            [src]="animalUrl"
            [ngStyle]="{ filter: 'blur(' + blurLevel + 'px)' }"
            alt="Random Animal Image"
          />
          <p *ngIf="showResult" class="{{ this.resultClass }}">
            {{ resultMessage }}
          </p>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private catsService: CatsService,
    private dogsService: DogsService
  ) {}

  // Virtuelles Drumset
  @ViewChild('kickButton') kickButton!: ElementRef;

  sounds: string[] = [
    'kick.wav',
    'hihat.wav',
    'openhat.wav',
    'snare.wav',
    'ride.wav',
    'tom-acoustic02.wav',
    'tom.wav',
    'Tomtom.wav',
    'crash-acoustic.wav',
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.playSound(0);
      event.preventDefault();
    } else if (event.key === 'j') {
      this.playSound(1);
    } else if (event.key === 'k') {
      this.playSound(2);
    } else if (event.key === 'f') {
      this.playSound(3);
    } else if (event.key === 'h') {
      this.playSound(4);
    } else if (event.key === 't') {
      this.playSound(5);
    } else if (event.key === 'z') {
      this.playSound(6);
    } else if (event.key === 'u') {
      this.playSound(7);
    } else if (event.key === 'i') {
      this.playSound(8);
    }
  }

  playSound(index: number) {
    let audio = new Audio();
    audio.src = this.sounds[index];
    audio.load();
    audio.play().catch((error) => console.error('Error playing audio:', error));
  }

  // Guess Animals Game
  animalUrl: string | null = null;
  animalType: 'cat' | 'dog' | null = null;
  blurLevel: number = 40;
  revealClicks: number = 0;
  userGuess: string = '';
  resultMessage: string = '';
  resultClass: string | null = null;
  showResult: boolean = false;

  fetchRandomAnimal() {
    const isCat = Math.random() < 0.5;

    if (isCat) {
      this.fetchCat();
      this.animalType = 'cat';
    } else {
      this.fetchDog();
      this.animalType = 'dog';
    }
    this.blurLevel = 40;
    this.revealClicks = 0;
    this.showResult = false;
  }

  fetchCat() {
    this.catsService.getCats().subscribe({
      next: (
        response: Array<{
          id: string;
          url: string;
          width: number;
          height: number;
        }>
      ) => {
        this.animalUrl = response[0].url; 
        console.log('Fetched cat:', response);
      },
      error: (error) => {
        console.error('Failed to fetch cat:', error);
      },
    });
  }

  fetchDog() {
    this.dogsService.getDogs().subscribe({
      next: (
        response: Array<{
          id: string;
          url: string;
          width: number;
          height: number;
        }>
      ) => {
        this.animalUrl = response[0].url; 
        console.log('Fetched dog:', response);
      },
      error: (error) => {
        console.error('Failed to fetch dog:', error);
      },
    });
  }

  revealImage() {
    if (this.revealClicks < 3) {
      this.revealClicks++;
      this.blurLevel -= 10;
    }
  }

  submitGuess() {
    if (this.userGuess.toLowerCase() === this.animalType) {
      this.resultMessage = 'Correct, it is a ' + this.animalType + '!';
      this.resultClass = 'result-correct';
    } else {
      this.resultMessage = 'Wrong, it is a ' + this.animalType + '!';
      this.resultClass = 'result-wrong';
    }
    this.blurLevel = 0;
    this.showResult = true;
  }
}
