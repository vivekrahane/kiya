import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { KiyaNavigationModule } from '@kiya/components/navigation';
import { KiyaLoadingBarModule } from '@kiya/components/loading-bar';
import { KiyaFullscreenModule } from '@kiya/components/fullscreen/fullscreen.module';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { QuickChatModule } from 'app/layout/common/quick-chat/quick-chat.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyLayoutComponent } from 'app/layout/layouts/vertical/classy/classy.component';

@NgModule({
    declarations: [
        ClassyLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        KiyaFullscreenModule,
        KiyaLoadingBarModule,
        KiyaNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        ClassyLayoutComponent
    ]
})
export class ClassyLayoutModule
{
}
