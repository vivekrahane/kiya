import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { KiyaConfirmationModule } from '@kiya/services/confirmation';
import { KiyaLoadingModule } from '@kiya/services/loading';
import { KiyaMediaWatcherModule } from '@kiya/services/media-watcher/media-watcher.module';
import { KiyaSplashScreenModule } from '@kiya/services/splash-screen/splash-screen.module';
import { KiyaUtilsModule } from '@kiya/services/utils/utils.module';

@NgModule({
    imports  : [
        KiyaConfirmationModule,
        KiyaLoadingModule,
        KiyaMediaWatcherModule,
        KiyaSplashScreenModule,
        KiyaUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class KiyaModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: KiyaModule)
    {
        if ( parentModule )
        {
            throw new Error('KiyaModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
