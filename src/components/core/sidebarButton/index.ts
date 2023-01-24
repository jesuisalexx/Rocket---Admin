import { RouteLocationRaw } from 'vue-router';

export enum SidebarButtonType {
    LINK = 'link',
    BUTTON = 'button',
}

export type SidebarButton = {
    type: SidebarButtonType,
    label: string,
    to?: RouteLocationRaw,
    onClick?: () => void,
    counter?: number
    iconBefore?: string,
    iconAfter?: string,
}
