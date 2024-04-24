import '../assets/index28.css';
import { jsx as o } from "react/jsx-runtime";
import { Component as _ } from "react";
import { ButtonComponent as n } from "./Button.js";
import { m as e } from "../mergeStyle-CWZcmjsX.js";
import u from "../Ripple/index.js";
const m = "ButtonTheme-module__button__8DFSF", r = "ButtonTheme-module__rippleWrapper__8DFSF", l = "ButtonTheme-module__squared__8DFSF", s = "ButtonTheme-module__icon__8DFSF", i = "ButtonTheme-module__solid__8DFSF", d = "ButtonTheme-module__raised__8DFSF ButtonTheme-module__button__8DFSF ButtonTheme-module__squared__8DFSF ButtonTheme-module__solid__8DFSF", c = "ButtonTheme-module__flat__8DFSF ButtonTheme-module__button__8DFSF ButtonTheme-module__squared__8DFSF", a = "ButtonTheme-module__floating__8DFSF ButtonTheme-module__button__8DFSF ButtonTheme-module__solid__8DFSF", p = "ButtonTheme-module__mini__8DFSF", F = "ButtonTheme-module__toggle__8DFSF ButtonTheme-module__button__8DFSF", h = "ButtonTheme-module__primary__8DFSF", B = "ButtonTheme-module__accent__8DFSF", S = "ButtonTheme-module__neutral__8DFSF", D = "ButtonTheme-module__inverse__8DFSF", T = {
  button: m,
  rippleWrapper: r,
  squared: l,
  icon: s,
  solid: i,
  raised: d,
  flat: c,
  floating: a,
  mini: p,
  toggle: F,
  primary: h,
  accent: B,
  neutral: S,
  inverse: D
}, b = "Button-module__button__VhNOi", g = "Button-module__button_uppercase__VhNOi", f = "Button-module__button_uppercase__VhNOi", y = "Button-module__icon__VhNOi", N = "Button-module__neutral__VhNOi", O = "Button-module__flat__VhNOi", V = "Button-module__warning__VhNOi", $ = "Button-module__gray__VhNOi", q = "Button-module__accent__VhNOi", v = "Button-module__bordered__VhNOi", w = "Button-module__primary__VhNOi", x = {
  button: b,
  button_uppercase: g,
  buttonUppercase: f,
  icon: y,
  neutral: N,
  flat: O,
  warning: V,
  gray: $,
  accent: q,
  bordered: v,
  primary: w
}, W = u({ centered: !1 })(n);
class A extends _ {
  render() {
    let t = e(x, this.props.theme);
    return t = e(t, T), /* @__PURE__ */ o(
      W,
      {
        ...this.props,
        theme: t
      }
    );
  }
}
export {
  A as Button
};
