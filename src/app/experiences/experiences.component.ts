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
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  timelineData = [
    {
      job: 'Deputy Application Manager',
      period: 'January 2023 - today',
      description:
        'In January 2024, I took over deputy responsibility for the FA-SAS specialist application developed in-house. I collect, process and manage user requests, manage the application documentation and provide user support.',
      imgSrc: 'blop1.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Specialised Collaborator',
      period: 'August 2020 - December 2023',
      description:
        'At the Swiss Accreditation Service SAS, I was responsible for processing accreditation dossiers, issuing customer invoices and for the general e-mail inbox.',
      imgSrc: 'blop2.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
    {
      job: 'Intern at the Civil Law Department',
      period: 'August 2019 - July 2020',
      description:
        'I completed an internship in the secretariat of the Citizenship Division at the State Secretariat for Migration. I was responsible for general administrative work.',
      imgSrc: 'blop3.svg',
      imgAlt: 'Aufzählungszeichen',
      isVisible: false,
    },
  ];

  toggleVisibility(index: number): void {
    this.timelineData[index].isVisible = !this.timelineData[index].isVisible;
  }
}
