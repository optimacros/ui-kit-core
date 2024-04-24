import '../assets/index22.css';
var R = Object.defineProperty;
var w = (p, n, t) => n in p ? R(p, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[n] = t;
var l = (p, n, t) => (w(p, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as g } from "react/jsx-runtime";
import { c as N } from "../index-DWRHnq8_.js";
import v, { Component as I } from "react";
import { createPortal as M } from "react-dom";
import { m as A } from "../mergeStyle-CWZcmjsX.js";
import { e as u } from "../events-CBrNWrpo.js";
import { g as C } from "../utils-C_7PwjZI.js";
const B = "theme-module__tooltip__Og0iC", k = "theme-module__tooltipActive__Og0iC", b = "theme-module__tooltipTop__Og0iC", y = "theme-module__tooltipLeft__Og0iC", S = "theme-module__tooltipRight__Og0iC", H = "theme-module__tooltipInner__Og0iC", x = "theme-module__tooltipBottom__Og0iC", V = {
  tooltip: B,
  tooltipActive: k,
  tooltipTop: b,
  tooltipLeft: y,
  tooltipRight: S,
  tooltipInner: H,
  tooltipBottom: x
}, i = {
  BOTTOM: "bottom",
  HORIZONTAL: "horizontal",
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  VERTICAL: "vertical"
};
class et extends I {
  constructor(t) {
    super(t);
    l(this, "tooltipNode");
    l(this, "timeout");
    l(this, "state", {
      active: !1,
      position: this.props.tooltipPosition ?? i.VERTICAL,
      visible: !1,
      top: 0,
      left: 0
    });
    l(this, "onTransformEnd", (t) => {
      t.propertyName === "transform" && (u.removeEventListenerOnTransitionEnded(this.tooltipNode.current, this.onTransformEnd), this.setState({ visible: !1 }));
    });
    l(this, "handleMouseEnter", (t) => {
      this.activate(this.calculatePosition(t.currentTarget)), this.props.onMouseEnter && this.props.onMouseEnter(t);
    });
    l(this, "handleMouseLeave", (t) => {
      this.deactivate(), this.props.onMouseLeave && this.props.onMouseLeave(t);
    });
    l(this, "handleClick", (t) => {
      (this.props.tooltipHideOnClick ?? !0) && this.state.active && this.deactivate(), (this.props.tooltipShowOnClick ?? !1) && !this.state.active && this.activate(this.calculatePosition(t.currentTarget)), this.props.onClick && this.props.onClick(t);
    });
    this.tooltipNode = v.createRef();
  }
  componentWillUnmount() {
    this.tooltipNode.current && u.removeEventListenerOnTransitionEnded(this.tooltipNode.current, this.onTransformEnd), this.timeout && clearTimeout(this.timeout);
  }
  render() {
    const {
      active: t,
      left: o,
      top: e,
      position: s,
      visible: r
    } = this.state, a = `tooltip${s.charAt(0).toUpperCase() + s.slice(1)}`, {
      children: c,
      className: h,
      theme: f,
      onClick: F,
      onMouseEnter: G,
      onMouseLeave: D,
      tooltip: d,
      tooltipDelay: U,
      tooltipHideOnClick: X,
      tooltipPosition: Y,
      tooltipShowOnClick: Z,
      composedComponent: T,
      composedComponentProps: _,
      tooltipOffset: j,
      ...E
    } = this.props, m = A(V, f), L = N(m.tooltip, {
      [m.tooltipActive]: t,
      [m[a]]: m[a]
    }), O = {
      ...E,
      className: h,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave
    }, P = typeof T != "string" ? { ...O, theme: m } : O;
    return v.createElement(
      T,
      { ...P, ..._ },
      c,
      r && !!d && M(
        /* @__PURE__ */ g(
          "span",
          {
            ref: this.tooltipNode,
            className: L,
            "data-react-toolbox": "tooltip",
            style: { top: e, left: o },
            children: /* @__PURE__ */ g("span", { className: m.tooltipInner, children: d })
          }
        ),
        document.body
      )
    );
  }
  getPosition(t) {
    const o = this.props.tooltipPosition ?? i.VERTICAL;
    if (o === i.HORIZONTAL) {
      const e = t.getBoundingClientRect(), { width: s } = C();
      return e.left < s / 2 - e.width / 2 ? i.RIGHT : i.LEFT;
    }
    if (o === i.VERTICAL) {
      const e = t.getBoundingClientRect(), { height: s } = C();
      return e.top < s / 2 - e.height / 2 ? i.BOTTOM : i.TOP;
    }
    return o;
  }
  activate({ top: t, left: o, position: e }) {
    this.timeout && clearTimeout(this.timeout), this.setState({ visible: !0, position: e }), this.timeout = setTimeout(() => {
      this.setState({ active: !0, top: t, left: o });
    }, this.props.tooltipDelay ?? 0);
  }
  deactivate() {
    this.timeout && clearTimeout(this.timeout), this.state.active ? (u.addEventListenerOnTransitionEnded(this.tooltipNode.current, this.onTransformEnd), this.setState({ active: !1 })) : this.state.visible && this.setState({ visible: !1 });
  }
  calculatePosition(t) {
    const o = this.getPosition(t), { top: e, left: s, height: r, width: a } = t.getBoundingClientRect(), c = window.scrollX || window.pageXOffset, h = window.scrollY || window.pageYOffset, f = this.props.tooltipOffset || 0;
    switch (o) {
      case i.BOTTOM:
        return {
          top: e + r + h,
          left: s + a / 2 + c + f,
          position: o
        };
      case i.TOP:
        return {
          top: e + h,
          left: s + a / 2 + c + f,
          position: o
        };
      case i.LEFT:
        return {
          top: e + r / 2 + h,
          left: s + c,
          position: o
        };
      case i.RIGHT:
        return {
          top: e + r / 2 + h,
          left: s + a + c,
          position: o
        };
      default:
        return {
          top: 0,
          left: 0,
          position: o
        };
    }
  }
}
export {
  et as Tooltip
};
