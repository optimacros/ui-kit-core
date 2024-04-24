import '../../assets/index5.css';
import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { c as m } from "../../index-DWRHnq8_.js";
import { Component as c } from "react";
import { TabContent as p } from "./TabContent.js";
import { TabHeader as l } from "./TabHeader.js";
import { m as h } from "../../mergeStyle-CWZcmjsX.js";
const d = "TabsContainer-module__TabsContainer__UUaQT", C = "TabsContainer-module__TabsContainer__UUaQT", T = {
  TabsContainer: d,
  tabsContainer: C
};
class y extends c {
  render() {
    const {
      headerClassName: r,
      contentClassName: o,
      theme: t = {},
      children: _,
      ...e
    } = this.props, s = h(t, T), n = m(s.TabsContainer, this.props.className);
    return /* @__PURE__ */ i("div", { className: n, children: [
      !this.props.hideTabHeader && /* @__PURE__ */ a(
        l,
        {
          ...e,
          className: r,
          theme: s,
          children: this.props.children
        }
      ),
      /* @__PURE__ */ a(
        p,
        {
          ...e,
          className: o,
          theme: s,
          children: this.props.children
        }
      )
    ] });
  }
}
export {
  y as TabsContainer
};
