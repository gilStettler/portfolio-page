import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, CommonModule],
  template: `
    <div class="container">
      <h2>My Education</h2>
      <div class="timeline">
        <div *ngFor="let item of timelineData" class="timeline-container">
          <img src="{{ item.imgSrc }}" alt="{{ item.imgAlt }}" />
          <div class="text-box">
            <h3>{{ item.job }}</h3>
            <small>{{ item.period }}</small>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <app-navigation-bar></app-navigation-bar>
    <app-footer></app-footer>
  `,
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  timelineData = [
    {
      job: 'Business IT Student',
      period: 'September 2022 - today',
      description:
        'I am currently studying business informatics at the Bern University of Applied Sciences BFH. I am in my 5th semester and expect to graduate in August 2026.',
      imgSrc: 'blop1.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Bern Business School',
      period: 'August 2016 - July 2019',
      description:
        'I completed a four-year commercial apprenticeship with a vocational baccalaureate at the business school in Bern.',
      imgSrc: 'blop2.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Secondary School Signau',
      period: 'August 2019 - July 2020',
      description:
        'I attended secondary school in Signau from the 6th to the 9th grade.',
      imgSrc: 'blop3.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Primary School Schüpbach',
      period: 'August 2019 - July 2020',
      description:
        'I spent my primary school years at Schüpbach school. I grew up in Schüpbach and still live there at the moment.',
      imgSrc: 'blop3.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
  ];
}
