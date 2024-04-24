import { default as BaseReactModal } from 'react-modal';
import { default as React } from 'react';

declare const ReactModal: (props: BaseReactModal.Props & {
    testMode?: boolean;
}) => React.JSX.Element;
export default ReactModal;
