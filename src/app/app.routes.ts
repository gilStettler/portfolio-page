import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { HomepageComponent } from './homepage/homepage.component';

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
    }
];
