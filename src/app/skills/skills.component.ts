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
    },
    {
      name: 'Unified Modeling Language UML',
      level: null,
      keywords: ['uml', 'unified modeling language', 'modeling'],
    },
    {
      name: 'JIRA',
      level: null,
      keywords: ['jira', 'user stories', 'tickets', 'atlassian'],
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
    },
    {
      name: 'Python',
      level: null,
      keywords: ['python', 'programmierung', 'code', 'coding'],
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
    },
    {
      name: 'R',
      level: null,
      keywords: ['r', 'data science', 'data analytics', 'analytics', 'data'],
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
    },
    {
      name: 'SQLite',
      level: null,
      keywords: ['sqlite', 'sql', 'database', 'data management', 'data'],
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
