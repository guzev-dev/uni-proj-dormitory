import {animate, state, style, transition, trigger} from "@angular/animations";

export const componentChangeAnimation = trigger('componentChange', [
  state('in', style({
    transform: '0',
  })),
  transition('void => *', [
    style({
      transform: 'translateY(-100px)'
    }),
    animate('0.3s')
  ])
]);
