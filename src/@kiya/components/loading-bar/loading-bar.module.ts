import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { KiyaLoadingBarComponent } from '@kiya/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        KiyaLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        KiyaLoadingBarComponent
    ]
})
export class KiyaLoadingBarModule
{
}
