import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { KiyaHorizontalNavigationComponent } from '@kiya/components/navigation/horizontal/horizontal.component';
import { KiyaNavigationService } from '@kiya/components/navigation/navigation.service';
import { KiyaNavigationItem } from '@kiya/components/navigation/navigation.types';

@Component({
    selector       : 'kiya-horizontal-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KiyaHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: KiyaNavigationItem;
    @Input() name: string;

    private _kiyaHorizontalNavigationComponent: KiyaHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _kiyaNavigationService: KiyaNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._kiyaHorizontalNavigationComponent = this._kiyaNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._kiyaHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
