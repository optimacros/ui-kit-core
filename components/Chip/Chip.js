import '../assets/index15.css';
import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { c as h } from "../index-DWRHnq8_.js";
import _ from "react";
import { m as p } from "../mergeStyle-CWZcmjsX.js";
const u = "theme-module__chip__ZRdTy", C = "theme-module__avatar__ZRdTy", I = "theme-module__deleteIcon__ZRdTy", y = "theme-module__deleteX__ZRdTy", f = "theme-module__iconsContainer__ZRdTy", N = "theme-module__customIconsContainer__ZRdTy", R = "theme-module__children__ZRdTy", e = {
  chip: u,
  avatar: C,
  deleteIcon: I,
  deleteX: y,
  iconsContainer: f,
  customIconsContainer: N,
  children: R
};
class X extends _.Component {
  render() {
    const {
      children: o,
      className: i = "",
      deletable: n = !1,
      onDeleteClick: v,
      settingsDialog: s,
      theme: r,
      ...a
    } = this.props, c = p(r, e), m = typeof o == "string", d = h(
      c.chip,
      {
        [c.deletable]: n
      },
      i
    );
    return /* @__PURE__ */ l(
      "div",
      {
        ...a,
        "data-react-toolbox": "chip",
        className: d,
        children: [
          m ? /* @__PURE__ */ t("span", { children: o }) : o,
          /* @__PURE__ */ l("div", { className: e.iconsContainer, children: [
            s && /* @__PURE__ */ t("span", { className: e.customIconsContainer, children: s }),
            n && this.renderDeleteIcon()
          ] })
        ]
      }
    );
  }
  renderDeleteIcon() {
    return this.props.incomeDeleteIcon ? /* @__PURE__ */ t("span", { className: e.customIconsContainer, children: this.props.incomeDeleteIcon }) : /* @__PURE__ */ t(
      "svg",
      {
        viewBox: "0 0 40 40",
        className: e.deleteIcon,
        onClick: this.props.onDeleteClick,
        children: /* @__PURE__ */ t(
          "path",
          {
            className: e.deleteX,
            d: "M 12,12 L 28,28 M 28,12 L 12,28"
          }
        )
      }
    );
  }
}
export {
  X as Chip
};
