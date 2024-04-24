var E = Object.defineProperty;
var w = (r, e, t) => e in r ? E(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var u = (r, e, t) => (w(r, typeof e != "symbol" ? e + "" : e, t), t);
import { jsx as p, jsxs as N } from "react/jsx-runtime";
import { c as g } from "./index-DWRHnq8_.js";
import { l as c } from "./lodash-IPxMcogW.js";
import { o as m } from "./mobxreact.esm-CHzN8Djf.js";
import h from "react";
import { s as l, H as L } from "./HeaderMenuElementContainer-D5XZvBy7.js";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, b = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? S(e, t) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (s = (n ? i(e, t, s) : i(s)) || s);
  return n && s && P(e, t, s), s;
};
const f = 2, O = 20;
let d = class extends h.Component {
  constructor(e) {
    super(e);
    u(this, "rootMenuNode");
    u(this, "setStyles", () => {
      const e = this.props.rootElementNode.current, t = this.rootMenuNode.current;
      if (t && e) {
        const { top: n, left: s, width: o } = e.getBoundingClientRect(), { height: i, width: M } = t.getBoundingClientRect(), _ = this.getTopPosition(n, i), v = this.getLeftPosition(s, M, o);
        t.style.top = `${_}px`, t.style.left = `${v}px`;
      }
    });
    this.rootMenuNode = h.createRef();
  }
  componentDidMount() {
    this.props.firstLevel || this.setStyles();
  }
  render() {
    const { elements: e, element: t } = this.props;
    return c.isEmpty(e) ? null : /* @__PURE__ */ p(
      "div",
      {
        className: l.SubMenu,
        ref: this.rootMenuNode,
        children: /* @__PURE__ */ p(
          "ul",
          {
            className: l.SubMenuScrollList,
            id: t.type,
            children: this.renderList()
          }
        )
      }
    );
  }
  renderList() {
    return c.map(this.props.elements, (e) => e.hidden ? null : /* @__PURE__ */ p(
      a,
      {
        element: e
      },
      e.id
    ));
  }
  getTopPosition(e, t) {
    const n = window.innerHeight;
    return e + t < n ? e : n - t - O;
  }
  getLeftPosition(e, t, n) {
    const s = e + t + n < window.innerWidth, o = e + n - f, i = e - t + f;
    return s ? o : i;
  }
};
d = b([
  m
], d);
var R = Object.defineProperty, H = Object.getOwnPropertyDescriptor, x = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? H(e, t) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (s = (n ? i(e, t, s) : i(s)) || s);
  return n && s && R(e, t, s), s;
};
let a = class extends h.Component {
  constructor(e) {
    super(e);
    u(this, "node");
    u(this, "state", {
      showMenu: !1
    });
    u(this, "onMouseEnter", () => {
      this.setState(() => ({
        showMenu: !0
      }));
    });
    u(this, "onMouseLeave", () => {
      this.setState(() => ({
        showMenu: !1
      }));
    });
    this.node = h.createRef();
  }
  render() {
    const { element: e } = this.props;
    if (e.hidden)
      return null;
    const t = g({
      [l.MenuItem]: !0,
      [l.MenuItem__disabled]: e.disabled,
      [l.MenuItem_child]: e.isChild,
      [l.MenuItem_parent]: e.isParent
    });
    return /* @__PURE__ */ N(
      "li",
      {
        className: t,
        ref: this.node,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        title: e.title,
        children: [
          /* @__PURE__ */ p(
            L,
            {
              element: e,
              isFirstLevel: this.props.firstLevel
            }
          ),
          this.renderSubMenu()
        ]
      }
    );
  }
  renderSubMenu() {
    const { element: e } = this.props;
    return !this.state.showMenu || c.isEmpty(e.children) ? null : /* @__PURE__ */ p(
      d,
      {
        element: e,
        elements: e.children,
        rootElementNode: this.node,
        firstLevel: this.props.firstLevel
      }
    );
  }
};
a = x([
  m
], a);
export {
  a as H,
  d as a
};
