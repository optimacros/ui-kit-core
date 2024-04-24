import { default as React } from 'react';

type Props = {
    className?: string;
    align?: 'right' | 'center' | 'left' | 'rightInRow';
    small?: boolean;
};
export declare class Toolbar extends React.PureComponent<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element;
}
export {};
