import '../assets/index14.css';
import { jsx as c } from "react/jsx-runtime";
import d from "react";
import { CheckBoxComponent as m } from "./CheckBox.js";
import { m as i } from "../mergeStyle-CWZcmjsX.js";
import { Tooltip as s } from "../Tooltip/Tooltip.js";
const r = "theme-module__field__ycGJx", x = "theme-module__ripple__ycGJx", k = "theme-module__text__ycGJx", a = "theme-module__input__ycGJx", u = "theme-module__check__ycGJx", y = "theme-module__checked__ycGJx", f = "theme-module__checkmark-expand__ycGJx", G = "theme-module__disabled__ycGJx", J = {
  field: r,
  ripple: x,
  text: k,
  input: a,
  check: u,
  checked: y,
  "checkmark-expand": "theme-module__checkmark-expand__ycGJx",
  checkmarkExpand: f,
  disabled: G
};
class T extends d.Component {
  render() {
    const {
      tooltipLabel: t,
      theme: b,
      tooltipDelay: p,
      tooltipHideOnClick: _,
      tooltipPosition: l,
      tooltipShowOnClick: h,
      tooltipOffset: n,
      ...o
    } = this.props, e = i(J, this.props.theme);
    return t ? /* @__PURE__ */ c(
      s,
      {
        tooltip: t,
        theme: e,
        tooltipDelay: p,
        tooltipHideOnClick: _,
        tooltipPosition: l,
        tooltipShowOnClick: h,
        tooltipOffset: n,
        composedComponent: m,
        composedComponentProps: { ...o, theme: e }
      }
    ) : /* @__PURE__ */ c(
      m,
      {
        ...o,
        theme: e
      }
    );
  }
}
export {
  T as CheckBox
};
