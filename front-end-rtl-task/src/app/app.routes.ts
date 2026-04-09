import { Routes } from '@angular/router';
import {HomeScreenComponent} from './components/screens/home-screen-component/home-screen-component';
import {FormScreenComponent} from './components/screens/form-screen-component/form-screen-component';
import {ServicesScreenComponent} from './components/screens/services-screen-component/services-screen-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'form',
    component: FormScreenComponent
  },
  {
    path: 'services',
    component: ServicesScreenComponent
  },
];
