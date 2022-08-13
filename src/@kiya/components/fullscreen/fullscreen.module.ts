import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KiyaFullscreenComponent } from '@kiya/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        KiyaFullscreenComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        KiyaFullscreenComponent
    ]
})
export class KiyaFullscreenModule
{
}
