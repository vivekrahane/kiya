import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { KiyaNavigationItem } from '@kiya/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { KiyaMediaWatcherService } from '@kiya/services/media-watcher';

@Component({
    selector     : 'kiya-components',
    templateUrl  : './kiya-components.component.html',
    styleUrls    : ['./kiya-components.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KiyaComponentsComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: KiyaNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _kiyaMediaWatcherService: KiyaMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'kiya-components.libraries',
                title   : 'Libraries',
                type    : 'group',
                children: [
                    {
                        id   : 'kiya-components.libraries.mock-api',
                        title: 'MockAPI',
                        type : 'basic',
                        link : '/ui/kiya-components/libraries/mock-api'
                    }
                ]
            },
            {
                id      : 'kiya-components.components',
                title   : 'Components',
                type    : 'group',
                children: [
                    {
                        id   : 'kiya-components.components.alert',
                        title: 'Alert',
                        type : 'basic',
                        link : '/ui/kiya-components/components/alert'
                    },
                    {
                        id   : 'kiya-components.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/ui/kiya-components/components/card'
                    },
                    {
                        id   : 'kiya-components.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/ui/kiya-components/components/drawer'
                    },
                    {
                        id   : 'kiya-components.components.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/ui/kiya-components/components/fullscreen'
                    },
                    {
                        id   : 'kiya-components.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/ui/kiya-components/components/highlight'
                    },
                    {
                        id   : 'kiya-components.components.loading-bar',
                        title: 'Loading Bar',
                        type : 'basic',
                        link : '/ui/kiya-components/components/loading-bar'
                    },
                    {
                        id   : 'kiya-components.components.masonry',
                        title: 'Masonry',
                        type : 'basic',
                        link : '/ui/kiya-components/components/masonry'
                    },
                    {
                        id   : 'kiya-components.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/ui/kiya-components/components/navigation'
                    }
                ]
            },
            {
                id      : 'kiya-components.directives',
                title   : 'Directives',
                type    : 'group',
                children: [
                    {
                        id   : 'kiya-components.directives.scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/ui/kiya-components/directives/scrollbar'
                    },
                    {
                        id   : 'kiya-components.directives.scroll-reset',
                        title: 'ScrollReset',
                        type : 'basic',
                        link : '/ui/kiya-components/directives/scroll-reset'
                    }
                ]
            },
            {
                id      : 'kiya-components.services',
                title   : 'Services',
                type    : 'group',
                children: [
                    {
                        id   : 'kiya-components.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/ui/kiya-components/services/config'
                    },
                    {
                        id   : 'kiya-components.services.confirmation',
                        title: 'Confirmation',
                        type : 'basic',
                        link : '/ui/kiya-components/services/confirmation'
                    },
                    {
                        id   : 'kiya-components.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/ui/kiya-components/services/splash-screen'
                    },
                    {
                        id   : 'kiya-components.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/ui/kiya-components/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'kiya-components.pipes',
                title   : 'Pipes',
                type    : 'group',
                children: [
                    {
                        id   : 'kiya-components.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/ui/kiya-components/pipes/find-by-key'
                    }
                ]
            },
            {
                id      : 'kiya-components.validators',
                title   : 'Validators',
                type    : 'group',
                children: [
                    {
                        id   : 'kiya-components.validators.must-match',
                        title: 'MustMatch',
                        type : 'basic',
                        link : '/ui/kiya-components/validators/must-match'
                    }
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media query change
        this._kiyaMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
