import '../assets/index27.css';
import { jsx as u } from "react/jsx-runtime";
import { c as d } from "../index-DWRHnq8_.js";
import a from "react";
import { IconButtonComponent as h } from "./IconButton.js";
import { m as t } from "../mergeStyle-CWZcmjsX.js";
import y from "../Ripple/index.js";
import { Tooltip as R } from "../Tooltip/Tooltip.js";
const S = "theme-module__button__SyR8T", T = "theme-module__rippleWrapper__SyR8T", f = "theme-module__squared__SyR8T", B = "theme-module__icon__SyR8T", I = "theme-module__solid__SyR8T", b = "theme-module__raised__SyR8T theme-module__button__SyR8T theme-module__squared__SyR8T theme-module__solid__SyR8T", g = "theme-module__flat__SyR8T theme-module__button__SyR8T theme-module__squared__SyR8T", C = "theme-module__floating__SyR8T theme-module__button__SyR8T theme-module__solid__SyR8T", K = "theme-module__mini__SyR8T", W = "theme-module__toggle__SyR8T theme-module__button__SyR8T", X = "theme-module__primary__SyR8T", q = "theme-module__accent__SyR8T", $ = "theme-module__neutral__SyR8T", v = "theme-module__inverse__SyR8T", x = {
  button: S,
  rippleWrapper: T,
  squared: f,
  icon: B,
  solid: I,
  raised: b,
  flat: g,
  floating: C,
  mini: K,
  toggle: W,
  primary: X,
  accent: q,
  neutral: $,
  inverse: v
}, N = "IconButton-module__IconButton__K9Xcn", O = "IconButton-module__IconButton__K9Xcn", P = "IconButton-module__icon__K9Xcn", k = "IconButton-module__rippleWrapper__K9Xcn", j = "IconButton-module__accent__K9Xcn", w = "IconButton-module__bordered__K9Xcn", D = {
  IconButton: N,
  iconButton: O,
  icon: P,
  rippleWrapper: k,
  accent: j,
  bordered: w
}, F = y({ centered: !0 })(h);
class V extends a.Component {
  render() {
    const {
      children: z,
      label: e,
      theme: _,
      tooltip: A,
      tooltipDelay: n,
      tooltipHideOnClick: m,
      tooltipPosition: l,
      tooltipShowOnClick: c,
      tooltipOffset: r,
      ...s
    } = this.props;
    let o = t(D, _);
    o = t(o, x);
    const i = d(o.IconButton, this.props.className), p = {
      ...s,
      theme: o,
      className: i,
      "data-label": e
    };
    return /* @__PURE__ */ u(
      R,
      {
        composedComponent: F,
        composedComponentProps: p,
        tooltip: this.props.label ?? this.props.tooltip,
        tooltipDelay: n,
        tooltipHideOnClick: m,
        tooltipPosition: l,
        tooltipShowOnClick: c,
        tooltipOffset: r,
        theme: o
      }
    );
  }
}
export {
  V as IconButton
};
