import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { KiyaAlertModule } from '@kiya/components/alert';
import { KiyaCardModule } from '@kiya/components/card';
import { KiyaDrawerModule } from '@kiya/components/drawer';
import { KiyaHighlightModule } from '@kiya/components/highlight';
import { KiyaLoadingBarModule } from '@kiya/components/loading-bar';
import { KiyaMasonryModule } from '@kiya/components/masonry/masonry.module';
import { KiyaNavigationModule } from '@kiya/components/navigation';
import { KiyaScrollResetModule } from '@kiya/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { KiyaComponentsComponent } from 'app/modules/admin/ui/kiya-components/kiya-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/kiya-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/kiya-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/kiya-components/components/card/card.component';
import { DrawerComponent } from 'app/modules/admin/ui/kiya-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/kiya-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/kiya-components/components/highlight/highlight.component';
import { NavigationComponent } from 'app/modules/admin/ui/kiya-components/components/navigation/navigation.component';
import { MasonryComponent } from 'app/modules/admin/ui/kiya-components/components/masonry/masonry.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/kiya-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/kiya-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/kiya-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/kiya-components/services/confirmation/confirmation.component';
import { LoadingBarComponent } from 'app/modules/admin/ui/kiya-components/components/loading-bar/loading-bar.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/kiya-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/kiya-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/kiya-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/kiya-components/validators/must-match/must-match.component';
import { kiyaComponentsRoutes } from 'app/modules/admin/ui/kiya-components/kiya-components.routing';

@NgModule({
    declarations: [
        KiyaComponentsComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DrawerComponent,
        FullscreenComponent,
        HighlightComponent,
        LoadingBarComponent,
        MasonryComponent,
        NavigationComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        ConfirmationComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports     : [
        RouterModule.forChild(kiyaComponentsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        KiyaAlertModule,
        KiyaCardModule,
        KiyaDrawerModule,
        KiyaHighlightModule,
        KiyaLoadingBarModule,
        KiyaMasonryModule,
        KiyaNavigationModule,
        KiyaScrollResetModule,
        SharedModule
    ]
})
export class KiyaComponentsModule
{
}
