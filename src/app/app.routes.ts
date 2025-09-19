import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPage } from './pages/hero/hero-page';
import { DragonBall } from './pages/dragonball/dragonball-page';
import { DragonBallSuper } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: DragonBall,
  },
  {
    path: 'dragonball-super',
    component: DragonBallSuper,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
