import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const progressBars = trigger('progbar', [
  state(
    '0',
    style({
      width: '0%'
    })
  ),
  state(
    '10',
    style({
      width: '10%'
    })
  ),
  state(
    '15',
    style({
      width: '15%'
    })
  ),
  state(
    '20',
    style({
      width: '20%'
    })
  ),
  state(
    '25',
    style({
      width: '25%'
    })
  ),
  state(
    '30',
    style({
      width: '30%'
    })
  ),
  state(
    '35',
    style({
      width: '35%'
    })
  ),
  state(
    '40',
    style({
      width: '40%'
    })
  ),
  state(
    '45',
    style({
      width: '45%'
    })
  ),
  state(
    '50',
    style({
      width: '50%'
    })
  ),
  state(
    '55',
    style({
      width: '55%'
    })
  ),
  state(
    '60',
    style({
      width: '60%'
    })
  ),
  state(
    '65',
    style({
      width: '65%'
    })
  ),
  state(
    '70',
    style({
      width: '70%'
    })
  ),
  state(
    '75',
    style({
      width: '75%'
    })
  ),
  state(
    '80',
    style({
      width: '80%'
    })
  ),
  state(
    '85',
    style({
      width: '85%'
    })
  ),
  state(
    '90',
    style({
      width: '90%'
    })
  ),
  state(
    '95',
    style({
      width: '95%'
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