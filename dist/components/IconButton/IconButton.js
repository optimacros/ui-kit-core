var N = Object.defineProperty;
var L = (s, t, e) => t in s ? N(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => (L(s, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as y } from "react/jsx-runtime";
import { c as g } from "../index-DWRHnq8_.js";
import u, { Component as U } from "react";
import { FontIcon as x } from "../FontIcon/FontIcon.js";
class k extends U {
  constructor(e) {
    super(e);
    r(this, "buttonNode");
    r(this, "getLevel", () => this.props.primary ? "primary" : this.props.accent ? "accent" : this.props.bordered ? "bordered" : "neutral");
    r(this, "handleMouseUp", (e) => {
      var o;
      (o = this.buttonNode.current) == null || o.blur(), this.props.onMouseUp && this.props.onMouseUp(e);
    });
    r(this, "handleMouseLeave", (e) => {
      var o;
      (o = this.buttonNode.current) == null || o.blur(), this.props.onMouseLeave && this.props.onMouseLeave(e);
    });
    this.buttonNode = u.createRef();
  }
  render() {
    const {
      inverse: e = !1,
      neutral: o = !0,
      disabled: i = !1,
      type: c = "button",
      accent: C,
      children: l,
      className: h = "",
      href: p,
      icon: n,
      primary: E,
      theme: a,
      bordered: I,
      ...d
    } = this.props, m = p ? "a" : "button", f = this.getLevel(), b = g(
      [a.toggle],
      {
        [a[f]]: o,
        [a.inverse]: e
      },
      h
    ), v = {
      ...d,
      href: p,
      ref: this.buttonNode,
      className: b,
      disabled: i,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: p ? null : c,
      "data-react-toolbox": "button"
    }, M = typeof n == "string" ? /* @__PURE__ */ y(
      x,
      {
        className: a.icon,
        value: n
      }
    ) : n;
    return u.createElement(m, v, n && M, l);
  }
}
export {
  k as IconButtonComponent
};
