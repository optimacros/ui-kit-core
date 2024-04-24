import '../../assets/index7.css';
import { jsx as o } from "react/jsx-runtime";
import { c as s } from "../../index-DWRHnq8_.js";
import { l as a } from "../../lodash-IPxMcogW.js";
import { Component as m } from "react";
import { m as c } from "../../mergeStyle-CWZcmjsX.js";
const l = "TabContent-module__TabContent__DLudo", _ = "TabContent-module__TabContent__DLudo", b = "TabContent-module__TabContent_Inner__DLudo", C = "TabContent-module__TabContent_Inner__DLudo", i = {
  TabContent: l,
  tabContent: _,
  TabContent_Inner: b,
  tabContentInner: C
};
class f extends m {
  render() {
    const t = this.getTheme, e = s(t.TabContent, this.props.className);
    return /* @__PURE__ */ o("div", { className: e, children: this.renderPanel() });
  }
  renderPanel() {
    const t = this.getTheme, e = this.props.active ?? 0;
    return a.map(this.props.children, (r, n) => e !== Number(n) ? null : /* @__PURE__ */ o(
      "div",
      {
        className: t.TabContent_Inner,
        children: r
      },
      `panel-${n}`
    ));
  }
  get getTheme() {
    const t = this.props.theme ?? {};
    return c(t, i);
  }
}
export {
  f as TabContent
};
