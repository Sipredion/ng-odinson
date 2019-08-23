import {
  trigger,
  state,
  style,
  animate,
  transition, animation, query, stagger
} from '@angular/animations';

export const growShrinkVertical = [
  trigger('growShrinkVertical', [
    state('open', style({ height: '100%', opacity: 1, padding: '.35rem'})),
    state('closed', style({ height: '0', opacity: 0, padding: 0})),
    transition('* <=> *', animate(200))
  ])
];
