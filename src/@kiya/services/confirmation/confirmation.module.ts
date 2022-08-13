import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { KiyaConfirmationService } from '@kiya/services/confirmation/confirmation.service';
import { KiyaConfirmationDialogComponent } from '@kiya/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        KiyaConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        KiyaConfirmationService
    ]
})
export class KiyaConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _kiyaConfirmationService: KiyaConfirmationService)
    {
    }
}
