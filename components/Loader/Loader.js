import '../assets/index12.css';
var p = Object.defineProperty;
var f = (t, r, e) => r in t ? p(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var s = (t, r, e) => (f(t, typeof r != "symbol" ? r + "" : r, e), e);
import { jsx as i, jsxs as v } from "react/jsx-runtime";
import { c as b } from "../index-DWRHnq8_.js";
import { Component as C } from "react";
import { m as w } from "../mergeStyle-CWZcmjsX.js";
import { p as c } from "../prefixer-DdK5skfq.js";
const x = "theme-module__linear__KCYvw", K = "theme-module__indeterminate__KCYvw", Y = "theme-module__value__KCYvw", y = "theme-module__linear-indeterminate-bar__KCYvw", N = "theme-module__buffer__KCYvw", B = "theme-module__circular__KCYvw", I = "theme-module__circle__KCYvw", R = "theme-module__circular-indeterminate-bar-rotate__KCYvw", S = "theme-module__path__KCYvw", g = "theme-module__circular-indeterminate-bar-dash__KCYvw", D = "theme-module__multicolor__KCYvw", L = "theme-module__colors__KCYvw", $ = {
  linear: x,
  indeterminate: K,
  value: Y,
  "linear-indeterminate-bar": "theme-module__linear-indeterminate-bar__KCYvw",
  linearIndeterminateBar: y,
  buffer: N,
  circular: B,
  circle: I,
  "circular-indeterminate-bar-rotate": "theme-module__circular-indeterminate-bar-rotate__KCYvw",
  circularIndeterminateBarRotate: R,
  path: S,
  "circular-indeterminate-bar-dash": "theme-module__circular-indeterminate-bar-dash__KCYvw",
  circularIndeterminateBarDash: g,
  multicolor: D,
  colors: L
};
class q extends C {
  constructor() {
    super(...arguments);
    s(this, "min", 0);
    s(this, "max", 100);
  }
  render() {
    this.props.min && (this.min = this.props.min), this.props.max && (this.max = this.props.max);
    const {
      className: e = "",
      mode: n = "indeterminate",
      multicolor: l = !1,
      type: m = "linear",
      theme: o,
      value: u = 0,
      innerRef: d,
      disabled: _
    } = this.props, a = w(o, $), h = b(
      a[m],
      {
        [a.indeterminate]: n === "indeterminate",
        [a.multicolor]: l
      },
      e
    );
    return /* @__PURE__ */ i(
      "div",
      {
        ref: d,
        "data-disabled": _,
        "data-react-toolbox": "progress-bar",
        "aria-valuenow": u,
        "aria-valuemin": this.min,
        "aria-valuemax": this.max,
        className: h,
        children: m === "circular" ? this.renderCircular(a) : this.renderLinear(a)
      }
    );
  }
  renderCircular(e) {
    return /* @__PURE__ */ i(
      "svg",
      {
        className: e.circle,
        viewBox: "0 0 60 60",
        children: /* @__PURE__ */ i(
          "circle",
          {
            className: e.path,
            style: this.circularStyle(),
            cx: "30",
            cy: "30",
            r: "25"
          }
        )
      }
    );
  }
  renderLinear(e) {
    const { buffer: n = 0, value: l } = this.linearStyle();
    return /* @__PURE__ */ v("div", { children: [
      /* @__PURE__ */ i(
        "span",
        {
          "data-ref": "buffer",
          className: e.buffer,
          style: n
        }
      ),
      /* @__PURE__ */ i(
        "span",
        {
          "data-ref": "value",
          className: e.value,
          style: l
        }
      )
    ] });
  }
  calculateRatio(e) {
    return e < this.min ? 0 : e > this.max ? 1 : (e - this.min) / (this.max - this.min);
  }
  circularStyle() {
    if (this.props.mode !== "indeterminate")
      return {
        strokeDasharray: `${2 * Math.PI * 25 * this.calculateRatio(this.props.value ?? 0)}, 400`
      };
  }
  linearStyle() {
    return this.props.mode !== "indeterminate" ? {
      buffer: c({ transform: `scaleX(${this.calculateRatio(this.props.buffer ?? 0)})` }),
      value: c({ transform: `scaleX(${this.calculateRatio(this.props.value ?? 0)})` })
    } : {};
  }
}
export {
  q as Loader
};
