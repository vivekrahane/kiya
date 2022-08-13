import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KiyaLoadingBarModule } from '@kiya/components/loading-bar';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutComponent } from 'app/layout/layouts/empty/empty.component';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        RouterModule,
        KiyaLoadingBarModule,
        SharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
