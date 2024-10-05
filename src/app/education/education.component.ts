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
          <img src="{{item.imgSrc}}" alt="{{item.imgAlt}}">
          <div class="text-box">
            <h3>{{item.job}}</h3>
            <small>{{item.period}}</small>
            <p>
              {{item.description}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <app-navigation-bar></app-navigation-bar>
    <app-footer></app-footer>
  `,
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  timelineData = [
    {
      job: 'Business IT Student',
      period: 'September 2022 - today',
      description:
        'Business IT Student at BFH',
      imgSrc: 'blop1.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Bern Business School',
      period: 'August 2016 - July 2019',
      description:
        'Clerk at the SAS. Processing of accreditation dossiers. Accounts receivable invoices. Responsible for general enquiries.',
      imgSrc: 'blop2.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Secondary School Signau',
      period: 'August 2019 - July 2020',
      description: 'Internship in the secretariat of the Civil Law Department.',
      imgSrc: 'blop3.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Primary School Schüpbach',
      period: 'August 2019 - July 2020',
      description: 'Internship in the secretariat of the Civil Law Department.',
      imgSrc: 'blop3.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    }]

}
