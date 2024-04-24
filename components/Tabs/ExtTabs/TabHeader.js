import '../../assets/index6.css';
var N = Object.defineProperty;
var Y = (c, e, t) => e in c ? N(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var d = (c, e, t) => (Y(c, typeof e != "symbol" ? e + "" : e, t), t);
import { jsxs as w, jsx as _ } from "react/jsx-runtime";
import { c as C } from "../../index-DWRHnq8_.js";
import { l as b } from "../../lodash-IPxMcogW.js";
import { o as M } from "../../mobxreact.esm-CHzN8Djf.js";
import I, { Component as x } from "react";
import { TabHeaderState as L } from "./TabHeaderState.js";
import { K as D } from "../../KeyboardKeyList-CVetZNNA.js";
import { m as X } from "../../mergeStyle-CWZcmjsX.js";
import { ButtonMenu as y } from "../../ButtonMenu/index.js";
import { Counter as A } from "../../Counter/index.js";
import { Icon as P } from "../../Icon/Icon.js";
import { MenuItem as R } from "../../Menu/index.js";
const U = "TabHeader-module__TabHeaderContainer__iu1oY", W = "TabHeader-module__TabHeaderContainer__iu1oY", k = "TabHeader-module__TabHeaderContainer_noScroller__iu1oY", K = "TabHeader-module__TabHeaderContainer_noScroller__iu1oY", O = "TabHeader-module__TabHeaderContainerScroller__iu1oY", j = "TabHeader-module__TabHeaderContainerScroller__iu1oY", z = "TabHeader-module__TabButton__iu1oY", $ = "TabHeader-module__TabButton__iu1oY", F = "TabHeader-module__TabButton_Inner__iu1oY", q = "TabHeader-module__TabButton_Inner__iu1oY", V = "TabHeader-module__TabButton_Content__iu1oY", G = "TabHeader-module__TabButton_Content__iu1oY", J = "TabHeader-module__TabButton__active__iu1oY", Q = "TabHeader-module__TabButton__active__iu1oY", Z = "TabHeader-module__TabButton__disabled__iu1oY", ee = "TabHeader-module__TabButton__disabled__iu1oY", te = "TabHeader-module__Icon__iu1oY", oe = "TabHeader-module__Icon__iu1oY", ne = "TabHeader-module__Dropdown__iu1oY", ae = "TabHeader-module__Dropdown__iu1oY", re = "TabHeader-module__DropdownButton__iu1oY", se = "TabHeader-module__DropdownButton__iu1oY", ie = "TabHeader-module__DropdownButtonContainer__iu1oY", de = "TabHeader-module__DropdownButtonContainer__iu1oY", le = "TabHeader-module__DropdownButtonElement__iu1oY", ue = "TabHeader-module__DropdownButtonElement__iu1oY", ce = "TabHeader-module__DropdownButtonElement_active__iu1oY", be = "TabHeader-module__DropdownButtonElement_active__iu1oY", pe = "TabHeader-module__DropdownButtonElement_disabled__iu1oY", _e = "TabHeader-module__DropdownButtonElement_disabled__iu1oY", Te = "TabHeader-module__MenuRootContainerClassName__iu1oY", he = "TabHeader-module__MenuRootContainerClassName__iu1oY", p = {
  TabHeaderContainer: U,
  tabHeaderContainer: W,
  TabHeaderContainer_noScroller: k,
  tabHeaderContainerNoScroller: K,
  TabHeaderContainerScroller: O,
  tabHeaderContainerScroller: j,
  TabButton: z,
  tabButton: $,
  TabButton_Inner: F,
  tabButtonInner: q,
  TabButton_Content: V,
  tabButtonContent: G,
  TabButton__active: J,
  tabButtonActive: Q,
  TabButton__disabled: Z,
  tabButtonDisabled: ee,
  Icon: te,
  icon: oe,
  Dropdown: ne,
  dropdown: ae,
  DropdownButton: re,
  dropdownButton: se,
  DropdownButtonContainer: ie,
  dropdownButtonContainer: de,
  DropdownButtonElement: le,
  dropdownButtonElement: ue,
  DropdownButtonElement_active: ce,
  dropdownButtonElementActive: be,
  DropdownButtonElement_disabled: pe,
  dropdownButtonElementDisabled: _e,
  MenuRootContainerClassName: Te,
  menuRootContainerClassName: he
};
var me = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, He = (c, e, t, o) => {
  for (var r = o > 1 ? void 0 : o ? fe(e, t) : e, n = c.length - 1, l; n >= 0; n--)
    (l = c[n]) && (r = (o ? l(e, t, r) : l(r)) || r);
  return o && r && me(e, t, r), r;
};
let S = class extends x {
  constructor(e) {
    super(e);
    d(this, "tabHeaderState");
    d(this, "scrollableTabsNodes", []);
    d(this, "dragTarget", null);
    d(this, "space", 10);
    d(this, "renderIcon", (e) => {
      const t = e.props;
      return t.icon ? typeof t.icon == "string" ? /* @__PURE__ */ _(
        P,
        {
          className: p.Icon,
          value: t.icon
        }
      ) : t.icon : null;
    });
    d(this, "setTabsScrollerNode", (e) => {
      this.tabHeaderState.setTabsScrollerNode(e);
    });
    d(this, "onWheel", ({ deltaY: e }) => {
      const t = e > 0 ? 1 : -1, o = this.tabHeaderState.countScrolledTabs + t;
      this.tabHeaderState.scrollToTab(o);
    });
    d(this, "onScroll", () => {
      this.tabHeaderState.setScrollLeft();
    });
    d(this, "onHeaderContextMenu", (e, t) => {
      const o = t.props;
      o.onHeaderContextMenu && o.onHeaderContextMenu(e);
    });
    d(this, "onDoubleClick", (e) => {
      const t = e.props;
      t.onDoubleClick && t.onDoubleClick();
    });
    d(this, "onMouseDown", (e, t) => {
      this.dragTarget = {
        offsetLeft: e.currentTarget.offsetLeft,
        moveX: `${e.currentTarget.offsetLeft}px`,
        mouseX: e.pageX,
        index: t
      };
    });
    d(this, "onMouseUp", () => {
      this.dragTarget = null, this.forceUpdate();
    });
    d(this, "onMouseMove", (e) => {
      if (!this.dragTarget)
        return;
      e.preventDefault(), e.stopPropagation();
      const { tabsScrollerNode: t, countScrollableTabs: o, countFixedTabs: r } = this.tabHeaderState;
      if (!t)
        return;
      const n = this.dragTarget, l = n.index === 0, T = n.index + 1 >= o, a = t.children[n.index - 1], s = t.children[n.index + 1], h = n.mouseX - n.offsetLeft;
      let i = r + n.index;
      const m = l ? 0 : -(Math.round(a.clientWidth) / 2 + this.space), f = T ? 0 : Math.round(s.clientWidth) / 2 + this.space;
      let u = e.pageX - n.mouseX;
      if (u <= m)
        if (!l && this.isDraggable(i - 1) && a) {
          if (u = a.clientWidth - Math.abs(u), this.dragTarget.mouseX = a.offsetLeft + h, i--, this.dragTarget.index--, !this.props.onTabPositionChange)
            return;
          this.props.onTabPositionChange(i, i + 1);
        } else
          u = m;
      else if (u >= f && !T && this.isDraggable(i + 1) && s) {
        if (u = -(s.clientWidth - Math.abs(u)), this.dragTarget.mouseX = n.offsetLeft + s.clientWidth + h, i++, this.dragTarget.index++, !this.props.onTabPositionChange)
          return;
        this.props.onTabPositionChange(i, i - 1);
      }
      this.dragTarget.moveX = `${u}px`, this.forceUpdate();
    });
    this.tabHeaderState = new L();
  }
  componentDidMount() {
    this.tabHeaderState.setActiveTab(this.props.active), this.props.children && this.tabHeaderState.setTabsChildren(this.props.children), setTimeout(() => {
      this.tabHeaderState.setScrollableTabsNodes(this.scrollableTabsNodes), this.tabHeaderState.scrollToActiveTab();
    }, 100), this.props.draggable && (window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp));
  }
  componentWillUnmount() {
    this.props.draggable && (window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp));
  }
  componentDidUpdate(e) {
    var t;
    if ((!b.isEqual(e.children, this.props.children) || !b.isEqual(e.scrollAreaSizeIndicator, this.props.scrollAreaSizeIndicator)) && (this.tabHeaderState.setTabsChildren(this.props.children), setTimeout(() => {
      this.tabHeaderState.setScrollableTabsNodes(this.scrollableTabsNodes), this.tabHeaderState.scrollToActiveTab();
    }, 100)), this.props.active != e.active && (this.tabHeaderState.setActiveTab(this.props.active), this.tabHeaderState.scrollToActiveTab()), this.props.draggable && this.dragTarget) {
      const { tabsScrollerNode: o } = this.tabHeaderState;
      this.dragTarget.offsetLeft = (t = o == null ? void 0 : o.children[this.dragTarget.index]) == null ? void 0 : t.offsetLeft;
    }
  }
  render() {
    const e = this.getTheme, t = C(
      {
        [e.TabHeaderContainer]: !0,
        [p.TabHeaderContainer_noScroller]: !this.tabHeaderState.countScrollableTabs
      },
      this.props.className
    );
    return /* @__PURE__ */ w(
      "nav",
      {
        className: t,
        "data-component-name": "TabsContainer",
        "data-group-name": this.props.groupName,
        children: [
          this.renderTabsHeaderButton(!1),
          this.renderScroller(),
          this.renderDropdown()
        ]
      }
    );
  }
  renderScroller() {
    return this.tabHeaderState.countScrollableTabs ? /* @__PURE__ */ _(
      "div",
      {
        ref: this.setTabsScrollerNode,
        className: p.TabHeaderContainerScroller,
        onWheel: this.onWheel,
        onScroll: this.onScroll,
        "data-component-name": "TabScrollContainer",
        children: this.renderTabsHeaderButton(!0)
      }
    ) : null;
  }
  renderTabsHeaderButton(e) {
    const t = this.getTheme, {
      scrollableTabsChildren: o,
      fixedTabsChildren: r,
      countFixedTabs: n,
      countScrollableTabs: l
    } = this.tabHeaderState, T = e ? o : r;
    return b.isEmpty(T) ? null : b.map(T, (a, s) => {
      const h = e ? s + n : s;
      if (b.isEmpty(a))
        return null;
      const i = b.has(a.props, "disabled") ? a.props.disabled : !1, m = {}, f = {}, u = !a.props.nonDraggable && this.dragTarget && this.dragTarget.index === s, v = this.props.active === h, g = a.props.title || a.props.label, E = C(
        {
          [t.TabButton]: !0,
          [t.TabButton__active]: v,
          [t.TabButton__draggable]: u,
          [t.TabButton__disabled]: i
        },
        a.props.className
      );
      m.zIndex = l - s, f.transform = "translateX(0)", this.dragTarget && this.dragTarget.index === s && (m.zIndex = l + 1, f.transform = `translateX(${this.dragTarget.moveX})`), a.props.nonDraggable && (f.transform = "translateX(0)");
      const B = {
        className: t.TabButton_Inner,
        style: f,
        onClick: i ? void 0 : this.switchTab.bind(this, h),
        onMouseDown: i || !e ? void 0 : (H) => this.onMouseDown(H, s),
        onContextMenu: i ? void 0 : (H) => this.onHeaderContextMenu(H, a),
        onDoubleClick: i ? void 0 : () => this.onDoubleClick(a)
      };
      return e && (this.scrollableTabsNodes[s] = I.createRef(), B.ref = this.scrollableTabsNodes[s]), /* @__PURE__ */ _(
        "div",
        {
          role: "none",
          className: E,
          style: m,
          onKeyDown: (H) => this.onKeyPress(H, h),
          tabIndex: 0,
          "data-component-name": "TabButton",
          children: /* @__PURE__ */ _("div", { ...B, children: /* @__PURE__ */ w(
            "div",
            {
              className: t.TabButton_Content,
              title: b.isString(g) ? g : void 0,
              children: [
                this.renderIcon(a),
                g,
                this.renderCounter(a)
              ]
            }
          ) })
        },
        s
      );
    });
  }
  renderCounter(e) {
    const {
      counter: t,
      maxCounter: o,
      counterLink: r
    } = e.props;
    return t ? /* @__PURE__ */ _(
      A,
      {
        value: t,
        maxValue: o,
        route: r
      }
    ) : null;
  }
  renderDropdown() {
    if (b.isEmpty(this.tabHeaderState.hiddenTabs))
      return null;
    const e = this.getTheme;
    return /* @__PURE__ */ _("div", { className: p.Dropdown, children: /* @__PURE__ */ _(
      y,
      {
        className: p.DropdownButton,
        theme: e,
        label: this.props.hiddenTabsLabel ?? "Hidden Tabs",
        showOnlyIcon: !0,
        arrowUp: this.props.arrowUp,
        classNameDropdownContainer: p.DropdownButtonContainer,
        children: this.renderDropdownList()
      }
    ) });
  }
  renderDropdownList() {
    return b.map(this.tabHeaderState.hiddenTabs, (e, t) => {
      const { content: o, active: r, position: n, disabled: l } = e, T = C({
        [p.DropdownButtonElement]: !0,
        [p.DropdownButtonElement_active]: r
      });
      return /* @__PURE__ */ _(
        R,
        {
          className: T,
          disabled: l,
          onClick: () => this.switchTab(n),
          children: o
        },
        t
      );
    });
  }
  onKeyPress(e, t) {
    this.tabHeaderState.scrollToTab(t), (e.key === D.SPACE || e.key === D.ENTER) && this.props.onTabSwitch && (e.preventDefault(), this.props.onTabSwitch(t));
  }
  switchTab(e) {
    this.props.active != e && this.props.onTabSwitch ? this.props.onTabSwitch(e) : this.tabHeaderState.scrollToActiveTab();
  }
  isDraggable(e) {
    var t;
    return !((t = this.props.children[e]) != null && t.props.nonDraggable);
  }
  get getTheme() {
    const e = this.props.theme;
    return X(p, e);
  }
};
S = He([
  M
], S);
export {
  S as TabHeader
};
