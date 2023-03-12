import {animate, state, style, transition, trigger} from "@angular/animations";

export const componentChangeAnimation = trigger('componentChange', [
  state('in', style({
    transform: '0',
  })),
  transition('void => *', [
    style({
      transform: 'scale(0.9)'
    }),
    animate('0.2s')
  ])
]);
