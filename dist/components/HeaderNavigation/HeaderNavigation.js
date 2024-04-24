import '../assets/index19.css';
import { jsx as n, jsxs as t } from "react/jsx-runtime";
import { Component as o } from "react";
import { Icon as i } from "../Icon/Icon.js";
const l = "HeaderNavigation-module__Container__j2iCj", a = "HeaderNavigation-module__Container__j2iCj", _ = "HeaderNavigation-module__Element__j2iCj", m = "HeaderNavigation-module__Element__j2iCj", r = "HeaderNavigation-module__Element_IconContainer__j2iCj", c = "HeaderNavigation-module__Element_IconContainer__j2iCj", s = "HeaderNavigation-module__Element_Icon__j2iCj", d = "HeaderNavigation-module__Element_Icon__j2iCj", C = "HeaderNavigation-module__Element_Title__j2iCj", j = "HeaderNavigation-module__Element_Title__j2iCj", e = {
  Container: l,
  container: a,
  Element: _,
  element: m,
  Element_IconContainer: r,
  elementIconContainer: c,
  Element_Icon: s,
  elementIcon: d,
  Element_Title: C,
  elementTitle: j
};
class u extends o {
  render() {
    return /* @__PURE__ */ n(
      "div",
      {
        role: "none",
        className: e.Container,
        onClick: this.props.onClick,
        title: this.props.title,
        children: /* @__PURE__ */ t("div", { className: e.Element, children: [
          /* @__PURE__ */ n("div", { className: e.Element_IconContainer, children: /* @__PURE__ */ n(
            i,
            {
              className: e.Element_Icon,
              value: "menu"
            }
          ) }),
          /* @__PURE__ */ n("div", { className: e.Element_Title, children: this.props.title })
        ] })
      }
    );
  }
}
export {
  u as HeaderNavigation
};
