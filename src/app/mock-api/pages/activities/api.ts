import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { KiyaMockApiService } from '@kiya/lib/mock-api';
import { activities as activitiesData } from 'app/mock-api/pages/activities/data';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesMockApi
{
    private _activities: any = activitiesData;

    /**
     * Constructor
     */
    constructor(private _kiyaMockApiService: KiyaMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._kiyaMockApiService
            .onGet('api/pages/activities')
            .reply(() => [200, cloneDeep(this._activities)]);
    }
}
