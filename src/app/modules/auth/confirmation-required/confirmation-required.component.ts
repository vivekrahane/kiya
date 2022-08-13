import { Component, ViewEncapsulation } from '@angular/core';
import { kiyaAnimations } from '@kiya/animations';

@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : kiyaAnimations
})
export class AuthConfirmationRequiredComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
