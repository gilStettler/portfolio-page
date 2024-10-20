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
    <div *ngIf="cat && cat.url">
      <img [src]="cat.url" alt="Cat Image">
    </div>
  </div>
  <app-footer></app-footer>
  `,
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  cat: {id: string, url: string, width: number, height: number} = {
    id: '',
    url: '',
    width: 0,
    height: 0
  }

  ngOnInit(): void {
    this.fetchCat();
  }

  constructor(private catsService: CatsService) {}

  fetchCat() {
    this.catsService.getCat().subscribe(
      (response: Array<{id: string, url: string, width: number, height: number}>) => {
        this.cat = response[0];
        console.log('Fetched cat:', response);
      },
      (error) => {
        console.error('Failed to fetch cat:', error);
      } 
    );
  }
}
