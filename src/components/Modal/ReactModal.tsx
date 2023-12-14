import React from 'react'
import BaseReactModal from 'react-modal'

const ReactModal = (props: BaseReactModal.Props & { testMode?: boolean }): React.ReactElement => {
    if (props.testMode) {
        return <div className="ReactModalRootContainer">{props.children}</div>
    }

    return <BaseReactModal {...props} />
}

export default ReactModal
