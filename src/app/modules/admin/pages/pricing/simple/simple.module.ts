import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { KiyaCardModule } from '@kiya/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { PricingSimpleComponent } from 'app/modules/admin/pages/pricing/simple/simple.component';
import { pricingSimpleRoutes } from 'app/modules/admin/pages/pricing/simple/simple.routing';

@NgModule({
    declarations: [
        PricingSimpleComponent
    ],
    imports     : [
        RouterModule.forChild(pricingSimpleRoutes),
        MatButtonModule,
        MatIconModule,
        KiyaCardModule,
        SharedModule
    ]
})
export class PricingSimpleModule
{
}
