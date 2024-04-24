var h = Object.defineProperty;
var p = (e, r, t) => r in e ? h(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var a = (e, r, t) => (p(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as d } from "react/jsx-runtime";
import { l as s } from "../lodash-IPxMcogW.js";
import l from "react";
import { TabsContainer as b } from "./ExtTabs/TabsContainer.js";
import "./ExtTabs/TabHeader.js";
import "../index-DWRHnq8_.js";
class g extends l.Component {
  constructor(t) {
    super(t);
    a(this, "state", {
      activeTab: this.props.active ?? 0
    });
    a(this, "onTabSwitch", (t) => {
      this.props.onChange && this.props.onChange(t), this.setActiveTab(t);
    });
    this.setCorrectActiveTab(this.props, this.state);
  }
  static getDerivedStateFromProps(t, i) {
    return o(t, i) ? { activeTab: c(t) ?? 0 } : null;
  }
  render() {
    const {
      children: t,
      onChange: i,
      ...n
    } = this.props;
    return /* @__PURE__ */ d(
      b,
      {
        ...n,
        active: this.state.activeTab,
        onTabSwitch: this.onTabSwitch,
        children: this.renderContent()
      }
    );
  }
  renderContent() {
    return s.isArray(this.props.children) ? s.compact(this.props.children) : [this.props.children];
  }
  setCorrectActiveTab(t, i) {
    if (o(t, i)) {
      const n = c(t) ?? 0;
      this.setActiveTab(n);
    }
  }
  setActiveTab(t) {
    this.setState({ activeTab: t });
  }
}
function o(e, r) {
  if (!s.isArray(e.children))
    return !1;
  const i = s.compact(e.children)[r.activeTab];
  return (i == null ? void 0 : i.props.disabled) ?? !1;
}
function c(e) {
  if (!s.isArray(e.children))
    return null;
  const r = s.compact(e.children);
  return s.findIndex(r, (t) => t && !t.props.disabled);
}
export {
  g as Tabs
};
