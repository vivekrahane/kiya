import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiyaMasonryComponent } from '@kiya/components/masonry/masonry.component';

@NgModule({
    declarations: [
        KiyaMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        KiyaMasonryComponent
    ]
})
export class KiyaMasonryModule
{
}
