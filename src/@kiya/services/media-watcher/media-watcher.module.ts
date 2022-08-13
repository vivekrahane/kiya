import { NgModule } from '@angular/core';
import { KiyaMediaWatcherService } from '@kiya/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        KiyaMediaWatcherService
    ]
})
export class KiyaMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _kiyaMediaWatcherService: KiyaMediaWatcherService)
    {
    }
}
