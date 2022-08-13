import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { KiyaVerticalNavigationComponent } from '@kiya/components/navigation/vertical/vertical.component';
import { KiyaNavigationService } from '@kiya/components/navigation/navigation.service';
import { KiyaNavigationItem } from '@kiya/components/navigation/navigation.types';

@Component({
    selector       : 'kiya-vertical-navigation-group-item',
    templateUrl    : './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KiyaVerticalNavigationGroupItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() autoCollapse: boolean;
    @Input() item: KiyaNavigationItem;
    @Input() name: string;

    private _kiyaVerticalNavigationComponent: KiyaVerticalNavigationComponent;
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
        this._kiyaVerticalNavigationComponent = this._kiyaNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._kiyaVerticalNavigationComponent.onRefreshed.pipe(
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
