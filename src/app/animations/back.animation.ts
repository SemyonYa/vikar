import { trigger, state, transition, style, animate } from '@angular/animations';

export const backAnimation =
    trigger('backAnimation', [
        transition(':enter', [
            style({
                opacity: '0'
            }),
            animate('.5s ease-out',
                style({
                    opacity: '*'
                }))
        ]),
        transition(':leave', [
            style({ opacity: '*' }),
            animate('.3s ease-in',
                style({ opacity: '0' }))
        ])
    ]);
