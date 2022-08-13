import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KiyaScrollbarModule } from '@kiya/directives/scrollbar/public-api';
import { KiyaHorizontalNavigationBasicItemComponent } from '@kiya/components/navigation/horizontal/components/basic/basic.component';
import { KiyaHorizontalNavigationBranchItemComponent } from '@kiya/components/navigation/horizontal/components/branch/branch.component';
import { KiyaHorizontalNavigationDividerItemComponent } from '@kiya/components/navigation/horizontal/components/divider/divider.component';
import { KiyaHorizontalNavigationSpacerItemComponent } from '@kiya/components/navigation/horizontal/components/spacer/spacer.component';
import { KiyaHorizontalNavigationComponent } from '@kiya/components/navigation/horizontal/horizontal.component';
import { KiyaVerticalNavigationAsideItemComponent } from '@kiya/components/navigation/vertical/components/aside/aside.component';
import { KiyaVerticalNavigationBasicItemComponent } from '@kiya/components/navigation/vertical/components/basic/basic.component';
import { KiyaVerticalNavigationCollapsableItemComponent } from '@kiya/components/navigation/vertical/components/collapsable/collapsable.component';
import { KiyaVerticalNavigationDividerItemComponent } from '@kiya/components/navigation/vertical/components/divider/divider.component';
import { KiyaVerticalNavigationGroupItemComponent } from '@kiya/components/navigation/vertical/components/group/group.component';
import { KiyaVerticalNavigationSpacerItemComponent } from '@kiya/components/navigation/vertical/components/spacer/spacer.component';
import { KiyaVerticalNavigationComponent } from '@kiya/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        KiyaHorizontalNavigationBasicItemComponent,
        KiyaHorizontalNavigationBranchItemComponent,
        KiyaHorizontalNavigationDividerItemComponent,
        KiyaHorizontalNavigationSpacerItemComponent,
        KiyaHorizontalNavigationComponent,
        KiyaVerticalNavigationAsideItemComponent,
        KiyaVerticalNavigationBasicItemComponent,
        KiyaVerticalNavigationCollapsableItemComponent,
        KiyaVerticalNavigationDividerItemComponent,
        KiyaVerticalNavigationGroupItemComponent,
        KiyaVerticalNavigationSpacerItemComponent,
        KiyaVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        KiyaScrollbarModule
    ],
    exports     : [
        KiyaHorizontalNavigationComponent,
        KiyaVerticalNavigationComponent
    ]
})
export class KiyaNavigationModule
{
}
