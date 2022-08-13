import { Component } from '@angular/core';
import { KiyaComponentsComponent } from 'app/modules/admin/ui/kiya-components/kiya-components.component';

@Component({
    selector   : 'highlight',
    templateUrl: './highlight.component.html'
})
export class HighlightComponent
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
