"use strict";(self.webpackChunkkiya=self.webpackChunkkiya||[]).push([[6907],{76907:(h,i,n)=>{n.r(i),n.d(i,{ChangelogModule:()=>u});var s=n(4521),r=n(44466),e=n(5e3),d=n(69808);function l(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"li"),e._uU(2),e.qZA(),e.BQk()),2&t){const a=o.$implicit;e.xp6(2),e.Oqu(a)}}function c(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",14)(2,"span",15),e._uU(3),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,l,3,1,"ng-container",9),e.qZA()(),e.BQk()),2&t){const a=o.$implicit;e.xp6(3),e.Oqu(a.type),e.xp6(2),e.Q6J("ngForOf",a.list)}}function p(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",10)(2,"div")(3,"h2",11),e._uU(4),e.qZA(),e.TgZ(5,"div",12),e._uU(6),e.qZA()(),e._UZ(7,"hr",13),e.YNc(8,c,6,2,"ng-container",9),e.qZA(),e.BQk()),2&t){const a=o.$implicit;e.xp6(4),e.Oqu(a.version),e.xp6(2),e.Oqu(a.releaseDate),e.xp6(2),e.Q6J("ngForOf",a.changes)}}const g=[{path:"",component:(()=>{class t{constructor(){this.changelog=[{version:"v14.2.0",releaseDate:"Feb 21, 2022",changes:[{type:"Changed",list:["(dependencies) Updated various packages","(AngularCLI) Re-enabled the cache since Tailwind related issues are fixed","(@kiya/navigation) Expose the width variables as css custom properties, so they can be overridden from the outside","(@kiya/drawer) Expose the width variable as a css custom property, so it can be overridden from the outside","(@kiya/masonry) Removed the unnecessary scss file"]},{type:"Fixed",list:["(layouts/dense) Fixed: Navigation appearance doesn't set correctly on small devices"]}]},{version:"v14.1.1",releaseDate:"Jan 02, 2022",changes:[{type:"Changed",list:["(dependencies) Updated various packages","(TailwindCSS) Moved to the new syntax on Tailwind config"]},{type:"Fixed",list:["(TailwindCSS) Accent and Warn colors are not being generated for themes other than the Default","(Contacts) Typo on resolve object"]}]},{version:"v14.1.0",releaseDate:"Dec 22, 2021",changes:[{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v13.1","(dependencies) Updated Tailwind to v3","(dependencies) Updated various other packages","(AngularCLI) Disabled file based cache as it causes issues with Tailwind v3"]}]},{version:"v14.0.0",releaseDate:"Nov 11, 2021",changes:[{type:"Added",list:["(KiyaLoadingBar) Added the KiyaLoadingBar component, its helper service and its interceptor"]},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v13","(dependencies) Updated various other packages","(dependencies) BREAKING: Updated RxJS to 7.4.0 and optimized import paths","(apps/calendar) BREAKING: Removed the Calendar app due to FullCalendar's Angular component not being properly developed","(KiyaDateRange) BREAKING: Removed the KiyaDateRange component, alternative: https://github.com/fetrarij/ngx-daterangepicker-material"]},{type:"Fixed",list:["(@kiya/overrides/angular-material) Fixed: Normal border color of the text field overrides the invalid and focus border colors on dark themes","(@kiya/navigation) Don't need to use interpolation on scss variables anymore since Tailwind doesn't cause any problems with them anymore"]}]},{version:"v13.6.2",releaseDate:"Sep 01, 2021",changes:[{type:"Fixed",list:["(QuickChat) Fixed: Wrong css rule causing a lot of problems"]}]},{version:"v13.6.1",releaseDate:"Aug 31, 2021",changes:[{type:"Fixed",list:["(QuickChat) Fixed: Overflowing issue"]}]},{version:"v13.6.0",releaseDate:"Aug 31, 2021",changes:[{type:"Added",list:["(QuickChat) Added the QuickChat bar"]},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v12.2.3","(dependencies) Updated various other packages","(layout) Separated the Settings drawer from the layout component"]},{type:"Fixed",list:["(@kiya/drawer) Final opacity of the overlay is not permanent due to player being destroyed right after the animation"]}]},{version:"v13.5.0",releaseDate:"Aug 13, 2021",changes:[{type:"Changed",list:["Huge performance improvement due to Angular v12.2.0","(dependencies) Updated Angular & Angular Material to v12.2.1","(dependencies) Updated various other packages","(tailwindcss) Removed old jsdoc from the config file","(@kiya/theming) Better structuring on the themes.scss file",'(@kiya) Disabled Angular Material "theme" sanity check since we use "all-component-themes" without a color map',"(apps/mailbox) Style improvements",'Removed empty "styles" from component decorators',"Decreased budget sizes since new Kiya is a lot smaller compared to the one with the old design"]},{type:"Fixed",list:["(@kiya/overrides) Quill editor is not styled correctly by default",'(@kiya/confirmation) Dialog size cannot be updated using dialogRef\'s "updateSize" method',"(apps/mailbox) Compose dialog doesn't work correctly on small height resolutions","(ui/page-layouts) Demo layout navigation appearance is not correct"]}]},{version:"v13.4.0",releaseDate:"July 29, 2021",changes:[{type:"Added",list:["(dashboards/finance) Added finance dashboard","(dashboards/crypto) Added crypto dashboard"]},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v12.1.4","(dependencies) Updated various other packages","(index) Updated the title, description and keywords","(dashboards/project) Light header on light themes and small adjustments in various places","(apps/contacts) Small adjustments for better consistency","(apps/ecommerce/inventory) Small adjustments for better consistency","(docs) Updated the multi language guide"]}]},{version:"v13.3.1",releaseDate:"July 17, 2021",changes:[{type:"Fixed",list:["(kiya/confirmation) Confirmation dialog colors are not optimized for the Dark mode"]}]},{version:"v13.3.0",releaseDate:"July 16, 2021",changes:[{type:"Added",list:["(kiya/confirmation) A service to quickly configure and show confirmation dialogs"]},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v12.1.2","(dependencies) Updated various other packages","(dashboards/analytics) Removed unused chart options declarations",'(apps/contacts) Added confirmation to the "Delete contact" action using KiyaConfirmationService','(apps/ecommerce/inventory) Added confirmation to the "Delete product" action using KiyaConfirmationService','(apps/scrumboard) Added confirmation to the "Delete list" action using KiyaConfirmationService','(apps/tasks) Added confirmation to the "Delete task" action using KiyaConfirmationService',"(ui/confirmation-dialog) Created a separate page for KiyaConfirmationService and put the example configurator in there for better visibility","(docs) Moved Kiya Components and Other Components into UI for better visibility and better categorization"]},{type:"Fixed",list:["(transloco) Undefined fallback language causes issues in some cases",'(tailwindcss) Ordered lists with "s" modifier causes builder to throw errors']}]},{version:"v13.2.0",releaseDate:"July 01, 2021",changes:[{type:"Added",list:['(kiya/navigation) "tooltip" property to show tooltips on navigation items using MatTooltip']},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v12.1.1","(dependencies) Updated various other packages",'(dev-dependencies) Removed "@angular/language-service" as IDEs and Code editors include them either natively or through plugins',"(Angular Material) Apply rounded styles by default",'(kiya/navigation) Moved *ngIf directives into their own "ng-container" containers','(layouts) Hide the "kiya-fullscreen" button on smaller devices since they don\'t support fullscreen',"(layout/common) Explicitly define the overlay position strategy properties","(apps/contacts) Explicitly define the overlay position strategy properties","(apps/mailbox) Explicitly define the overlay position strategy properties","(apps/tasks) Explicitly define the overlay position strategy properties","(tailwindcss) Breaking: Removed 5, 6 & 12 fractional spacing values since they are not used in Demo by default and they are mostly not needed because of Flex and Grid. If you happen to use them, you can manually add them back.","(docs) Updated docs",'(package.json) Added "description" and "author" fields']},{type:"Fixed",list:["(kiya/drawer) Memory leak due to the animation player, thanks to Vadym Pidoplichko for coming up the issue and the solution.",'(kiya/navigation) Vertical navigation blocks scroll if it\'s destroyed while in "over" mode and opened',"(layouts) Header buttons are not fitting on certain layouts","(layout/settings-drawer) Issues on small screen devices","(apps/ecommerce/inventory) Tags selector border colors are not correct on dark mode","(apps/help-center) Small dark mode issues",'(transloco) Language files cannot be loaded if using a base href other than "/"',"(tailwindcss) Dark mode classes are not being purged correctly due to the wrong safelist entry"]}]},{version:"v13.1.0",releaseDate:"June 15, 2021",changes:[{type:"Added",list:["(kiya/fullscreen) [tooltip] & [iconTpl] inputs for customizing the trigger button",'(kiya/navigation) "target" property for setting the target attribute on external links',"(ui/angular-material) List of available components with links to official docs","(ui/advanced-search) An example form that uses query parameters for Advanced Search like forms",'(ui/page-layouts) Tabbed version of "Simple Fullwidth" page layout']},{type:"Changed",list:["(app.resolver) Use services to request the initial data","(core) New navigation service to request and store the navigation data",'(core/user) Renamed "user.model" to "user.types" for better consistency',"(layouts) Common components of layouts now requests their data directly from their service rather than getting it from route data","(layouts/common/search) Improved the autocomplete design","(apps/ecommerce/inventory) Replaced the mat-table with a custom grid for better performance & improved the mobile experience","(docs) Updated the docs to reflect the latest changes","(dependencies) Updated Angular, Angular Material & various other packages"]},{type:"Fixed",list:["(kiya/navigation) First children of collapsable items don't have proper spacing at the top",'(data/navigation) Wrong icon for "Invoice" navigation item','(data/navigation) Dashboards are missing from "Futuristic" navigation type']}]},{version:"v13.0.3",releaseDate:"June 03, 2021",changes:[{type:"Added",list:["(apps/scrumboard) New, initial version of the Scrumboard app"]},{type:"Changed",list:['(kiya/autogrow) BREAKING: Removed "kiyaAutogrow" in favor of "matTextareaAutosize" since all of its problems solved, use [matTextareaAutosize] without any vertical padding on the textarea itself',"(Angular Material) Increased default MatDialog border radius to 16px for better consistency","(apps/ecommerce) Small tweaks and improvements","(apps/mailbox) Small tweaks and improvements",'(angular.json) Removed "e2e" entry, fixed the styles file path for "test"',"(dependencies) Updated Angular, Angular Material & various other packages"]},{type:"Fixed",list:["(Angular Material) Density setting is not being applied correctly on Dark themes"]}]},{version:"v13.0.2",releaseDate:"May 24, 2021",changes:[{type:"Changed",list:["(mockApi) Removed typings from data files","(apps/ecommerce/inventory) Performance improvements, decreased the mockApi delay","(pages/settings) Fixed: Settings container component width is not filling the container"]}]},{version:"v13.0.1",releaseDate:"May 21, 2021",changes:[{type:"Added",list:["(i18n) Added multi language support using @ngneat/transloco","(pages) Added Activities page (timeline)",'(KiyaNavigation) Added support for new "isActiveMatchOptions" for Basic navigation items; https://github.com/angular/angular/pull/40303']},{type:"Changed",list:["(dependencies) Updated various packages to their latest versions","(tailwind) Use TAILWIND_MODE environment variable to activate purge on build","(overrides/angular-material) Changed the text and arrow color of mat-select on focus when it's used as a prefix or suffix in mat-form-field","(overrides/angular-material) Use @apply whenever it's possible","(eslint) Removed e2e tsconfig path as there is no default e2e solution included into Angular since v12.0.0","(eslint) Activated explicit return types on functions and methods",'(core) Separated the "auth" and "icon registry" to their own modules to keep the CoreModule simple','(KiyaNavigation) Added a generic return type for "getComponent" method on KiyaNavigationService','(KiyaNavigation) Use the generic return type for "getComponent"',"(kiya) Fixed barrel exports","(layout/common) Added trackBy functions to ngFor loops in common components","(docs) Updated docs"]}]},{version:"v13.0.0",releaseDate:"May 15, 2021",changes:[{type:"Added",list:["(pages/settings) New Settings page",'(support) "_redirects" file for Netlify support']},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v12.0.0","(dependencies) Updated various other packages","(linting) Migrated over to the ESLint",'(routing) Use "corrected" behavior for relative link resolution (https://github.com/angular/angular/pull/22394) as it\'s the default value starting from Angular v11 (https://github.com/angular/angular/pull/25609)',"(refactoring) Moved *ngFor directives to their separate <ng-container> element","(apps/ecommerce) Tweaked the hover color on inventory list for better consistency","(apps/chat) Tweaked the hover color on lists for better consistency","(apps/contacts) Tweaked the hover color on contact list for better consistency","(apps/tasks) Visual improvements"]}]},{version:"v12.3.0",releaseDate:"May 07, 2021",changes:[{type:"Added",list:["(apps/notes) New Notes app","(kiya/masonry) Added a component for creating fast Masonry-like layouts"]},{type:"Changed",list:["(apps/tasks) Tweaked the hover color on tasks list for better consistency","(apps/mailbox) Adjusted the app title font size for better consistency","(apps/mailbox) Used shadow on threads for better consistency"]}]},{version:"v12.2.0",releaseDate:"May 01, 2021",changes:[{type:"Added",list:["(apps/chat) New and improvement version of Chat app","(kiya/fullscreen) Added fullscreen toggle component"]},{type:"Changed",list:["(dependencies) Updated Angular, Angular Material and various other packages","(apps/academy) Better error handling on courses that are not exist","(apps/academy) Added missing trackBy functions to ngFor loops","(apps/mailbox) Removed unused methods","(pages/pricing) Improved the spacing of the CTA section on all pricing pages"]}]},{version:"v12.1.0",releaseDate:"April 26, 2021",changes:[{type:"Added",list:["(apps/academy) New and improvement version of Academy app","(icons) Material Solid icons"]},{type:"Changed",list:["(dependencies) Updated Angular, Angular Material and various other packages","(icons) Updated Heroicons","(icons) Updated Material Icons","(apps/file-manager) Better grid for File Manager app","(layouts/classy) Removed footer for better 'classy' look"]},{type:"Fixed",list:["(apps/contacts) Clicking on the checkbox on Tag select panel acts weird"]}]},{version:"v12.0.0",releaseDate:"April 16, 2021",changes:[{type:"Added",list:["This is the new major version of the Kiya and it's completely different from previous versions with no upgrade path","This version requires a clean installation"]},{type:"Changed",list:["Improved the look and feel","Re-wrote the entire template from scratch using Tailwind","Removed 99% of the SCSS styles in favor of Tailwind","Integrated Angular Material theming with Tailwind"]}]}]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["changelog"]],decls:12,vars:1,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"prose","prose-sm","max-w-5xl"],[4,"ngFor","ngForOf"],[1,"mb-12","p-8","rounded-2xl","shadow","bg-card"],[1,"my-0"],[1,"font-semibold","text-md","text-secondary"],[1,"mt-6"],[1,"mt-8"],[1,"inline-flex","bg-default","rounded","px-3","py-1","text-secondary","font-bold"]],template:function(a,m){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),e._uU(5,"Documentation"),e.qZA()(),e.TgZ(6,"div",5)(7,"h2",6),e._uU(8," Changelog "),e.qZA()()()(),e.TgZ(9,"div",7)(10,"div",8),e.YNc(11,p,9,3,"ng-container",9),e.qZA()()()),2&a&&(e.xp6(11),e.Q6J("ngForOf",m.changelog))},directives:[d.sg],encapsulation:2,changeDetection:0}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(g),r.m]]}),t})()}}]);