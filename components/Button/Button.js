var j = Object.defineProperty;
var k = (r, o, e) => o in r ? j(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e;
var s = (r, o, e) => (k(r, typeof o != "symbol" ? o + "" : o, e), e);
import { jsx as p } from "react/jsx-runtime";
import { c as z } from "../index-DWRHnq8_.js";
import l, { Component as B } from "react";
import { FontIcon as F } from "../FontIcon/FontIcon.js";
class Q extends B {
  constructor(e) {
    super(e);
    s(this, "buttonNode");
    s(this, "getLevel", () => this.props.primary ? "primary" : this.props.accent ? "accent" : this.props.bordered ? "bordered" : "neutral");
    s(this, "getShape", () => this.props.raised ? "raised" : this.props.floating ? "floating" : "flat");
    s(this, "handleMouseUp", (e) => {
      this.buttonNode.current && this.buttonNode.current.blur(), this.props.onMouseUp && this.props.onMouseUp(e);
    });
    s(this, "handleMouseLeave", (e) => {
      this.buttonNode.current && this.buttonNode.current.blur(), this.props.onMouseLeave && this.props.onMouseLeave(e);
    });
    this.buttonNode = l.createRef();
  }
  render() {
    const {
      className: e = "",
      type: c = "button",
      label: h,
      icon: a,
      href: n,
      theme: t,
      inverse: d,
      mini: f = !1,
      neutral: m = !0,
      uppercase: b = !1,
      gray: g = !1,
      warning: v = !1,
      buttonColor: M,
      fontSize: N,
      fontColor: y,
      children: L,
      accent: I,
      primary: P,
      bordered: q,
      floating: A,
      raised: D,
      ...C
    } = this.props, U = n ? "a" : "button", x = this.getLevel(), E = this.getShape(), i = {
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave
    }, S = z(
      t.button,
      [t[E]],
      {
        [t[x]]: m,
        [t.mini]: f,
        [t.inverse]: d,
        [t.button_uppercase]: b,
        [t.gray]: g,
        [t.warning]: v
      },
      e
    ), _ = {
      backgroundColor: M,
      color: y,
      fontSize: N
    }, w = {
      ...C,
      ...i,
      href: n,
      ref: this.buttonNode,
      className: S,
      type: n ? null : c,
      "data-react-toolbox": "button",
      style: _
    }, R = a ? /* @__PURE__ */ p(
      F,
      {
        className: t.icon,
        value: a
      }
    ) : null, u = l.createElement(U, w, R, h, L);
    return this.props.onMouseEnter && this.props.disabled ? /* @__PURE__ */ p("span", { ...i, children: u }) : u;
  }
}
export {
  Q as ButtonComponent
};
