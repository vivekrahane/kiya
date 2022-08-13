import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiyaCardComponent } from '@kiya/components/card/card.component';

@NgModule({
    declarations: [
        KiyaCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        KiyaCardComponent
    ]
})
export class KiyaCardModule
{
}
