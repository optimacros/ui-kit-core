import '../assets/index23.css';
var f = Object.defineProperty;
var k = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var c = (t, o, e) => (k(t, typeof o != "symbol" ? o + "" : o, e), e);
import { jsxs as x, jsx as i } from "react/jsx-runtime";
import { c as b } from "../index-DWRHnq8_.js";
import N, { Component as g } from "react";
import { Box as B } from "./Box.js";
import { m as E } from "../mergeStyle-CWZcmjsX.js";
import A from "../Ripple/index.js";
const y = "CheckBox-module__field__AC4eE", R = "CheckBox-module__check__AC4eE", T = "CheckBox-module__checked__AC4eE", j = "CheckBox-module__text__AC4eE", M = "CheckBox-module__disabled__AC4eE", S = "CheckBox-module__ripple__AC4eE", F = {
  field: y,
  check: R,
  checked: T,
  text: j,
  disabled: M,
  ripple: S
};
class H extends g {
  constructor(e) {
    super(e);
    c(this, "inputNode");
    c(this, "handleToggle", (e) => {
      e.pageX !== 0 && e.pageY !== 0 && this.blur(), !this.props.disabled && this.props.onChange && this.props.onChange(!this.props.checked, e);
    });
    this.inputNode = N.createRef();
  }
  render() {
    const {
      checked: e = !1,
      children: r,
      disabled: l = !1,
      label: p,
      name: d,
      style: a,
      onChange: L,
      onMouseEnter: h,
      onMouseLeave: n,
      theme: m,
      ...u
    } = this.props, s = E(m, F), _ = b(
      s.field,
      { [s.disabled]: this.props.disabled },
      this.props.className
    ), C = A({
      centered: !0,
      spread: 2.6
    })(B);
    return /* @__PURE__ */ x(
      "label",
      {
        "data-react-toolbox": "checkbox",
        className: _,
        onMouseEnter: h,
        onMouseLeave: n,
        onClick: this.props.onClick,
        children: [
          /* @__PURE__ */ i(
            "input",
            {
              ...u,
              defaultChecked: e,
              className: s.input,
              disabled: l,
              name: d,
              onClick: this.handleToggle,
              ref: this.inputNode,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ i(
            C,
            {
              checked: e,
              disabled: l,
              style: a,
              theme: s,
              rippleClassName: s.ripple
            }
          ),
          p && /* @__PURE__ */ i(
            "span",
            {
              "data-react-toolbox": "label",
              className: s.text,
              children: p
            }
          ),
          r
        ]
      }
    );
  }
  blur() {
    var e;
    this.inputNode && ((e = this.inputNode.current) == null || e.blur());
  }
  focus() {
    var e;
    this.inputNode && ((e = this.inputNode.current) == null || e.focus());
  }
}
export {
  H as CheckBoxComponent
};
