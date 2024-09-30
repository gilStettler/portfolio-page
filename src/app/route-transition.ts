import {
  query,
  style,
  transition,
  trigger,
  animate,
} from '@angular/animations';

export const routeTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, scale: 0.9 })], { optional: true }),
    query(':leaving', [animate('1s', style({ opacity: 0, scale: 0.9 }))], {
      optional: true,
    }),
    query(':enter', [animate('1s', style({ opacity: 1, scale: 1.2 }))], {
      optional: true,
    }),
  ]),
]);
