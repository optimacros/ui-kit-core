import '../assets/index8.css';
import { jsx as o } from "react/jsx-runtime";
import { c as e } from "../index-DWRHnq8_.js";
import r from "react";
import { Navigation as _ } from "./BaseNavigation.js";
import { m as c } from "../mergeStyle-CWZcmjsX.js";
const s = "Navigation-module__NavigationContainer__nUcSh", g = "Navigation-module__NavigationContainer__nUcSh", v = "Navigation-module__Button__nUcSh", N = "Navigation-module__Button__nUcSh", m = "Navigation-module__check__nUcSh", p = "Navigation-module__text__nUcSh", l = "Navigation-module__NavigationContainer_Vertical__nUcSh", C = "Navigation-module__NavigationContainer_Vertical__nUcSh", h = "Navigation-module__NavigationContainer_Wrap__nUcSh", u = "Navigation-module__NavigationContainer_Wrap__nUcSh", a = {
  NavigationContainer: s,
  navigationContainer: g,
  Button: v,
  button: N,
  check: m,
  text: p,
  NavigationContainer_Vertical: l,
  navigationContainerVertical: C,
  NavigationContainer_Wrap: h,
  navigationContainerWrap: u
};
class x extends r.Component {
  render() {
    var n;
    const t = c(this.props.theme, a), i = e(
      {
        [a.NavigationContainer]: !0,
        [a.NavigationContainer_Vertical]: ((n = this.props) == null ? void 0 : n.type) === "vertical",
        [a.NavigationContainer_Wrap]: this.props.wrap
      },
      this.props.className
    );
    return /* @__PURE__ */ o(
      _,
      {
        ...this.props,
        theme: t,
        className: i
      }
    );
  }
}
export {
  x as Navigation
};
