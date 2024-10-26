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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [FooterComponent, NavigationBarComponent, CommonModule],
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
        <div class="hobby-color4"></div>
      </div>
      <div class="hobby">
        <div class="hobby-color5">
          <h2>Reading</h2>
          <p>
            I've enjoyed reading since I was young. My favorites are fantasy and
            horror books. However, I recently became interested in sci-fi after
            I started reading the Foundation trilogy by Isaac Asimov. Incredible
            books, highly recommend.
          </p>
        </div>
        <div class="hobby-color6"></div>
      </div>
      <div class="hobby">
        <div class="hobby-color7">
          <h2>Petting cats</h2>
          <p>
            I have three cats. Their names are Yuna, Chili and Arwen. Petting
            them is nice. Why? Because cats are damn cute... much cuter than
            dogs. Not convinced? With the button you can generate cat pictures
            or gifs.
          </p>
          <button (click)="this.fetchCat()">Generate Cat</button>
        </div>
        <div *ngIf="cat && cat.url" class="hobby-color8">
          <img [src]="cat.url" alt="Cat Image" />
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
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
    // Add more keys as needed
  }

  playSound(index: number) {
    let audio = new Audio();
    audio.src = this.sounds[index];
    audio.load();
    audio.play().catch((error) => console.error('Error playing audio:', error));
  }

  // Cat API
  cat: { id: string; url: string; width: number; height: number } = {
    id: '',
    url: '',
    width: 0,
    height: 0,
  };

  ngOnInit(): void {}

  constructor(private catsService: CatsService) {}

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
        this.cat = response[0];
        console.log('Fetched cat:', response);
      },
      error: (error) => {
        console.error('Failed to fetch cat:', error);
      },
    });
  }
}
