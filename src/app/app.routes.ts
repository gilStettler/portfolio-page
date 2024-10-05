import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [

    {
        path: '',
        component: StartpageComponent,
        title: 'Gil Stettler'
    },
    {
        path: 'homepage',
        component: HomepageComponent,
        title: 'homepage'
    },
    {
        path: 'experiences',
        component: ExperiencesComponent,
        title: 'experiences'
    },
    {
        path: 'education',
        component: EducationComponent,
        title: 'education'
    }
];

