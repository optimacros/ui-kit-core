import { isNull } from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

type Props = {
    className?: string;
    style?: React.CSSProperties;
}

class Portal extends Component<React.PropsWithChildren<Props>> {
    private overlayTarget: HTMLElement | null = null

    private portalContainerNode: HTMLElement | null = document.body

    componentDidMount(): void {
        this.renderOverlay()
    }

    componentDidUpdate(): void {
        this.renderOverlay()
    }

    componentWillUnmount(): void {
        this.unrenderOverlay()
        this.unmountOverlayTarget()
    }

    render(): null {
        return null
    }

    private renderOverlay(): void {
        const overlay = this.getOverlay()

        if (!isNull(overlay)) {
            this.mountOverlayTarget()

            if (!isNull(this.overlayTarget)) {
                ReactDOM.unstable_renderSubtreeIntoContainer(
                    this, overlay, this.overlayTarget,
                )
            }
        } else {
            this.unrenderOverlay()
            this.unmountOverlayTarget()
        }
    }

    private getOverlay(): null | React.JSX.Element {
        if (!this.props.children) {
            return null
        }

        return (
            <div
                className={this.props.className}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }

    private unrenderOverlay(): void {
        if (this.overlayTarget) {
            // eslint-disable-next-line react/no-deprecated
            ReactDOM.unmountComponentAtNode(this.overlayTarget)
        }
    }

    private mountOverlayTarget(): void {
        if (!this.overlayTarget) {
            this.overlayTarget = document.createElement('div')

            this.portalContainerNode?.appendChild(this.overlayTarget)
        }
    }

    private unmountOverlayTarget(): void {
        if (this.overlayTarget) {
            this.portalContainerNode?.removeChild(this.overlayTarget)
            this.overlayTarget = null
        }
        this.portalContainerNode = null
    }
}

export default Portal
