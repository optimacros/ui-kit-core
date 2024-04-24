import '../assets/index11.css';
var g = Object.defineProperty;
var m = (r, o, t) => o in r ? g(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var n = (r, o, t) => (m(r, typeof o != "symbol" ? o + "" : o, t), t);
import { jsx as u } from "react/jsx-runtime";
import { l } from "../lodash-IPxMcogW.js";
import { Component as c } from "react";
const h = "DraggableModalContainer-module__Container__rZXgU", v = "DraggableModalContainer-module__Container__rZXgU", D = {
  Container: h,
  container: v
};
class x extends c {
  constructor(t) {
    super(t);
    n(this, "containerNode", null);
    n(this, "targetNodes", null);
    n(this, "startDrag", (t) => {
      this.targetNodes || this.setTargetNode(), this.hasClickedOnTheCurrentElement(t.target) && this.setState({
        isDragging: !0,
        startDragPosition: {
          x: t.x,
          y: t.y
        }
      });
    });
    n(this, "move", (t) => {
      this.state.isDragging && this.setState((e) => {
        var s, i;
        const a = e.currentPosition.x + (t.x - (((s = e.startDragPosition) == null ? void 0 : s.x) ?? 0)), d = e.currentPosition.y + (t.y - (((i = e.startDragPosition) == null ? void 0 : i.y) ?? 0));
        return {
          movePosition: {
            x: a,
            y: d
          }
        };
      });
    });
    n(this, "endDrag", () => {
      this.state.isDragging && this.setState((t) => ({
        isDragging: !1,
        currentPosition: t.movePosition
      }));
    });
    n(this, "setContainerNode", (t) => {
      this.containerNode = t;
    });
    document.addEventListener("mousedown", this.startDrag), document.addEventListener("mousemove", this.move), document.addEventListener("mouseup", this.endDrag), this.state = {
      isDragging: !1,
      currentPosition: {
        x: 0,
        y: 0
      },
      movePosition: {
        x: 0,
        y: 0
      }
    };
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.startDrag), document.removeEventListener("mousemove", this.move), document.removeEventListener("mouseup", this.endDrag);
  }
  render() {
    const t = {
      top: this.state.movePosition.y,
      left: this.state.movePosition.x
    };
    return /* @__PURE__ */ u(
      "div",
      {
        ref: this.setContainerNode,
        className: D.Container,
        style: t,
        children: this.props.children
      }
    );
  }
  hasClickedOnTheCurrentElement(t) {
    let e = t;
    for (; e; ) {
      if (l.includes(this.targetNodes, e))
        return !0;
      e = e.parentNode;
    }
    return !1;
  }
  setTargetNode() {
    this.containerNode && (this.targetNodes = this.containerNode.querySelectorAll(this.props.draggableTarget));
  }
}
export {
  x as default
};
