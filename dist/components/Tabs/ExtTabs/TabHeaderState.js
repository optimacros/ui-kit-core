var C = Object.defineProperty;
var v = (c, s, e) => s in c ? C(c, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[s] = e;
var b = (c, s, e) => (v(c, typeof s != "symbol" ? s + "" : s, e), e);
import { l as i } from "../../lodash-IPxMcogW.js";
import { m as u, o as h, a as T, c as p } from "../../mobx.esm-zRz8Rcao.js";
var y = Object.defineProperty, g = Object.getOwnPropertyDescriptor, l = (c, s, e, o) => {
  for (var t = o > 1 ? void 0 : o ? g(s, e) : s, d = c.length - 1, a; d >= 0; d--)
    (a = c[d]) && (t = (o ? a(s, e, t) : a(t)) || t);
  return o && t && y(s, e, t), t;
};
class r {
  constructor() {
    b(this, "activeTab", 0);
    b(this, "scrollLeft", 0);
    b(this, "scrollableTabsNodes", []);
    b(this, "fixedTabsChildren", []);
    b(this, "scrollableTabsChildren", []);
    b(this, "countFixedTabs", 0);
    b(this, "countScrollableTabs", 0);
    b(this, "tabsScrollerNode", null);
    b(this, "countScrolledTabs", 0);
    u && u(this);
  }
  setActiveTab(s) {
    this.activeTab = s;
  }
  setTabsChildren(s = []) {
    const e = [], o = [];
    i.each(s, (t) => {
      t && t.props.isFixed && e.push(t), t && !t.props.isFixed && o.push(t);
    }), this.fixedTabsChildren = e, this.scrollableTabsChildren = o, this.countFixedTabs = i.size(this.fixedTabsChildren), this.countScrollableTabs = i.size(this.scrollableTabsChildren);
  }
  scrollToTab(s, e = !1) {
    if (this.tabsScrollerNode)
      if (s >= 0) {
        const { width: o } = this.tabsScrollerNode.getBoundingClientRect();
        this.tabsScrollerNode.scrollLeft = e ? this.scrollableTabsOffsetsLeft[s] - o + this.scrollableTabsWidth[s] || 0 : this.scrollableTabsOffsetsLeft[s] || 0;
        const t = i.findIndex(this.scrollableTabsOffsetsLeft, (d) => {
          var a;
          return d >= (((a = this.tabsScrollerNode) == null ? void 0 : a.scrollLeft) || 0);
        });
        this.countScrolledTabs = e ? t - 1 : t;
      } else
        this.tabsScrollerNode.scrollLeft = 0, this.countScrolledTabs = 0;
  }
  setScrollLeft() {
    var s;
    this.scrollLeft = ((s = this.tabsScrollerNode) == null ? void 0 : s.scrollLeft) ?? 0;
  }
  setTabsScrollerNode(s) {
    this.tabsScrollerNode = s;
  }
  setScrollableTabsNodes(s) {
    this.scrollableTabsNodes = s;
  }
  scrollToActiveTab() {
    if (!this.tabsScrollerNode || !this.activeTab)
      return;
    const { width: s } = this.tabsScrollerNode.getBoundingClientRect(), e = this.activeTab - this.countFixedTabs, o = this.scrollableTabsOffsetsLeft[e], t = this.scrollableTabsWidth[e];
    if (i.isUndefined(o) || i.isUndefined(t))
      return;
    const d = o < this.scrollLeft, a = o > this.scrollLeft + s, n = a ? !1 : o + t > this.scrollLeft + s;
    (d || a || n) && this.scrollToTab(e, n);
  }
  get hiddenTabs() {
    if (!this.tabsScrollerNode)
      return [];
    const { width: s } = this.tabsScrollerNode.getBoundingClientRect();
    return i.reduce(
      this.scrollableTabsNodes,
      (e, { current: o }, t) => {
        if (o && this.scrollableTabsChildren[t]) {
          const { width: d } = o.getBoundingClientRect(), a = t + this.countFixedTabs, {
            [t]: { props: n }
          } = this.scrollableTabsChildren, f = n.title || n.label, S = i.isString(f) ? n.disabled : f && f.props.disabled, L = {
            content: f,
            active: this.activeTab == a,
            position: a,
            disabled: S
          }, N = this.scrollableTabsOffsetsLeft[t] + i.floor(d) > i.ceil(s) + this.scrollLeft;
          (this.scrollableTabsOffsetsLeft[t] < this.scrollLeft || N) && e.push(L);
        }
        return e;
      },
      []
    );
  }
  get scrollableTabsOffsetsLeft() {
    return i.reduce(
      this.scrollableTabsWidth,
      (s, e, o) => (o > 0 ? s.push((s[o - 1] ?? 0) + (this.scrollableTabsWidth[o - 1] ?? 0)) : s.push(0), s),
      []
    );
  }
  get scrollableTabsWidth() {
    return i.map(this.scrollableTabsNodes, ({ current: s }) => s ? i.round(s.getBoundingClientRect().width) : 0);
  }
}
l([
  h
], r.prototype, "activeTab", 2);
l([
  h
], r.prototype, "scrollLeft", 2);
l([
  h
], r.prototype, "scrollableTabsNodes", 2);
l([
  h
], r.prototype, "fixedTabsChildren", 2);
l([
  h
], r.prototype, "scrollableTabsChildren", 2);
l([
  h
], r.prototype, "countFixedTabs", 2);
l([
  h
], r.prototype, "countScrollableTabs", 2);
l([
  h
], r.prototype, "tabsScrollerNode", 2);
l([
  h
], r.prototype, "countScrolledTabs", 2);
l([
  T.bound
], r.prototype, "setActiveTab", 1);
l([
  T.bound
], r.prototype, "setTabsChildren", 1);
l([
  T.bound
], r.prototype, "scrollToTab", 1);
l([
  T.bound
], r.prototype, "setScrollLeft", 1);
l([
  T.bound
], r.prototype, "setTabsScrollerNode", 1);
l([
  T.bound
], r.prototype, "setScrollableTabsNodes", 1);
l([
  p
], r.prototype, "hiddenTabs", 1);
l([
  p
], r.prototype, "scrollableTabsOffsetsLeft", 1);
l([
  p
], r.prototype, "scrollableTabsWidth", 1);
export {
  r as TabHeaderState
};
