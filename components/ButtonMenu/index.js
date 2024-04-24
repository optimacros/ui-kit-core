import '../assets/index13.css';
var q = Object.defineProperty;
var z = (s, n, t) => n in s ? q(s, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[n] = t;
var h = (s, n, t) => (z(s, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as o, jsxs as J, Fragment as X } from "react/jsx-runtime";
import { c } from "../index-DWRHnq8_.js";
import { PureComponent as x } from "react";
import { m as M } from "../mergeStyle-CWZcmjsX.js";
import { Button as B } from "../Button/index.js";
import { Dropdown as T } from "../Dropdown/index.js";
import { FontIcon as g } from "../FontIcon/FontIcon.js";
import { Menu as v } from "../Menu/index.js";
import { Tooltip as D } from "../Tooltip/Tooltip.js";
const P = "ButtonMenu-module__ButtonMenu__zqJjX", S = "ButtonMenu-module__ButtonMenu__zqJjX", V = "ButtonMenu-module__rippleWrapper__zqJjX", k = "ButtonMenu-module__buttonText__zqJjX", R = "ButtonMenu-module__buttonIcon__zqJjX", U = "ButtonMenu-module__icon__zqJjX", W = "ButtonMenu-module__accent__zqJjX", F = "ButtonMenu-module__ButtonMenu__uppercase__zqJjX", H = "ButtonMenu-module__ButtonMenu__uppercase__zqJjX", $ = "ButtonMenu-module__ButtonMenu__showOnlyIcon__zqJjX", A = "ButtonMenu-module__ButtonMenu__showOnlyIcon__zqJjX", e = {
  ButtonMenu: P,
  buttonMenu: S,
  rippleWrapper: V,
  buttonText: k,
  buttonIcon: R,
  icon: U,
  accent: W,
  ButtonMenu__uppercase: F,
  buttonMenuUppercase: H,
  ButtonMenu__showOnlyIcon: $,
  buttonMenuShowOnlyIcon: A
};
class at extends x {
  constructor() {
    super(...arguments);
    h(this, "renderContent", (t, u, r) => /* @__PURE__ */ J(X, { children: [
      !this.props.showOnlyIcon && /* @__PURE__ */ o("div", { className: t, children: this.props.label }),
      /* @__PURE__ */ o("div", { className: u, children: /* @__PURE__ */ o(g, { value: r }) })
    ] }));
  }
  render() {
    return /* @__PURE__ */ o(
      T,
      {
        overlay: this.renderMenu(),
        trigger: ["click"],
        disabled: this.props.disabled,
        onVisibleChange: this.props.onVisibleChange,
        visible: this.props.visible,
        className: this.props.classNameDropdownContainer,
        children: this.renderButton()
      }
    );
  }
  renderMenu() {
    const { menuRootContainerClassName: t } = this.props, u = M(this.props.theme, e), r = c(t, u.MenuRootContainerClassName);
    return /* @__PURE__ */ o(v, { className: r, children: this.props.children });
  }
  renderButton() {
    const {
      tooltip: t,
      tooltipDelay: u,
      tooltipHideOnClick: r,
      tooltipPosition: b,
      tooltipShowOnClick: C,
      tooltipOffset: N,
      theme: w,
      showOnlyIcon: I,
      arrowUp: j,
      dataName: f,
      onVisibleChange: E,
      visible: G,
      className: y,
      menuRootContainerClassName: K,
      classNameDropdownContainer: L,
      uppercase: O,
      label: p,
      ...l
    } = this.props, a = M(w, e), i = c(
      {
        [e.ButtonMenu]: !0,
        [e.ButtonMenu__uppercase]: O,
        [e.ButtonMenu__showOnlyIcon]: I
      },
      y,
      a.ButtonMenu
    ), _ = c(e.buttonText, a.buttonText), m = c(e.buttonIcon, a.buttonIcon), d = j ? "arrow_drop_up" : "arrow_drop_down";
    return t ? /* @__PURE__ */ o(
      D,
      {
        composedComponent: B,
        composedComponentProps: {
          ...l,
          "data-label": p,
          "data-name": f
        },
        className: i,
        tooltip: t,
        theme: a,
        tooltipDelay: u,
        tooltipHideOnClick: r,
        tooltipPosition: b,
        tooltipShowOnClick: C,
        tooltipOffset: N,
        children: this.renderContent(_, m, d)
      }
    ) : /* @__PURE__ */ o(
      B,
      {
        ...l,
        theme: a,
        className: i,
        "data-label": p,
        "data-name": this.props.dataName,
        children: this.renderContent(_, m, d)
      }
    );
  }
}
export {
  at as ButtonMenu
};
