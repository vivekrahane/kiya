import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { kiyaAnimations } from '@kiya/animations';
import { KiyaNavigationItem } from '@kiya/components/navigation/navigation.types';
import { KiyaNavigationService } from '@kiya/components/navigation/navigation.service';
import { KiyaUtilsService } from '@kiya/services/utils/utils.service';

@Component({
    selector       : 'kiya-horizontal-navigation',
    templateUrl    : './horizontal.component.html',
    styleUrls      : ['./horizontal.component.scss'],
    animations     : kiyaAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'kiyaHorizontalNavigation'
})
export class KiyaHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() name: string = this._kiyaUtilsService.randomId();
    @Input() navigation: KiyaNavigationItem[];

    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _kiyaNavigationService: KiyaNavigationService,
        private _kiyaUtilsService: KiyaUtilsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Navigation
        if ( 'navigation' in changes )
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Make sure the name input is not an empty string
        if ( this.name === '' )
        {
            this.name = this._kiyaUtilsService.randomId();
        }

        // Register the navigation component
        this._kiyaNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the navigation component from the registry
        this._kiyaNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

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
