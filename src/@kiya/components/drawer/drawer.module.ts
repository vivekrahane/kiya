import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiyaDrawerComponent } from '@kiya/components/drawer/drawer.component';

@NgModule({
    declarations: [
        KiyaDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        KiyaDrawerComponent
    ]
})
export class KiyaDrawerModule
{
}
