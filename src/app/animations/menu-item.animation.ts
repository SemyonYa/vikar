import { trigger, state, transition, style, animate } from '@angular/animations';

export const menuItemAnimation =
    trigger('menuItemAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-100%)'
            }),
            animate('.7s ease-out',
                style({
                    transform: '*'
                }))
        ]),
        transition(':leave', [
            style({ transform: '*' }),
            animate('.7s ease-in',
                style({ transform: 'translateX(-100%)' }))
        ])
    ]);
