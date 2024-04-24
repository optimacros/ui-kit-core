import { default as React } from 'react';

type Props = {
    label: string;
    onClick?: () => void;
    href?: string;
    className?: string;
    icon?: string;
};
export declare const HeaderUserMenuElement: (props: React.PropsWithChildren<Props>) => React.JSX.Element;
export {};
