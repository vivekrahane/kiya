import { Component } from '@angular/core';
import { KiyaDrawerMode, KiyaDrawerService } from '@kiya/components/drawer';
import { KiyaComponentsComponent } from 'app/modules/admin/ui/kiya-components/kiya-components.component';

@Component({
    selector   : 'drawer',
    templateUrl: './drawer.component.html'
})
export class DrawerComponent
{
    drawerMode: KiyaDrawerMode;

    /**
     * Constructor
     */
    constructor(
        private _kiyaDrawerService: KiyaDrawerService,
        private _kiyaComponentsComponent: KiyaComponentsComponent
    )
    {
        // Set the defaults
        this.drawerMode = 'side';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     *
     * @param name
     */
    toggleDrawerMode(name: string): void
    {
        const drawer = this._kiyaDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.mode = drawer.mode === 'side' ? 'over' : 'side';
        }
    }

    /**
     * Toggle the drawer open
     *
     * @param name
     */
    toggleDrawerOpen(name: string): void
    {
        const drawer = this._kiyaDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.toggle();
        }
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
