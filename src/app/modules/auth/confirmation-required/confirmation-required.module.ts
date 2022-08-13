import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { KiyaCardModule } from '@kiya/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { AuthConfirmationRequiredComponent } from 'app/modules/auth/confirmation-required/confirmation-required.component';
import { authConfirmationRequiredRoutes } from 'app/modules/auth/confirmation-required/confirmation-required.routing';

@NgModule({
    declarations: [
        AuthConfirmationRequiredComponent
    ],
    imports     : [
        RouterModule.forChild(authConfirmationRequiredRoutes),
        MatButtonModule,
        KiyaCardModule,
        SharedModule
    ]
})
export class AuthConfirmationRequiredModule
{
}
