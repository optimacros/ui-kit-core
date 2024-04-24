import '../assets/index3.css';
import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { c as o } from "../index-DWRHnq8_.js";
import i from "react";
const c = "TextArea-module__Container__aY62U", u = "TextArea-module__Container__aY62U", d = "TextArea-module__Label__aY62U", m = "TextArea-module__Label__aY62U", p = "TextArea-module__Input__aY62U", x = "TextArea-module__Input__aY62U", A = "TextArea-module__Input_error__aY62U", T = "TextArea-module__Input_error__aY62U", I = "TextArea-module__FieldError__aY62U", U = "TextArea-module__FieldError__aY62U", e = {
  Container: c,
  container: u,
  Label: d,
  label: m,
  Input: p,
  input: x,
  Input_error: A,
  inputError: T,
  FieldError: I,
  fieldError: U
};
class C extends i.PureComponent {
  render() {
    const {
      error: r,
      label: a,
      ...n
    } = this.props, s = o(e.Container, this.props.classNameContainer), _ = o({
      [e.Input]: !0,
      [e.Input_error]: r
    }, this.props.className);
    return /* @__PURE__ */ l("div", { className: s, children: [
      a && /* @__PURE__ */ t("div", { className: e.Label, children: a }),
      /* @__PURE__ */ t(
        "textarea",
        {
          ...n,
          className: _
        }
      ),
      r && /* @__PURE__ */ t("div", { className: e.FieldError, children: r })
    ] });
  }
}
export {
  C as TextArea
};
