import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { KiyaHighlightModule } from '@kiya/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { TypographyComponent } from 'app/modules/admin/ui/typography/typography.component';

export const routes: Route[] = [
    {
        path     : '',
        component: TypographyComponent
    }
];

@NgModule({
    declarations: [
        TypographyComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatTabsModule,
        KiyaHighlightModule,
        SharedModule
    ]
})
export class TypographyModule
{
}
