import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
  state
} from '@angular/animations';

export const progressBars = trigger('progbar', [
  state(
    '0',
    style({
      width: '0%'
    })
  ),
  state(
    '20',
    style({
      width: '20%'
    })
  ),
  state(
    '40',
    style({
      width: '40%'
    })
  ),
  state(
    '60',
    style({
      width: '60%'
    })
  ),
  state(
    '80',
    style({
      width: '80%'
    })
  ),
  state(
    '100',
    style({
      width: '100%'
    })
  ),
  transition('* <=> *', [animate('10ms')])
]);
