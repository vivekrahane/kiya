import { Component, ViewEncapsulation } from '@angular/core';
import { kiyaAnimations } from '@kiya/animations';

@Component({
    selector     : 'confirmation-required-split-screen-reversed',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : kiyaAnimations
})
export class ConfirmationRequiredSplitScreenReversedComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
