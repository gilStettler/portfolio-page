import { Component, OnInit } from '@angular/core';
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
            but my passion is the drums. I play in the Musikgesellschaft
            Schüpbach, but I also help out in other clubs when the opportunity
            arises. While I primarily play brass band music in the club, I
            prefer to play metal in my private life. My current favorite bands
            are
            <a href="https://www.youtube.com/watch?v=YcccCtqbUpU">LANDMVRKS</a>,
            <a href="https://www.youtube.com/watch?v=bAp3BPUfj2o"
              >Make them Suffer</a
            >
            and
            <a href="https://www.youtube.com/watch?v=zCflVvMhoAU">Eluveitie</a>.
            Check out some of my favorite songs using the links!
          </p>
        </div>
        <div class="hobby-color2"></div>
      </div>
      <div class="hobby">
        <div class="hobby-color2"><h2>Gaming</h2></div>
        <div class="hobby-color1"></div>
      </div>
      <div class="hobby">
        <div class="hobby-color1"><h2>Reading</h2></div>
        <div class="hobby-color2"></div>
      </div>
      <div class="hobby">
        <div class="hobby-color2">
          <h2>Petting cats</h2>
          <p>
            I have three cats. Their names are Yuna, Chili and Arwen. Petting them is nice. Why? Because cats are damn cute... much cuter
            than dogs. Not convinced? With the button you can generate cat
            pictures or gifs.
          </p>
          <button (click)="this.fetchCat()">Generate Cat</button>
        </div>
        <div *ngIf="cat && cat.url" class="hobby-color1">
          <img [src]="cat.url" alt="Cat Image" />
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
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
    this.catsService.getCats().subscribe(
      (
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
      (error) => {
        console.error('Failed to fetch cat:', error);
      }
    );
  }
}
