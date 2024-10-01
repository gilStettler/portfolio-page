import { AfterViewInit, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [FooterComponent, NavigationBarComponent, CommonModule],
  template: `
    <div class="container">
      <h2>My Work Experience</h2>
      <div class="timeline">
        <div *ngFor="let item of timelineData" class="timeline-container">
          <img src="{{item.imgSrc}}" alt="{{item.imgAlt}}">
          <div class="text-box">
            <h3>{{item.company}}</h3>
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
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  timelineData = [
    {
      company: 'Swiss Accreditation Service SAS',
      period: 'January 2023 - today',
      description:
        'Deputy application manager. Elicitation and analysis of requirements. Coordination with developers. User support.',
      imgSrc: 'blop1.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      company: 'Swiss Accreditation Service SAS',
      period: 'August 2020 - December 2023',
      description:
        'Clerk at the SAS. Processing of accreditation dossiers. Accounts receivable invoices. Responsible for general enquiries.',
      imgSrc: 'blop2.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      company: 'State Secretary for Migration SEM',
      period: 'August 2019 - July 2020',
      description: 'Internship in the secretariat of the Civil Law Department.',
      imgSrc: 'blop3.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    }
  ];

  toggleVisibility(index: number): void {
    this.timelineData[index].isVisible = !this.timelineData[index].isVisible;
  }
}
