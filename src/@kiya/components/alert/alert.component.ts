import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { kiyaAnimations } from '@kiya/animations';
import { KiyaAlertAppearance, KiyaAlertType } from '@kiya/components/alert/alert.types';
import { KiyaAlertService } from '@kiya/components/alert/alert.service';
import { KiyaUtilsService } from '@kiya/services/utils/utils.service';

@Component({
    selector       : 'kiya-alert',
    templateUrl    : './alert.component.html',
    styleUrls      : ['./alert.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : kiyaAnimations,
    exportAs       : 'kiyaAlert'
})
export class KiyaAlertComponent implements OnChanges, OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_dismissible: BooleanInput;
    static ngAcceptInputType_dismissed: BooleanInput;
    static ngAcceptInputType_showIcon: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() appearance: KiyaAlertAppearance = 'soft';
    @Input() dismissed: boolean = false;
    @Input() dismissible: boolean = false;
    @Input() name: string = this._kiyaUtilsService.randomId();
    @Input() showIcon: boolean = true;
    @Input() type: KiyaAlertType = 'primary';
    @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _kiyaAlertService: KiyaAlertService,
        private _kiyaUtilsService: KiyaUtilsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'kiya-alert-appearance-border' : this.appearance === 'border',
            'kiya-alert-appearance-fill'   : this.appearance === 'fill',
            'kiya-alert-appearance-outline': this.appearance === 'outline',
            'kiya-alert-appearance-soft'   : this.appearance === 'soft',
            'kiya-alert-dismissed'         : this.dismissed,
            'kiya-alert-dismissible'       : this.dismissible,
            'kiya-alert-show-icon'         : this.showIcon,
            'kiya-alert-type-primary'      : this.type === 'primary',
            'kiya-alert-type-accent'       : this.type === 'accent',
            'kiya-alert-type-warn'         : this.type === 'warn',
            'kiya-alert-type-basic'        : this.type === 'basic',
            'kiya-alert-type-info'         : this.type === 'info',
            'kiya-alert-type-success'      : this.type === 'success',
            'kiya-alert-type-warning'      : this.type === 'warning',
            'kiya-alert-type-error'        : this.type === 'error'
        };
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
        // Dismissed
        if ( 'dismissed' in changes )
        {
            // Coerce the value to a boolean
            this.dismissed = coerceBooleanProperty(changes.dismissed.currentValue);

            // Dismiss/show the alert
            this._toggleDismiss(this.dismissed);
        }

        // Dismissible
        if ( 'dismissible' in changes )
        {
            // Coerce the value to a boolean
            this.dismissible = coerceBooleanProperty(changes.dismissible.currentValue);
        }

        // Show icon
        if ( 'showIcon' in changes )
        {
            // Coerce the value to a boolean
            this.showIcon = coerceBooleanProperty(changes.showIcon.currentValue);
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the dismiss calls
        this._kiyaAlertService.onDismiss
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Dismiss the alert
                this.dismiss();
            });

        // Subscribe to the show calls
        this._kiyaAlertService.onShow
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Show the alert
                this.show();
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
     * Dismiss the alert
     */
    dismiss(): void
    {
        // Return if the alert is already dismissed
        if ( this.dismissed )
        {
            return;
        }

        // Dismiss the alert
        this._toggleDismiss(true);
    }

    /**
     * Show the dismissed alert
     */
    show(): void
    {
        // Return if the alert is already showing
        if ( !this.dismissed )
        {
            return;
        }

        // Show the alert
        this._toggleDismiss(false);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss/show the alert
     *
     * @param dismissed
     * @private
     */
    private _toggleDismiss(dismissed: boolean): void
    {
        // Return if the alert is not dismissible
        if ( !this.dismissible )
        {
            return;
        }

        // Set the dismissed
        this.dismissed = dismissed;

        // Execute the observable
        this.dismissedChanged.next(this.dismissed);

        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    }
}
