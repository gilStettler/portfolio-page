import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [

    {
        path: '',
        component: StartpageComponent,
        title: 'Gil Stettler'
    },
    {
        path: 'homepage',
        component: HomepageComponent,
        title: 'Homepage'
    },
    {
        path: 'experiences',
        component: ExperiencesComponent,
        title: 'Experiences'
    },
    {
        path: 'education',
        component: EducationComponent,
        title: 'Education'
    },
    {
        path: 'skills',
        component: SkillsComponent,
        title: 'Skills'
    }
];

