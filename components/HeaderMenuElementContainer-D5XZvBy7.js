import './assets/index24.css';
var i = Object.defineProperty;
var d = (t, e, n) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var a = (t, e, n) => (d(t, typeof e != "symbol" ? e + "" : e, n), n);
import { jsxs as M, jsx as o } from "react/jsx-runtime";
import { c as I } from "./index-DWRHnq8_.js";
import { l as E } from "./lodash-IPxMcogW.js";
import { o as H } from "./mobxreact.esm-CHzN8Djf.js";
import p from "react";
import { Icon as c } from "./Icon/Icon.js";
const z = "HeaderMenu-module__Container__93rBz", B = "HeaderMenu-module__Container__93rBz", C = "HeaderMenu-module__Container_special__93rBz", h = "HeaderMenu-module__Container_special__93rBz", b = "HeaderMenu-module__Menu__93rBz", w = "HeaderMenu-module__Menu__93rBz", S = "HeaderMenu-module__MenuItem__93rBz", f = "HeaderMenu-module__MenuItem__93rBz", v = "HeaderMenu-module__Element__93rBz", A = "HeaderMenu-module__Element__93rBz", L = "HeaderMenu-module__Element_Title__93rBz", T = "HeaderMenu-module__Element_Title__93rBz", x = "HeaderMenu-module__SubMenu__93rBz", N = "HeaderMenu-module__SubMenu__93rBz", P = "HeaderMenu-module__SubMenuScrollList__93rBz", j = "HeaderMenu-module__SubMenuScrollList__93rBz", D = "HeaderMenu-module__MenuItem__disabled__93rBz", O = "HeaderMenu-module__MenuItem__disabled__93rBz", y = "HeaderMenu-module__MenuItem_parent__93rBz", W = "HeaderMenu-module__MenuItem_parent__93rBz", g = "HeaderMenu-module__MenuItem_child__93rBz", F = "HeaderMenu-module__MenuItem_child__93rBz", R = "HeaderMenu-module__Element_IconContainer__93rBz", q = "HeaderMenu-module__Element_IconContainer__93rBz", G = "HeaderMenu-module__Element_Icon__93rBz", J = "HeaderMenu-module__Element_Icon__93rBz", K = "HeaderMenu-module__ElementContainer__93rBz", Q = "HeaderMenu-module__ElementContainer__93rBz", U = "HeaderMenu-module__Element_Arrow__93rBz", V = "HeaderMenu-module__Element_Arrow__93rBz", X = "HeaderMenu-module__Element_withIcon__93rBz", Y = "HeaderMenu-module__Element_withIcon__93rBz", r = {
  Container: z,
  container: B,
  Container_special: C,
  containerSpecial: h,
  Menu: b,
  menu: w,
  MenuItem: S,
  menuItem: f,
  Element: v,
  element: A,
  Element_Title: L,
  elementTitle: T,
  SubMenu: x,
  subMenu: N,
  SubMenuScrollList: P,
  subMenuScrollList: j,
  MenuItem__disabled: D,
  menuItemDisabled: O,
  MenuItem_parent: y,
  menuItemParent: W,
  MenuItem_child: g,
  menuItemChild: F,
  Element_IconContainer: R,
  elementIconContainer: q,
  Element_Icon: G,
  elementIcon: J,
  ElementContainer: K,
  elementContainer: Q,
  Element_Arrow: U,
  elementArrow: V,
  Element_withIcon: X,
  elementWithIcon: Y
};
var Z = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, k = (t, e, n, l) => {
  for (var _ = l > 1 ? void 0 : l ? $(e, n) : e, m = t.length - 1, u; m >= 0; m--)
    (u = t[m]) && (_ = (l ? u(e, n, _) : u(_)) || _);
  return l && _ && Z(e, n, _), _;
};
let s = class extends p.Component {
  constructor() {
    super(...arguments);
    a(this, "onClick", () => {
      const { element: e } = this.props;
      !e.disabled && e.open && e.open();
    });
  }
  render() {
    const { element: e } = this.props, n = I({
      [r.Element]: !0,
      [r.Element_withIcon]: !!e.icon,
      [r.ElementContainer]: !0
    });
    return /* @__PURE__ */ M(
      "div",
      {
        role: "none",
        className: n,
        onClick: this.onClick,
        children: [
          this.renderIcon(e),
          /* @__PURE__ */ o("div", { className: r.Element_Title, children: e.title }),
          this.renderArrowIcon()
        ]
      }
    );
  }
  renderIcon(e) {
    return e.icon ? /* @__PURE__ */ o("div", { className: r.Element_IconContainer, children: /* @__PURE__ */ o(
      c,
      {
        className: r.Element_Icon,
        value: e.icon
      }
    ) }) : null;
  }
  renderArrowIcon() {
    const { element: e, isFirstLevel: n } = this.props;
    return n || E.isEmpty(e.children) || e.disabled ? null : /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
      c,
      {
        className: r.Element_Arrow,
        value: "navigate_next"
      }
    ) });
  }
};
s = k([
  H
], s);
export {
  s as H,
  r as s
};
