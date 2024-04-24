import '../assets/index2.css';
import { jsx as _ } from "react/jsx-runtime";
import { c as a } from "../index-DWRHnq8_.js";
import r from "react";
const t = "Toolbar-module__Toolbar__l0jBe", e = "Toolbar-module__Toolbar__l0jBe", n = "Toolbar-module__Toolbar__align_left__l0jBe", b = "Toolbar-module__Toolbar__align_left__l0jBe", i = "Toolbar-module__Toolbar__align_right__l0jBe", s = "Toolbar-module__Toolbar__align_right__l0jBe", T = "Toolbar-module__Toolbar__align_center__l0jBe", g = "Toolbar-module__Toolbar__align_center__l0jBe", m = "Toolbar-module__Toolbar__align_rightInRow__l0jBe", c = "Toolbar-module__Toolbar__align_rightInRow__l0jBe", h = "Toolbar-module__Toolbar__small__l0jBe", d = "Toolbar-module__Toolbar__small__l0jBe", o = {
  Toolbar: t,
  toolbar: e,
  Toolbar__align_left: n,
  toolbarAlignLeft: b,
  Toolbar__align_right: i,
  toolbarAlignRight: s,
  Toolbar__align_center: T,
  toolbarAlignCenter: g,
  Toolbar__align_rightInRow: m,
  toolbarAlignRightInRow: c,
  Toolbar__small: h,
  toolbarSmall: d
};
class B extends r.PureComponent {
  render() {
    const l = a(
      {
        [o.Toolbar]: !0,
        [o.Toolbar__small]: this.props.small ?? !1,
        [o[`Toolbar__align_${this.props.align}`]]: this.props.align ?? "left"
      },
      this.props.className
    );
    return /* @__PURE__ */ _("div", { className: l, children: this.props.children });
  }
}
export {
  B as Toolbar
};
