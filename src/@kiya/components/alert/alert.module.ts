import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { KiyaAlertComponent } from '@kiya/components/alert/alert.component';

@NgModule({
    declarations: [
        KiyaAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        KiyaAlertComponent
    ]
})
export class KiyaAlertModule
{
}
