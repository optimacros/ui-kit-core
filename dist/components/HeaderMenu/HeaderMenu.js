import { jsx as p } from "react/jsx-runtime";
import { l } from "../lodash-IPxMcogW.js";
import { o as f } from "../mobxreact.esm-CHzN8Djf.js";
import { Component as u } from "react";
import { H as d } from "../HeaderMenuElement-Cuy27jSk.js";
import { s as m } from "../HeaderMenuElementContainer-D5XZvBy7.js";
var v = Object.defineProperty, h = Object.getOwnPropertyDescriptor, c = (e, s, n, t) => {
  for (var r = t > 1 ? void 0 : t ? h(s, n) : s, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (r = (t ? i(s, n, r) : i(r)) || r);
  return t && r && v(s, n, r), r;
};
let a = class extends u {
  render() {
    return l.isEmpty(this.props.elements) ? null : /* @__PURE__ */ p("div", { className: m.Container, children: /* @__PURE__ */ p("ul", { className: m.Menu, children: this.renderList() }) });
  }
  renderList() {
    return l.map(this.props.elements, (e) => e.hidden ? null : /* @__PURE__ */ p(
      d,
      {
        element: e,
        firstLevel: !0
      },
      e.id
    ));
  }
};
a = c([
  f
], a);
export {
  a as HeaderMenu
};
