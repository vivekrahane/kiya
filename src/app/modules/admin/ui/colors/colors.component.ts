import { Component, ViewEncapsulation } from '@angular/core';
import { kiyaAnimations } from '@kiya/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    animations   : kiyaAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
