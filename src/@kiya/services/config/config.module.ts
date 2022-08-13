import { ModuleWithProviders, NgModule } from '@angular/core';
import { KiyaConfigService } from '@kiya/services/config/config.service';
import { KIYA_APP_CONFIG } from '@kiya/services/config/config.constants';

@NgModule()
export class KiyaConfigModule
{
    /**
     * Constructor
     */
    constructor(private _kiyaConfigService: KiyaConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<KiyaConfigModule>
    {
        return {
            ngModule : KiyaConfigModule,
            providers: [
                {
                    provide : KIYA_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
