import { Component, ViewEncapsulation } from '@angular/core';
import { kiyaAnimations } from '@kiya/animations';

@Component({
    selector     : 'confirmation-required-fullscreen',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : kiyaAnimations
})
export class ConfirmationRequiredFullscreenComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
