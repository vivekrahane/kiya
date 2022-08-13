import { NgModule } from '@angular/core';
import { KiyaSplashScreenService } from '@kiya/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        KiyaSplashScreenService
    ]
})
export class KiyaSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _kiyaSplashScreenService: KiyaSplashScreenService)
    {
    }
}
