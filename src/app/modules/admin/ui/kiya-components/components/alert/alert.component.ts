import { Component } from '@angular/core';
import { KiyaAlertService } from '@kiya/components/alert';
import { KiyaComponentsComponent } from 'app/modules/admin/ui/kiya-components/kiya-components.component';

@Component({
    selector   : 'alert',
    templateUrl: './alert.component.html',
    styles     : [
        `
            kiya-alert {
                margin: 16px 0;
            }
        `
    ]
})
export class AlertComponent
{
    /**
     * Constructor
     */
    constructor(
        private _kiyaAlertService: KiyaAlertService,
        private _kiyaComponentsComponent: KiyaComponentsComponent
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void
    {
        // Dismiss
        this._kiyaAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void
    {
        // Show
        this._kiyaAlertService.show(name);
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._kiyaComponentsComponent.matDrawer.toggle();
    }
}
