import { NgModule } from '@angular/core';
import { KiyaScrollbarDirective } from '@kiya/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        KiyaScrollbarDirective
    ],
    exports     : [
        KiyaScrollbarDirective
    ]
})
export class KiyaScrollbarModule
{
}
