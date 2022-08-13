import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KiyaConfirmationConfig } from '@kiya/services/confirmation/confirmation.types';

@Component({
    selector     : 'kiya-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        /* language=SCSS */
        `
            .kiya-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class KiyaConfirmationDialogComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: KiyaConfirmationConfig,
        public matDialogRef: MatDialogRef<KiyaConfirmationDialogComponent>
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

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}
