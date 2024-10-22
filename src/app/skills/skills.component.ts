import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParseErrorLevel } from '@angular/compiler';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, CommonModule, FormsModule],
  template: `
    <app-navigation-bar></app-navigation-bar>
    <div class="container">
      <div class="search-container">
        Use the search bar to look for a specific skill!
        <form>
          <input
            [(ngModel)]="searchTerm"
            class="searchbar"
            type="text"
            placeholder="Search skill.."
            name="search"
          />
        </form>
      </div>
      <div class="skills-container">
        <div *ngFor="let item of filteredSkills()" class="skill">
          <h2>{{ item.name }}</h2>
          <p>{{ item.level }}</p>
          <a href="{{ item.link }}">Learn more</a>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  searchTerm = '';

  skillsData = [
    {
      name: 'German',
      level: 'Mother Tongue',
      keywords: [
        'sprache',
        'sprachen',
        'language',
        'german',
        'deutsch',
        'languages',
      ],
      link: 'https://en.wikipedia.org/wiki/German_language',
    },
    {
      name: 'Requirements Engineering',
      level: 'Certified: IREB Foundation Level',
      keywords: [
        'requirements engineering',
        'ireb',
        'anforderungen',
        'anforderungserhebung',
        'requirements',
        'certified',
      ],
      link: 'https://saq.ch/de/personenzertifizierung/informatik/requirements_engineering/',
    },
    {
      name: 'Angular',
      level: null,
      keywords: [
        'angular',
        'typescript',
        'framework',
        'frontend',
        'web development',
        'webentwicklung',
        'html',
        'css',
        'programming',
        'programmierung',
        'code',
        'coding',
      ],
      link: 'https://angular.dev/',
    },
    {
      name: 'Business Process Model & Notation',
      level: null,
      keywords: [
        'bpmn',
        'business process model and notation',
        'modeling',
        'process',
        'prozess',
      ],
      link: 'https://www.omg.org/bpmn/',
    },
    {
      name: 'Unified Modeling Language UML',
      level: null,
      keywords: ['uml', 'unified modeling language', 'modeling'],
      link: 'https://www.uml.org/',
    },
    {
      name: 'JIRA',
      level: null,
      keywords: ['jira', 'user stories', 'tickets', 'atlassian'],
      link: 'https://www.atlassian.com/software/jira',
    },
    {
      name: 'HERMES',
      level: 'Certified: HERMES 5 Foundation Level',
      keywords: [
        'hermes',
        'project management',
        'certified',
        'projektmanagement',
        'project',
      ],
      link: 'https://www.hermes.admin.ch/',
    },
    {
      name: 'French',
      level: 'Certified: DFP B2',
      keywords: [
        'sprache',
        'sprachen',
        'language',
        'french',
        'französisch',
        'languages',
        'certified',
      ],
      link: 'https://en.wikipedia.org/wiki/French_language',
    },
    {
      name: 'Python',
      level: null,
      keywords: ['python', 'programmierung', 'code', 'coding'],
      link: 'https://www.python.org/',
    },
    {
      name: 'MS-Office',
      level: null,
      keywords: [
        'ms-office',
        'microsoft office',
        'microsoft',
        'word',
        'excel',
        'powerpoint',
      ],
      link: 'https://www.microsoft.com/en-us/microsoft-365',
    },
    {
      name: 'R',
      level: null,
      keywords: ['r', 'data science', 'data analytics', 'analytics', 'data'],
      link: 'https://www.r-project.org/',
    },
    {
      name: 'English',
      level: 'Certified: Cambride English B2',
      keywords: [
        'sprache',
        'sprachen',
        'language',
        'english',
        'englisch',
        'languages',
        'certified',
      ],
      link: 'https://en.wikipedia.org/wiki/English_language',
    },
    {
      name: 'SQLite',
      level: null,
      keywords: ['sqlite', 'sql', 'database', 'data management', 'data'],
      link: 'https://www.sqlite.org/index.html',
    },
  ];

  filteredSkills() {
    if (!this.searchTerm) {
      return this.skillsData;
    }
    const searchTermLower = this.searchTerm.toLowerCase();
    return this.skillsData.filter((skill) => {
      return skill.keywords.some((keyword) =>
        keyword.includes(searchTermLower)
      );
    });
  }
}
