import { NgModule } from '@angular/core';
import { KiyaUtilsService } from '@kiya/services/utils/utils.service';

@NgModule({
    providers: [
        KiyaUtilsService
    ]
})
export class KiyaUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _kiyaUtilsService: KiyaUtilsService)
    {
    }
}
