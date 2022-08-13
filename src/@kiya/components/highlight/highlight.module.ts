import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiyaHighlightComponent } from '@kiya/components/highlight/highlight.component';

@NgModule({
    declarations: [
        KiyaHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        KiyaHighlightComponent
    ]
})
export class KiyaHighlightModule
{
}
