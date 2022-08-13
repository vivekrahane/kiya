import { NgModule } from '@angular/core';
import { KiyaScrollResetDirective } from '@kiya/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        KiyaScrollResetDirective
    ],
    exports     : [
        KiyaScrollResetDirective
    ]
})
export class KiyaScrollResetModule
{
}
