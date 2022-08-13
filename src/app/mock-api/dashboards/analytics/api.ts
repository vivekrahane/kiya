import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { KiyaMockApiService } from '@kiya/lib/mock-api';
import { analytics as analyticsData } from 'app/mock-api/dashboards/analytics/data';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsMockApi
{
    private _analytics: any = analyticsData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._kiyaMockApiService
            .onGet('api/dashboards/analytics')
            .reply(() => [200, cloneDeep(this._analytics)]);
    }
}
