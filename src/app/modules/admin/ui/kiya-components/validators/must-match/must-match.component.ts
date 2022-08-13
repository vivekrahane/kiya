import { Component } from '@angular/core';
import { KiyaComponentsComponent } from 'app/modules/admin/ui/kiya-components/kiya-components.component';

@Component({
    selector   : 'must-match',
    templateUrl: './must-match.component.html'
})
export class MustMatchComponent
{
    /**
     * Constructor
     */
    constructor(private _kiyaComponentsComponent: KiyaComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._kiyaComponentsComponent.matDrawer.toggle();
    }
}
