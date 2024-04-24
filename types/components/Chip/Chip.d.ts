import { default as React } from 'react';

type Theme = {
    avatar: string;
    chip: string;
    deletable: string;
    delete: string;
    deleteIcon: string;
    deleteX: string;
};
type Props = {
    className: string;
    deletable: boolean;
    onDeleteClick: React.MouseEventHandler<SVGSVGElement>;
    theme: Partial<Theme>;
    settingsDialog: React.JSX.Element;
    incomeDeleteIcon: React.JSX.Element;
};
export declare class Chip extends React.Component<React.PropsWithChildren<Partial<Props>>> {
    render(): React.JSX.Element;
    renderDeleteIcon(): React.JSX.Element;
}
export {};
