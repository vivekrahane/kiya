import { IsActiveMatchOptions } from '@angular/router';

export interface KiyaNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type:
        | 'aside'
        | 'basic'
        | 'collapsable'
        | 'divider'
        | 'group'
        | 'spacer';
    hidden?: (item: KiyaNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    externalLink?: boolean;
    target?:
        | '_blank'
        | '_self'
        | '_parent'
        | '_top'
        | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: KiyaNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: KiyaNavigationItem[];
    meta?: any;
}

export type KiyaVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type KiyaVerticalNavigationMode =
    | 'over'
    | 'side';

export type KiyaVerticalNavigationPosition =
    | 'left'
    | 'right';
